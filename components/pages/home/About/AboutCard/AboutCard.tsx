import Image, { StaticImageData } from "next/image";
import styles from "./AboutCard.module.scss";
export type CardTexts = {
  title: string;
  description: string;
};
export type AboutCardProps = {
  texts: CardTexts;
  image: string | StaticImageData;
};
const AboutCard = ({ texts, image }: AboutCardProps) => {
  return (
    <div className={styles.card}>
      <Image src={image} alt="card icon" className={styles.card__icon} />
      <div className={styles.card__texts}>
        <h4>{texts.title}</h4>
        <p>{texts.description}</p>
      </div>
    </div>
  );
};

export default AboutCard;
