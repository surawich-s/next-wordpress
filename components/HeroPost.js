import { useState, useEffect } from "react";
import { getAuthor, getFeaturedImage } from "../lib/utils";
import parse from "html-react-parser";

export default function HeroPost({ post }) {
  const [postImgAndAuthor, setPostImgAndAuthor] = useState({
    featImgUrl: "",
    author: "",
  });
  useEffect(() => {
    let mounted = true;

    if (mounted) {
      const author = getAuthor(post.author);
      const featuredImg = getFeaturedImage(post.featured_media);
      //   resolve the promises in getAuthor and getFeaturedImg async functions using Promise.all
      Promise.all([author, featuredImg]).then((res) => {
        setPostImgAndAuthor({
          author: res[0],
          featImgUrl: res[1],
        });
      });
    }

    return () => {
      mounted = false;
    };
  }, []);
  return (
    <header>
      <div className="relative flex justify-center">
        <img
          className="w-full brightness-50 max-h-screen"
          src={postImgAndAuthor.featImgUrl}
          alt="test"
        />
        <div className="text-gray-100 uppercase absolute m-0 top-1/4 text-center w-1/2">
          <h1 className="text-xl md:text-2xl lg:text-5xl">
            {post.title.rendered}
          </h1>
          <p className="text-lg md:text-2xl mt-8 hidden md:block">
            {parse(post.excerpt.rendered)}
          </p>
          <p className="text-lg md:text-xl mt-4">{postImgAndAuthor.author}</p>
        </div>
      </div>
    </header>
  );
}
