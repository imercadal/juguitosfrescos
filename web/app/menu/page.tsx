import Header from "../componentes/Header";
import ScrollToTopButton from "../componentes/ScrollToTop";
import ProductsList from "./ProductList";
import { client } from "@/sanity/client";
import { categoriesQuery, menuItemsQuery, flexibleItemsQuery, frutasQuery, extractosIngredientesQuery, SanityCategory, SanityMenuItem, SanityFlexibleItem, SanityIngredient } from "@/sanity/queries/menu";

export const revalidate = 30;

export type { SanityCategory, SanityMenuItem };

export default async function MenuPage() {
  const [categories, menuItems, flexibleItems, frutas, extractosIngredientes] = await Promise.all([
    client.fetch<SanityCategory[]>(categoriesQuery),
    client.fetch<SanityMenuItem[]>(menuItemsQuery),
    client.fetch<SanityFlexibleItem[]>(flexibleItemsQuery),
    client.fetch<SanityIngredient[]>(frutasQuery),
    client.fetch<SanityIngredient[]>(extractosIngredientesQuery),
  ]);

  return (
    <>
      <Header />
      <div className="px-4 sm:px-10 md:px-16 py-4 sm:py-8">
        <ProductsList
          categories={categories}
          menuItems={menuItems}
          flexibleItems={flexibleItems}
          frutas={frutas}
          extractosIngredientes={extractosIngredientes}
        />
        <ScrollToTopButton />
      </div>
    </>
  );
};
