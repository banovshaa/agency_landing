import Image from "next/image";
import styles from "./Footer.module.scss";
import Logo from "@/assets/images/Logo.svg";
import InstaIcon from "@/assets/images/icons/instagram.svg";
import MediumIcon from "@/assets/images/icons/medium.svg";
import LinkedInIcon from "@/assets/images/icons/linkedin.svg";
import TwitterIcon from "@/assets/images/icons/twitter.svg";
import TelegramIcon from "@/assets/images/icons/telegram.svg";
import FigmaIcon from "@/assets/images/icons/figma.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={`${styles.footer} container`}>
      <div className={styles.footer__left}>
        <Image src={Logo} alt="Logo" />
        <div className={styles.media}>
          <div className={styles.box}>
            <Image src={InstaIcon} alt="InstaIcon" />
          </div>
          <div className={styles.box}>
            <Image src={FigmaIcon} alt="FigmaIcon" />
          </div>
          <div className={styles.box}>
            <Image src={LinkedInIcon} alt="LinkedInIcon" />
          </div>
          <div className={styles.box}>
            <Image src={TwitterIcon} alt="TwitterIcon" />
          </div>
          <div className={styles.box}>
            <Image src={TelegramIcon} alt="TelegramIcon" />
          </div>
          <div className={styles.box}>
            <Image src={MediumIcon} alt="MediumIcon" />
          </div>
        </div>
      </div>
      <div className={styles.footer__right}>
        <div className={styles.nav__box}>
          <h4>Products</h4>
          <nav>
            <Link href={""}>Courses</Link>
            <Link href={""}>Development</Link>
          </nav>
        </div>
        <div className={styles.nav__box}>
          <h4>Resources</h4>
          <nav>
            <Link href={""}>Careers</Link>
            <Link href={""}>Blog</Link>
          </nav>
        </div>
        <div className={styles.nav__box}>
          <h4>Company</h4>
          <nav>
            <Link href={""}>QA</Link>
            <Link href={""}>Terms and conditions</Link>
            <Link href={""}>Privacy policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
