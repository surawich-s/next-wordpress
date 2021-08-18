import Head from "next/head";
import HeroPost from "../components/HeroPost";
import Post from "../components/Post";
import {
  getAllPostsFromServer,
  getAuthor,
  getFeaturedImage,
} from "../lib/utils";

export default function Home({ posts, heroPost, author, featuredImg }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>TonyTony's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {heroPost && author && featuredImg && (
        <div className="mb-5 w-full">
          <HeroPost post={heroPost} author={author} featuredImg={featuredImg} />
        </div>
      )}

      <main className="flex flex-col items-center flex-1 sm:px-20 py-10">
        {posts && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {posts.map((post) => {
              return <Post post={post} />;
            })}
          </div>
        )}
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  let posts = await getAllPostsFromServer();
  const heroPost = await posts.find((post) =>
    post.categories.some((category) => category == 2)
  );
  posts = posts.filter((post) => post.categories != 2);
  const author = await getAuthor(heroPost.author);
  const featuredImg = await getFeaturedImage(heroPost.featured_media);
  return {
    props: { posts, heroPost, author, featuredImg },
  };
}
