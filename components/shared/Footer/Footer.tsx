import Image from "next/image";
import styles from "./Footer.module.scss";
import Logo from "@/assets/images/Logo.svg";
import Link from "next/link";
import { footerImages } from "@/constants/images/footerImages.constant";

const Footer = () => {
  return (
    <footer className={`${styles.footer} container`}>
      <div className={styles.footer__left}>
        <Image src={Logo} alt="Logo" />
        <div className={styles.media}>
          <div className={styles.box}>
            <Image src={footerImages.instagram} alt="InstaIcon" />
          </div>
          <div className={styles.box}>
            <Image src={footerImages.figma} alt="FigmaIcon" />
          </div>
          <div className={styles.box}>
            <Image src={footerImages.linkedin} alt="LinkedInIcon" />
          </div>
          <div className={styles.box}>
            <Image src={footerImages.twitter} alt="TwitterIcon" />
          </div>
          <div className={styles.box}>
            <Image src={footerImages.telegram} alt="TelegramIcon" />
          </div>
          <div className={styles.box}>
            <Image src={footerImages.medium} alt="MediumIcon" />
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
