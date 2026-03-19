export const POSTS_QUERY = `*[
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
  "excerpt": body[0].children[0].text,
  igUrl
}`;