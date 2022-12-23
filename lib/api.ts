import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export function getPostSlugs(directory: string) {
  return fs.readdirSync(directory);
}

export function getPostBySlug(
  slug: string,
  fields: string[] = [],
  directory: string
) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(directory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = [], directory: string = "") {
  const finalDirectory = join(process.cwd(), "_AllPosts", directory);
  const slugs = getPostSlugs(finalDirectory);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, finalDirectory))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
