import Link from "next/link";
import Header from "../componentes/Header";
import PostsList from "./PostsList";

export default function BlogPage() {
  return (
    <>
      <Header />
      <div className="container min-h-96 max-w-4xl mx-auto p-8 sm:p-12">
        <div className="flex flex-col min-h-96 justify-start items-start">
          <h1 className="my-8 font-bold text-2xl text-greenDark shantell-sans">
            El blog
          </h1>
          <PostsList />
        </div>
        <Link
          href="/"
          className="flex justify-end text-xl text-orangeDark hover:scale-105 hover:opacity-75"
        >
          Volver al inicio
        </Link>
      </div>
    </>
  );
};