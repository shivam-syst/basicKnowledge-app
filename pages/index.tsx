import Container from "../components/container";
import HeroPost from "../components/hero-post";
import Button from "../components/button";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts, getFeaturedPosts } from "../lib/api";
import Head from "next/head";
import Post from "../interfaces/post";
import MoreStories from "../components/more-stories";

type Props = {
  allPosts: Post[];
  featuredPosts?: Post[];
  featuredEducationPosts?: Post[];
  featuredSportsPosts?: Post[];
  featuredPoliticsPosts?: Post[];
  featuredGadgetsPosts?: Post[];
  featuredGeneralPosts?: Post[];
};

export default function Index({
  allPosts,
  featuredPosts,
  featuredEducationPosts,
  featuredSportsPosts,
  featuredPoliticsPosts,
  featuredGadgetsPosts,
  featuredGeneralPosts,
}: Props) {
  const heroPost = featuredPosts[0] || allPosts[0];
  const morePosts = allPosts.slice(1, 5);
  return (
    <>
      <Layout>
        <Head>
          <title> Home | Basic Knowledge</title>
        </Head>
        <Container>
          <Intro text={heroPost.title} />
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
          {morePosts.length > 0 && <MoreStories posts={morePosts} dir="home" />}
          {featuredEducationPosts.length > 0 && (
            <MoreStories posts={featuredEducationPosts} dir="education" />
          )}
          {featuredSportsPosts.length > 0 && (
            <MoreStories posts={featuredSportsPosts} dir="sports" />
          )}
          {featuredPoliticsPosts.length > 0 && (
            <MoreStories posts={featuredPoliticsPosts} dir="politics" />
          )}
          {featuredGadgetsPosts.length > 0 && (
            <MoreStories posts={featuredGadgetsPosts} dir="gadgets" />
          )}
          {featuredGeneralPosts.length > 0 && (
            <MoreStories posts={featuredGeneralPosts} dir="posts" />
          )}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(
    ["title", "date", "slug", "author", "coverImage", "excerpt", "featured"],
    "_home"
  );
  const allEducationPosts = getAllPosts(
    ["title", "date", "slug", "author", "coverImage", "excerpt", "featured"],
    "_education"
  );
  const allPoliticsPosts = getAllPosts(
    ["title", "date", "slug", "author", "coverImage", "excerpt", "featured"],
    "_politics"
  );
  const allSportsPosts = getAllPosts(
    ["title", "date", "slug", "author", "coverImage", "excerpt", "featured"],
    "_sports"
  );
  const allGadgetsPosts = getAllPosts(
    ["title", "date", "slug", "author", "coverImage", "excerpt", "featured"],
    "_gadgets"
  );
  const allGeneralPosts = getAllPosts(
    ["title", "date", "slug", "author", "coverImage", "excerpt", "featured"],
    "_posts"
  );
  const featuredPosts = getFeaturedPosts(allPosts);
  const featuredEducationPosts = getFeaturedPosts(allEducationPosts);
  const featuredPoliticsPosts = getFeaturedPosts(allPoliticsPosts);
  const featuredSportsPosts = getFeaturedPosts(allSportsPosts);
  const featuredGadgetsPosts = getFeaturedPosts(allGadgetsPosts);
  const featuredGeneralPosts = getFeaturedPosts(allGeneralPosts);

  return {
    props: {
      allPosts,
      featuredPosts,
      featuredEducationPosts,
      featuredSportsPosts,
      featuredPoliticsPosts,
      featuredGadgetsPosts,
      featuredGeneralPosts,
    },
  };
};
