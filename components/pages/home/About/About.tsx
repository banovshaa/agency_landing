import Image from "next/image";
import styles from "./About.module.scss";
import AboutCard from "./AboutCard/AboutCard";

const About = () => {
  return (
    <section className={`${styles.about} container`}>
      <AboutCard
        image={require(`@/assets/images/icons/clipboard.svg`)}
        texts={{
          title: "Explore topics",
          description: "Explore our selection of courses in development",
        }}
      />
      <AboutCard
        image={require(`@/assets/images/icons/people.svg`)}
        texts={{
          title: "Meet new friends",
          description: "Join the network with million of students and learn",
        }}
      />
      <AboutCard
        image={require(`@/assets/images/icons/people.svg`)}
        texts={{
          title: "Learn code",
          description: "Learn all about code and become in a developer",
        }}
      />
    </section>
  );
};

export default About;
