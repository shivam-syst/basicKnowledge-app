import PostPreview from "./post-preview";
import type Post from "../interfaces/post";
import Link from "next/link";
import Button from "./button";

type Props = {
  posts: Post[];
  dir: string;
};

const MoreStories = ({ posts, dir }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight cc__textColor">
        Top {dir == "posts" ? "general" : dir == "home" ? "trending" : dir}{" "}
        stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-8 mb-16">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            dir={dir}
          />
        ))}
        {/* <Button text="More Storiess" link={`/${dir}`} /> */}
      </div>
    </section>
  );
};

export default MoreStories;
