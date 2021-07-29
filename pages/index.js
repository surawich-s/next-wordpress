import Head from "next/head";
import HeroPost from "../components/HeroPost";
import Post from "../components/Post";
import Footer from "../components/Footer";

export default function Home({ posts }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>TonyTony's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {posts[0] && (
        <div className="mb-5 w-full">
          <HeroPost post={posts[0]} />
        </div>
      )}

      <main className="flex flex-col items-center flex-1 sm:px-20 py-10">
        {posts && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {posts.map((post, id) => {
              return (
                <div key={id}>
                  <Post post={post} />
                </div>
              );
            })}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
