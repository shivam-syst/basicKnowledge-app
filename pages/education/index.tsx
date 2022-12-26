import Container from "../../components/container";
import AllStories from "../../components/all-stories";
import Layout from "../../components/layout";
import { getAllPosts, getFeaturedPosts } from "../../lib/api";
import Head from "next/head";
import Post from "../../interfaces/post";

const directory = "education";

type Props = {
  allPosts: Post[];
  featuredPosts?: Post[];
};

export default function Index({ allPosts, featuredPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Education | Basic Knowledge</title>
        </Head>
        <Container>
          {allPosts.length > 0 && (
            <>
              {featuredPosts.length > 0 && (
                <AllStories
                  posts={featuredPosts}
                  dir={directory}
                  title="Featured Posts."
                />
              )}
              {allPosts.length > 0 && (
                <AllStories posts={allPosts} dir={directory} />
              )}
            </>
          )}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(
    ["title", "date", "slug", "author", "coverImage", "excerpt", "featured"],
    `_${directory}`
  );
  const featuredPosts = getFeaturedPosts(allPosts);

  return {
    props: { allPosts, featuredPosts },
  };
};
