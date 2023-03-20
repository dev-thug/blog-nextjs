import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getPostFiles = () => {
  return fs.readdirSync(postsDirectory);
};

export const getPostData = (postIdentifier: string) => {
  const postSlug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = getPostFiles();

  const allPosts = postFiles.map((postFile) => getPostData(postFile));

  const sortedPost = allPosts.sort((postA, postB) =>
    //@ts-ignore
    postA.date > postB.date ? -1 : 1
  );

  return sortedPost;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();

  //@ts-ignore
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
};
