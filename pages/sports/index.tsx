import Container from "../../components/container";
import AllStories from "../../components/all-stories";
import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import Post from "../../interfaces/post";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title> All posts</title>
        </Head>
        <Container>
          {allPosts.length > 0 && <AllStories posts={allPosts} dir="sports" />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const directory = "_sports";
  const allPosts = getAllPosts(
    ["title", "date", "slug", "author", "coverImage", "excerpt"],
    directory
  );

  return {
    props: { allPosts },
  };
};
