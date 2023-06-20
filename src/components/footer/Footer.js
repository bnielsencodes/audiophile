import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerMd}>
          <div className={styles.border}></div>
          <div className={styles.footerLg}>
            {/* FOOTER LOGO */}
            <Link className={styles.linkComponent} href="/">
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
            </Link>
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
            Copyright 2023. All Rights Reserved
          </small>
        </div>
      </footer>
    </>
  );
}
