import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <section className={`${styles.about__me}`}>
      <div className={styles.content}>
        <h2>Emily Rolando</h2>
        <p>
          I recently started learning to code with Tian and it's been a
          game-changer. The lessons are clear and engaging, perfect for
          beginners like me. I've already built my first app thanks to their
          hands-on approach. Highly recommend Tian for anyone starting their
          coding journey!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
