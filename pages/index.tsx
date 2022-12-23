import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts, getFeaturedPosts } from "../lib/api";
import Head from "next/head";
import Post from "../interfaces/post";

type Props = {
  allPosts: Post[];
  featuredPosts?: Post[];
};

export default function Index({ allPosts, featuredPosts }: Props) {
  const heroPost = featuredPosts[0] || allPosts[0];
  const morePosts = allPosts.slice(1, 5);
  return (
    <>
      <Layout>
        <Head>
          <title> Blog Example</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const directory = "_home";
  const allPosts = getAllPosts(
    ["title", "date", "slug", "author", "coverImage", "excerpt", "featured"],
    directory
  );
  const featuredPosts = getFeaturedPosts(allPosts);

  return {
    props: { allPosts, featuredPosts },
  };
};
