import Head from "next/head";
export default function About({ posts, heroPost, author, featuredImg }) {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      About
    </div>
  );
}
