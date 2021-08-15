import Link from "next/link";
import { useState, useEffect } from "react";
import { getAuthor, getFeaturedImage } from "../lib/utils";
import parse from "html-react-parser";

export default function Post({ post }) {
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
    <div className="mb-5 rounded-lg bg-white shadow-md">
      <Link href={`/post/${post.id}`}>
        <a>
          <img
            className="excerpt-img mb-2 max-h-48 rounded-t-lg"
            src={
              postImgAndAuthor
                ? postImgAndAuthor.featImgUrl
                : "/aeeiee-logo.png"
            }
          />
          <div className="m-4">
            <div className="text-2xl font-bold">{post.title.rendered}</div>
            <div className="mt-4 text-lg max-w-lg">
              {parse(post.excerpt.rendered)}
            </div>
            <div className="mt-4 text-gray-700 text-lg">
              {postImgAndAuthor.author}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
