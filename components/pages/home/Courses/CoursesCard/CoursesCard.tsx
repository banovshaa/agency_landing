import CustomButton from "@/components/shared/CustomButton/CustomButton";
import styles from "./CoursesCard.module.scss";
import Image, { StaticImageData } from "next/image";

type CoursesCardTexts = {
  type: string;
  title: string;
  tuitor_firstname: string;
  tuitor_lastname: string;
  duration: string;
  price: string;
  discount?: string;
  current_price?: string;
};
type CoursesCardProps = {
  texts: CoursesCardTexts;
  image: StaticImageData;
};
const CoursesCard = ({ texts, image }: CoursesCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.badge}>
        <CustomButton title={texts.type} />
      </div>
      <Image className={styles.card__image} src={image} alt="card image" />
      <div className={styles.card__texts}>
        <h4>{texts.title}</h4>
        <p className={styles.author}>
          By {texts.tuitor_firstname} {texts.tuitor_lastname}
        </p>
        <div className={styles.duration}>
          <Image
            src={require("@/assets/images/icons/timer.svg")}
            alt="timer icon"
          />
          <p>
            <span>Duration:</span> {texts.duration}
          </p>
        </div>
        <p className={styles.price}>
          {texts.price} {texts.discount && texts.discount}
        </p>
      </div>
      <div className={styles.card__button}>
        <CustomButton
          title={`Buy ${
            texts.discount ? `now ${texts.current_price}` : texts.price
          }`}
        />
      </div>
    </div>
  );
};

export default CoursesCard;
