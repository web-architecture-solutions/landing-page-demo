import { name } from "../../globalContent";

import styles from "./style.module.scss";

export default function Header() {
  return (
    <header className={styles.Header}>
      <h1>{name}</h1>
    </header>
  );
}
