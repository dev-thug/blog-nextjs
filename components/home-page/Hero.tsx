import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={'https://avatars.githubusercontent.com/u/47122508?v=4'}
          alt={'An image showing dev-thug'}
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I`m Hyunjoong Kim</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
};

export default Hero;
