import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./FooterSocials.module.css";

export default function FooterSocials() {
  return (
    <>
      <ul className={styles.socials}>
        <li>
          <a
            className={styles.link}
            href="https://bnielsen.dev"
            target="_blank"
          >
            <div
              className={`${styles.iconContainer} ${styles.briefcaseContainer}`}
            >
              <FontAwesomeIcon icon={faBriefcase} />
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/bnielsencodes"
            className={styles.link}
            target="_blank"
          >
            <div className={styles.iconContainer}>
              <FontAwesomeIcon icon={faSquareGithub} />
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/bnielsencodes"
            className={styles.link}
            target="_blank"
          >
            <div className={styles.iconContainer}>
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </a>
        </li>
      </ul>
    </>
  );
}
