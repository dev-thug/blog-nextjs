import { FC } from 'react';
import PostItem from './PostItem';
import classes from './posts-grid.module.css';

const PostsGrid: FC<{ posts: [] }> = (props) => {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map((post, index) => (
        <PostItem key={index} />
      ))}
    </ul>
  );
};

export default PostsGrid;
