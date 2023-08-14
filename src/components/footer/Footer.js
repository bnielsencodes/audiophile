import Image from "next/image";
import Link from "next/link";
import FooterNavList from "./FooterNavList";
import FooterSocials from "./FooterSocials";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerMd}>
          <div className={styles.border}></div>
          <div className={styles.footerLg}>
            {/* FOOTER LOGO */}
            <div className={styles.logoContainer}>
              <Image
                className={styles.logo}
                src="/assets/shared/desktop/logo.svg"
                alt="Audiophile brand logo"
                width="0"
                height="0"
                sizes="100vw"
              />
            </div>
            <FooterNavList />
          </div>
          {/* FOOTER TEXT */}
          <p className={styles.text}>
            Audiophile is an all-in-one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we&apos;re open 7 days a week.
          </p>
        </div>
        <div className={styles.footerMdBottom}>
          {/* FOOTER COPYRIGHT */}
          <small className={styles.copy}>
            Coded by{" "}
            <a
              className={`${styles.copyLink} ${styles.underlineAnimation}`}
              href="https://bnielsen.dev"
            >
              Brandon Nielsen
            </a>
            , 2023
          </small>
          <FooterSocials />
        </div>
      </footer>
    </>
  );
}
