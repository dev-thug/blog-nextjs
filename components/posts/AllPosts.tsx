import { Post } from '@/pages';
import { FC } from 'react';
import classes from './all-posts.module.css';
import PostsGrid from './PostsGrid';

const AllPosts: FC<{ posts: Post[] }> = (props) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default AllPosts;
