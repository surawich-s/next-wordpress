import "../styles/globals.css";
import { getAllPostsFromServer } from "../lib/utils";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    let mounted = true;

    if (mounted) {
      const postsFromServer = await getAllPostsFromServer();
      setPosts(postsFromServer);
    }

    return () => (mounted = false);
  }, []);

  return (
    <>
      <div className="flex flex-row items-center bg-white">
        <div className="flex-1 justify-self-start">
          <div className="flex flex-row items-center ml-auto pl-8">
            <svg
              className="w-8 h-8 pr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <p className="text-2xl">Menu</p>
          </div>
        </div>
        <div className="flex-1">
          <button>
            <a href="/">
              <h1 className="text-5xl font-bold mt-5 mb-5 text-center">
                Wayne Magazine
              </h1>
            </a>
          </button>
        </div>
        <div className="flex-1 justify-self-end">
          <div className="flex flex-row gap-x-2 mr-auto justify-end pr-8">
            <svg
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
              className="outline-none text-2xl"
              placeholder="Search"
            ></input>
          </div>
        </div>
      </div>

      <Component posts={posts} {...pageProps} />
    </>
  );
}

export default MyApp;
