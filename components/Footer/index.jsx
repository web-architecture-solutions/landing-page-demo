import content from "./content";

import styles from "./style.module.scss";

const { disclaimer, name } = content;
const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <p className={styles.disclaimer}>{disclaimer}</p>

      <p className={styles.copyright}>
        Copyright &copy; {currentYear} {name}. All rights reserved.
      </p>
    </footer>
  );
}
