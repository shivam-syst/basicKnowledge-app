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
  allHomePosts: Post[];
  featuredPosts?: Post[];
  featuredEducationPosts?: Post[];
  featuredSportsPosts?: Post[];
  featuredPoliticsPosts?: Post[];
  featuredGadgetsPosts?: Post[];
  featuredGeneralPosts?: Post[];
};

export default function Index({
  allHomePosts,
  featuredPosts,
  featuredEducationPosts,
  featuredSportsPosts,
  featuredPoliticsPosts,
  featuredGadgetsPosts,
  featuredGeneralPosts,
}: Props) {
  const heroPost = featuredPosts[0] || allHomePosts[0];
  const morePosts = allHomePosts.slice(1);
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
  const allHomePosts = getAllPosts(
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
  const featuredPosts = getFeaturedPosts(allHomePosts).slice(0, 5);
  const featuredEducationPosts = getFeaturedPosts(allEducationPosts).slice(0,4);
  const featuredPoliticsPosts = getFeaturedPosts(allPoliticsPosts).slice(0, 4);
  const featuredSportsPosts = getFeaturedPosts(allSportsPosts).slice(0, 4);
  const featuredGadgetsPosts = getFeaturedPosts(allGadgetsPosts).slice(0, 4);
  const featuredGeneralPosts = getFeaturedPosts(allGeneralPosts).slice(0, 4);

  return {
    props: {
      allHomePosts,
      featuredPosts,
      featuredEducationPosts,
      featuredSportsPosts,
      featuredPoliticsPosts,
      featuredGadgetsPosts,
      featuredGeneralPosts,
    },
  };
};
