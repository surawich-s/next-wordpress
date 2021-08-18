import Head from "next/head";
export default function About({ posts, heroPost, author, featuredImg }) {
  return (
    <div className="my-10">
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">
          This project is developed by Surawich-s
        </h1>
        <div className="text-xl my-5 text-center w-1/2">
          <p>
            As part of learning web development, this project used Next.js
            TailwindCSS and Wordpress api for blog data
          </p>
        </div>
        <h2 className="text-xl text-gray-700 my-5">
          <a
            className="font-bold hover:underline"
            href="https://github.com/surawich-s/next-wordpress"
          >
            Link to Github Repository
          </a>
        </h2>
      </div>
    </div>
  );
}
