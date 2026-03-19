import { client } from "@/sanity/client";
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
      <article className="container max-w-3xl mx-auto px-8 py-12 md:py-24">
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

        <div className="prose prose-lg">
          <PortableText value={post.body} />
        </div>
        <div className="fixed bottom-0 left-0 right-0 flex justify-end items-center gap-8 px-8 py-4 bg-yellowLight border-t border-greenDark">
          <Link href="/blog" className="text-yellowLight bg-greenDark bg-opacity-10  rounded-2xl py-2 px-5 hover:underline">
            Volver al blog
          </Link>
          <Link href="/" className="text-greenDark bg-orangeLight border-2 border-orangeLight rounded-2xl py-2 px-4 hover:underline">
            Volver al inicio
          </Link>
        </div>
      </article>
    </>
  );
};