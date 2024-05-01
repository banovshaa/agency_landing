import Image from "next/image";
import styles from "./DiscoverCard.module.scss";
import { AboutCardProps } from "../../About/AboutCard/AboutCard";

const DiscoverCard = ({ texts, image }: AboutCardProps) => {
  return (
    <div className={styles.card}>
      <Image src={image} alt="card image" />
      <div className={styles.card__texts}>
        <h4>{texts.title}</h4>
        <p>{texts.description}</p>
      </div>
    </div>
  );
};

export default DiscoverCard;
