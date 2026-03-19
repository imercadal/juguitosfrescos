import { client, urlFor } from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "../../componentes/Header";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  publishedAt,
  body,
  igUrl,
  image,
  author->{
    name,
    "avatarUrl": avatar.asset->url
  }
}`

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const post = await client.fetch(POST_QUERY, { slug })

  if (!post) return {}

  return {
    title: post.title,
    openGraph: {
      title: post.title,
      type: "article",
      publishedTime: post.publishedAt,
      authors: post.author?.name ? [post.author.name] : undefined,
    },
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await client.fetch(POST_QUERY, { slug })

  if (!post) notFound()

  return (
    <>
      <Header />
      <article className="container max-w-3xl mx-auto px-8 pt-12 pb-28 md:py-24">

        {/* DESKTOP: floated right, before title so text wraps beside it */}
        {post.image && (
          <div className="hidden md:block float-right ml-8 mb-4 w-1/2">
            <Image
              src={urlFor(post.image).url()}
              alt={post.title}
              width={600}
              height={400}
              className="w-full h-auto rounded-xl"
            />
          </div>
        )}

        <h1 className="text-4xl text-greenDark font-bold mb-4">{post.title}</h1>
        <p className="text-sm text-greenDark mb-6">
          {new Date(post.publishedAt).toLocaleDateString('es-ES', { dateStyle: 'long' })}
        </p>
        {post.author && (
          <div className="flex items-center gap-3 mb-8">
            {post.author.avatarUrl && (
              <Image
                src={post.author.avatarUrl}
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
            <span className="text-greenDark">Escrito por {post.author.name}</span>
          </div>
        )}

        {/* MOBILE: full-width block between author and body */}
        {post.image && (
          <div className="block md:hidden w-full mb-6">
            <Image
              src={urlFor(post.image).url()}
              alt={post.title}
              width={600}
              height={400}
              className="w-full h-auto rounded-xl"
            />
          </div>
        )}

        <div className="[&>p]:mb-4">
          <PortableText value={post.body} />
        </div>

        <div className="clear-both" />

        {post.igUrl && (
          <a
            href={post.igUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 mb-4 text-orangeDark hover:underline"
          >
            Ver post en instagram
          </a>
        )}
        <div className="fixed bottom-0 left-0 right-0 flex flex-col md:flex-row justify-end items-center gap-2 md:gap-8 px-8 py-4 bg-yellowLight border-t border-greenDark">
          <Link href="/blog" className="text-yellowLight bg-greenDark bg-opacity-10  rounded-2xl py-1 md:py-2 px-5 hover:underline">
            Volver al blog
          </Link>
          <Link href="/" className="text-greenDark bg-orangeLight border-2 border-orangeLight rounded-2xl py-1 md:py-2 px-5 hover:underline">
            Volver al inicio
          </Link>
        </div>
      </article>
    </>
  );
};