import styles from './hero.module.css';

interface HeroProps {
  greeting: string;
  wavingEmoji: string;
  bio: string;
}

const Hero = ({ greeting, wavingEmoji, bio }: HeroProps) => {
  return (
    <div className={styles.container}>
      <section>
        <h1 className={styles.greeting}>
          {greeting}
          <span className={styles.wavingEmoji}>{wavingEmoji}</span>
          <span className={styles.bio}>{bio}</span>
        </h1>
      </section>
    </div>
  );
};

export default Hero;
