"use client";

import Image from "next/image";
import styles from "./Header.module.scss";
import { pages } from "@/constants/pages.constant";
import Link from "next/link";
import Logo from "@/assets/images/Logo.svg";
import Sun from "@/assets/images/icons/sun.svg";
import BurgerIcon from "@/assets/images/icons/burger.svg";
import CloseIcon from "@/assets/images/icons/close.svg";
import { useEffect, useState } from "react";

const Header = () => {
  const [burger, setBurger] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number | undefined>(
    typeof window !== "undefined" ? window.innerWidth : undefined
  );

  const handleResize = () => {
    setWindowWidth(
      typeof window !== "undefined" ? window.innerWidth : undefined
    );
  };
  useEffect(() => {
    if (windowWidth && windowWidth > 768) {
      setBurger(false);
    }
  }, [windowWidth]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
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
            <Image src={Sun} alt="sun icon" />
          </button>
        </div>
        <div className={styles.header__burger}>
          <div
            className={styles.burger__btn}
            onClick={() => {
              setBurger(true);
            }}
          >
            <Image src={BurgerIcon} alt="burger icon" />
          </div>
        </div>
      </header>
      {burger && (
        <div className={`${styles.burger__menu} container`}>
          <div className={styles.burger__menu__header}>
            <span
              className={styles.close__btn}
              onClick={() => {
                setBurger(false);
              }}
            >
              <Image src={CloseIcon} alt="close icon" />
            </span>
          </div>
          <nav>
            {pages.map((page, index) => (
              <Link key={`page__${index}`} href={page.url}>
                {page.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
