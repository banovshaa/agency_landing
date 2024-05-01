import styles from "./Discover.module.scss";
import DiscoverCard from "./DiscoverCard/DiscoverCard";
import ComputerImage from "@/assets/images/home/discover/computer.png";
import CommunityImage from "@/assets/images/home/discover/community.png";
import ChatImage from "@/assets/images/home/discover/chat.png";
const Discover = () => {
  return (
    <section className={`${styles.discover} container`}>
      <DiscoverCard
        image={ComputerImage}
        texts={{
          title: "Explore topics",
          description:
            "Dive deep into our diverse catalog featuring a curated selection of courses in the realms of arts and writing. Experience knowledge crafted by experts, designed to inspire and nurture your creative journey.",
        }}
      />
      <DiscoverCard
        image={CommunityImage}
        texts={{
          title: "Meet new Friends",
          description:
            "Connect with our expansive network, match with like-minded peers, and learn code together.",
        }}
      />
      <DiscoverCard
        image={ChatImage}
        texts={{
          title: "Find",
          description:
            "Connect with people around the world in a huge community with million of students.",
        }}
      />
    </section>
  );
};

export default Discover;
