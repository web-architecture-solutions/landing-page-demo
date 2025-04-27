import styles from "./style.module.scss";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <p className={styles.disclaimer}>
        The Vector Report provides data-driven market insights for informational
        purposes only. It is not financial advice, investment advice, or a
        recommendation to buy or sell any securities or options. Trading
        involves risk, and you should consult with a qualified financial
        professional before making investment decisions. Past performance is not
        indicative of future results. The information provided is based on
        analysis of publicly available data, and its accuracy cannot be
        guaranteed. Use of this report is at your own risk.
      </p>

      <p className={styles.copyright}>
        Copyright &copy; {currentYear} The Vector Report. All rights reserved.
      </p>
    </footer>
  );
}
