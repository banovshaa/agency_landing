import CustomButton from "@/components/shared/CustomButton/CustomButton";
import styles from "./Hero.module.scss";
import Link from "next/link";
import Image from "next/image";

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
            <Image
              src={require("@/assets/images/icons/arrow_right.svg")}
              alt="arrow right icon"
            />
          </Link>
        </div>
      </div>
      <Image
        className={styles.background_image}
        src={require("@/assets/images/home/hero/bg.png")}
        alt={"bg image"}
      />
    </section>
  );
};

export default Hero;
