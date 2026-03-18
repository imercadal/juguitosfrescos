export type SanityCategory = {
  _id: string;
  title: string;
  slug: string;
  seccion?: boolean;
};

export type SanityMenuItem = {
  _id: string;
  name: string;
  slug: string;
  price: number;
  description?: string;
  category: string;
};

export const categoriesQuery = `*[_type == "menuCategory"] | order(orden asc) {
  _id,
  "title": nombre,
  "slug": identificador.current,
  seccion
}`

export const menuItemsQuery = `*[_type == "menuItem" && available != false] {
  _id,
  name,
  "slug": slug.current,
  price,
  description,
  "category": category->identificador.current
}`

export type SanityFlexibleItem = {
  _id: string;
  name: string;
  slug: string;
  precioBase: number;
  precioConLeche?: number;
  description?: string;
  category: string;
};

export type SanityIngredient = {
  _id: string;
  ingrediente: string;
  slug: string;
  tipo: ('fruta' | 'extracto')[];
};

export const flexibleItemsQuery = `*[_type == "flexibleItem" && available != false] | order(category->orden asc, orden asc, name asc) {
  _id,
  name,
  "slug": slug.current,
  precioBase,
  precioConLeche,
  description,
  "category": category->identificador.current
}`;

export const frutasQuery = `*[_type == "ingredient" && available != false && "fruta" in tipo] | order(ingrediente asc) {
  _id,
  "ingrediente": ingrediente,
  "slug": identificador.current,
  tipo
}`;

export const extractosIngredientesQuery = `*[_type == "ingredient" && available != false && "extracto" in tipo] | order(ingrediente asc) {
  _id,
  "ingrediente": ingrediente,
  "slug": identificador.current,
  tipo
}`;
