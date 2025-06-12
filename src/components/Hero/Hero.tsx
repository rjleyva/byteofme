interface HeroProps {
  greeting: string;
  wavingEmoji: string;
  bio: string;
}

const Hero = ({ greeting, wavingEmoji, bio }: HeroProps) => {
  return (
    <div>
      <section>
        <h1>
          {greeting}
          <span>{wavingEmoji}</span>
          <span>{bio}</span>
        </h1>
      </section>
    </div>
  );
};

export default Hero;
