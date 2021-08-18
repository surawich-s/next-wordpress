import Head from "next/head";
import HeroPost from "../../components/HeroPost";
import Post from "../../components/Post";
import {
  getPostsByCategories,
  getAuthor,
  getCategories,
  getFeaturedImage,
} from "../../lib/utils";

export default function Category({ posts }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>TonyTony's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mb-5">
        <h1></h1>
      </div>

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

export async function getStaticPaths() {
  const categories = await getCategories();

  // Get the paths we want to pre-render based on posts
  const paths = categories.map((category) => ({
    params: { id: category.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const posts = await getPostsByCategories(params.id);

  return {
    props: { posts },
  };
}
