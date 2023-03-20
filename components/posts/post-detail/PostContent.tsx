import { Post } from '@/pages';
import Image from 'next/image';
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import classes from './post-content.module.css';
import PostHeader from './PostHeader';

const PostContent: FC<{ post: Post }> = (props) => {
  const { post } = props;
  const imagePsth = `/images/posts/${post.image}`;
  const customMarkDownComponents = {
    // img: ({ ...image }) => (
    //   <Image
    //     src={`/images/posts/${image.src}`}
    //     alt={image.alt}
    //     width={600}
    //     height={300}
    //   />
    // ),
    p: ({ ...props }) => {
      const { node } = props;
      // console.log(node);
      if (node.children[0].tagName === 'img') {
        const image = node.children[0].properties;

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${image.src}`}
              alt={image.alt}
              width={600}
              height={300}
              priority
            />
          </div>
        );
      }

      return <p>{props.children}</p>;
    }
  };
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePsth} />
      <ReactMarkdown components={customMarkDownComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
