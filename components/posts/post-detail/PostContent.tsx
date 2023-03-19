import ReactMarkdown from 'react-markdown';
import classes from './post-content.module.css';
import PostHeader from './PostHeader';

const DUMMY_POST = {
  slug: 'getting-started-with-nextjs4',
  title: 'Getting Started with Nextjs',
  image: 'getting-started-with-nextjs.png',
  date: '2023-03-16',
  content: '# This is a first post'
};

const PostContent = () => {
  const imagePsth = `/images/posts/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePsth} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
