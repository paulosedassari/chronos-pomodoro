import { ChurchIcon } from "lucide-react";
import styles from "./styles.module.css";

export function Logo() {
  return (
    <div className={styles.logo}>
      <a href="#" className={styles.logoLink}>
        <ChurchIcon />
        <span className={styles.logoTexto}>São Francisco de Assis</span>
      </a>
    </div>
  );
}
