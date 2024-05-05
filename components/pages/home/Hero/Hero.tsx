import CustomButton from "@/components/shared/CustomButton/CustomButton";
import styles from "./Hero.module.scss";
import Link from "next/link";
import Image from "next/image";
import { heroImages } from "@/constants/images/homeImages.constant";

const Hero = () => {
  return (
    <section className={`${styles.hero} container`}>
      <div className={styles.hero__texts}>
        <h1>Where the joy of learn meets the power of community</h1>
        <p>
          Dive deep in immersive, interactive small groups. Expand horizons,
          engage in discussions, and elevate your learning journey with us.
        </p>
        <div className={styles.buttons}>
          <CustomButton
            style={{
              padding: "14px 32px",
            }}
            title={"Start your travel"}
          />
          <Link href={"/"}>
            <span>Watch video</span>
            <Image src={heroImages.arrowRight} alt="arrow right icon" />
          </Link>
        </div>
      </div>
      <Image
        className={styles.background_image}
        src={heroImages.backgroundImage}
        alt={"bg image"}
      />
    </section>
  );
};

export default Hero;
