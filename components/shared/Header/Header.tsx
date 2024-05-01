import Image from "next/image";
import styles from "./Header.module.scss";
import { pages } from "@/constants/pages.constant";
import Link from "next/link";
import Logo from "@/assets/images/Logo.svg";

const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <div className={styles.header__left}>
        <Image src={Logo} alt="Logo" />
      </div>
      <div className={styles.header__right}>
        <nav>
          {pages.map((page, index) => (
            <Link
              key={`page__${index}`}
              href={page.url}
              className={`${page.isButton ? styles.contact__btn : ""}`}
            >
              {page.name}
            </Link>
          ))}
        </nav>
        <button className={styles.dark__mode__btn}>
          <Image
            src={require("@/assets/images/header/sun.svg")}
            alt="sun icon"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
