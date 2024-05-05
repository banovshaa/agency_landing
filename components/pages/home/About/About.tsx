import styles from "./About.module.scss";
import AboutCard from "./AboutCard/AboutCard";
import { aboutImages } from "@/constants/images/homeImages.constant";

const About = () => {
  return (
    <section className={`${styles.about} container`}>
      <AboutCard
        image={aboutImages.clipboard}
        texts={{
          title: "Explore topics",
          description: "Explore our selection of courses in development",
        }}
      />
      <AboutCard
        image={aboutImages.people}
        texts={{
          title: "Meet new friends",
          description: "Join the network with million of students and learn",
        }}
      />
      <AboutCard
        image={aboutImages.people}
        texts={{
          title: "Learn code",
          description: "Learn all about code and become in a developer",
        }}
      />
    </section>
  );
};

export default About;
