import styles from "./Discover.module.scss";
import DiscoverCard from "./DiscoverCard/DiscoverCard";
import { discoverImages } from "@/constants/images/homeImages.constant";
const Discover = () => {
  return (
    <section className={`${styles.discover} container`}>
      <DiscoverCard
        image={discoverImages.computer}
        texts={{
          title: "Explore topics",
          description:
            "Dive deep into our diverse catalog featuring a curated selection of courses in the realms of arts and writing. Experience knowledge crafted by experts, designed to inspire and nurture your creative journey.",
        }}
      />
      <DiscoverCard
        image={discoverImages.community}
        texts={{
          title: "Meet new Friends",
          description:
            "Connect with our expansive network, match with like-minded peers, and learn code together.",
        }}
      />
      <DiscoverCard
        image={discoverImages.chat}
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
