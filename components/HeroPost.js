import Link from "next/link";
import parse from "html-react-parser";

export default function HeroPost({ post, featuredImg, author }) {
  return (
    <Link href={`/post/${post.id}`}>
      <a>
        <div className="relative flex justify-center">
          <img
            className="w-full brightness-50 max-h-screen"
            src={featuredImg}
            alt="no picture"
          />
          <div className="text-gray-100 uppercase absolute m-0 top-1/4 text-center w-1/2">
            <h1 className="text-xl md:text-2xl lg:text-5xl">
              {post.title.rendered}
            </h1>
            <p className="text-lg md:text-2xl mt-8 hidden md:block">
              {parse(post.excerpt.rendered)}
            </p>
            <p className="text-lg md:text-xl mt-4">{author}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}
