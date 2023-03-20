import { getPostData, getPostFiles } from '@/lib/posts-util';

import PostContent from '@/components/posts/post-detail/PostContent';
import { GetStaticPropsContext } from 'next';
import { FC } from 'react';
import { Post } from '..';

const PostDetailPage: FC<{ post: Post }> = (props) => (
  <PostContent post={props.post} />
);

export const getStaticProps = ({ params }: GetStaticPropsContext) => ({
  //@ts-ignore
  props: { post: getPostData(params.slug) },
  revalidate: 600
});

export const getStaticPaths = () => {
  const postFilenames = getPostFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false
  };
};

export default PostDetailPage;
