import Link from "next/link";
import Image from "next/image";
import { type SanityDocument } from "next-sanity";
import { client, urlFor } from "../../sanity/client";

const POSTS_QUERY = `*[
  _type == "post" && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  image,
    author->{
    _id,
    name,
    avatar
  },
  "excerpt": body[0].children[0].text
}`;

const options = { next: { revalidate: 30 } };

export default async function PostsList() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="flex flex-col">
      <ul className="space-y-6 pb-6Onl">
        {posts.map((post) => (
          <li key={post._id} className="hover:underline">
            <Link href={`/blog/${post.slug.current}`}>
              <h2 className="text-xl text-greenDark font-semibold">{post.title}</h2>
              <p className="text-sm text-greenDark">
                {new Date(post.publishedAt).toLocaleDateString('es-ES', { dateStyle: 'long' })}
              </p>
              {post.excerpt && (
                <div className="flex items-start gap-3 mt-2">
                  {post.image && (
                    <div className="relative shrink-0 w-24 min-h-24">
                      <Image
                        src={urlFor(post.image).width(100).url()}
                        alt={post.title}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                  )}
                  <p className="text-orangeDark">
                    {post.excerpt.split(" ").length > 40
                      ? post.excerpt.split(" ").slice(0, 40).join(" ") + "…"
                      : post.excerpt}
                  </p>
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}


/*
import Link from 'next/link';
import { type SanityDocument } from "next-sanity";
import { client } from "../../sanity/client";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function PostsList() {
    const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

    return(
        <main className="container mx-auto p-10 flex flex-col">
            <h1 className="text-4xl font-bold mb-8">Posts</h1>
            {posts.map((post)=> (
                <li className="hover:underline" key={post._id}>
                <Link href={`/blog/${post.slug.current}`}>
                    <div className="md:w-1/2 mb-5 md:mr-8">

                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
                        <p>{post.body}</p>
                    </div>
                </Link>
                </li>
            ))}
        </main>
    )
}
    */