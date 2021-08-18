import Head from "next/head";
import Link from "next/link";
import { getCategories } from "../lib/utils";

export default function Categories({ categories }) {
  return (
    <div className="flex flex-row flex-wrap h-32 gap-2 mx-10 my-10">
      <Head>
        <title>Categories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {categories.map((category) => {
        return (
          <div className="relative flex-grow">
            <Link href={`/category/${category.id}`}>
              <a>
                <img
                  className="w-full h-32 rounded-lg object-cover brightness-75 hover:brightness-50"
                  src={
                    category.img ||
                    "https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymxhbmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                  }
                  alt={category.name}
                />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="text-3xl text-gray-100">
                    {category.name}
                  </span>
                </div>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps(context) {
  let categories = await getCategories();
  categories = categories
    .filter((category) => category.id != 2)
    .filter((category) => category.id != 1);

  return {
    props: { categories },
  };
}
