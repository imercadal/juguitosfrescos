export const ARTISTS_QUERY = `*[_type == "artist"] | order(orden asc) {
  _id,
  name,
  bio,
  avatar
}`
