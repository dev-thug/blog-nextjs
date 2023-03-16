import { Post } from '@/pages';
import { FC } from 'react';
import PostsGrid from '../posts/PostsGrid';
import classes from './featured-posts.module.css';

const FeaturedPosts: FC<{ posts: Post[] }> = (props) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default FeaturedPosts;
