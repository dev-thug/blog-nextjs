import FeaturedPosts from '@/components/home-page/FeaturedPosts';
import Hero from '@/components/home-page/Hero';
import { getFeaturedPosts } from '@/lib/posts-util';
import { FC } from 'react';
export interface Post {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  date: string;
  content: string;
}

const HomePage: FC<{ posts: Post[] }> = (props) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export const getStaticProps = () => {
  const featuredPost = getFeaturedPosts();

  return {
    props: {
      posts: featuredPost
    },
    revalidate: 60
  };
};

export default HomePage;
