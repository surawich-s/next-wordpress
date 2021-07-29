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
      {" "}
      <h1 className="text-6xl font-bold mt-5 mb-5 text-center">
        Wayne Magazine
      </h1>
      <Component posts={posts} {...pageProps} />
    </>
  );
}

export default MyApp;
