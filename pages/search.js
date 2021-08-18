import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { searchPost } from "../lib/utils";

export default function Search({}) {
  const [result, setResult] = useState([]);

  const router = useRouter();
  const [term, setTerm] = useState(router.query.q);

  const onSearchPost = async () => {
    const res = await searchPost(term);
    await setResult(res);
  };
  useEffect(() => {
    if (router.query.q) {
      console.log(router.query.q);

      onSearchPost();
    }
  }, [term]);

  return (
    <div className="min-h-screen">
      <Head>
        <title>TonyTony's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center sm:px-20 py-10">
        <div className="flex flex-row gap-x-2 my-2 justify-center w-full ">
          <svg
            onClick={() => setOpen((prevState) => !prevState)}
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>

          <input
            className="outline-none text-2xl text-left rounded-md border-2 px-2"
            placeholder="Search"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          ></input>
        </div>

        {result.length > 0 ? (
          result.map((post) => {
            return (
              <Link href={`/post/${post.id}`}>
                <a>
                  <div className="p-4 m-4 border-b-2 ">
                    <h1 className="text-xl font-semibold">{post.title}</h1>
                  </div>
                </a>
              </Link>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </main>
    </div>
  );
}
