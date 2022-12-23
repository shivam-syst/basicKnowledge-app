import Container from "../../components/container";
import AllStories from "../../components/all-stories";
import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import Post from "../../interfaces/post";

type Props = {
  allPosts: Post[];
  directory: string;
};

export default function Index({ allPosts, directory: dir }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title> All posts</title>
        </Head>
        <Container>
          {allPosts.length > 0 && <AllStories posts={allPosts} dir={dir} />}
        </Container>
      </Layout>
    </>
  );
}

// export const getStaticPaths = async () => {
//   const CATEGORIES = ["sports", "education", "politics", "gadget", "posts"];
//   return {
//     paths: CATEGORIES.map((category) => {
//       return {
//         params: {
//           category,
//         },
//       };
//     }),
//     fallback: false,
//   };
// };

// export const getStaticProps = async ({ params }) => {
//   const directory = params.category;
//   const allPosts = getAllPosts(
//     ["title", "date", "slug", "author", "coverImage", "excerpt"],
//     `_${directory}`
//   );

//   return {
//     props: { allPosts, directory },
//   };
// };
