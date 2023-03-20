import AllPosts from '@/components/posts/AllPosts';
import { getAllPosts } from '@/lib/posts-util';
import { FC } from 'react';
import { Post } from '..';

const AllPostsPage: FC<{ posts: Post[] }> = (props) => {
  return <AllPosts posts={props.posts} />;
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    }
  };
};

export default AllPostsPage;
