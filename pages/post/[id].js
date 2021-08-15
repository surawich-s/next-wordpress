import axios from "axios";
import parse from "html-react-parser";
import { getAuthor, getFeaturedImage } from "../../lib/utils";
import { POSTS_API_URL } from "../../lib/constants";
import Head from "next/head";
import styles from "../../styles/Post.module.css";
import HeroPost from "../../components/HeroPost";

export default function Post({
  title,
  featuredImg,
  author,
  content,
  date,
  post,
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mb-5 w-full">
        <HeroPost post={post} featuredImg={featuredImg} author={author} />
      </div>

      <main className="flex flex-col items-center flex-1 mx-5 md:px-20 py-10 max-w-5xl m-auto">
        <div className={styles.post}>{parse(content)}</div>
      </main>
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  const res = await axios.get(POSTS_API_URL);
  const posts = res.data;

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const res = await axios.get(`${POSTS_API_URL}/${params.id}`);
  const post = await res.data;

  const featuredImg = await getFeaturedImage(post.featured_media);
  const author = await getAuthor(post.author);

  return {
    props: {
      title: post.title.rendered,
      content: post.content.rendered,
      featuredImg,
      author,
      date: post.date,
      post,
    },
  };
}
