import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.container}>
      <div className={styles.letterE}>
        <div className={`${styles.stripe} ${styles.verticalStripe}`}></div>

        <div className={styles.horizontalStripes}>
          <div
            className={`${styles.stripe} ${styles.horizontalStripeItem}`}
          ></div>
          <div
            className={`${styles.stripe} ${styles.horizontalStripeItem}`}
          ></div>
          <div
            className={`${styles.stripe} ${styles.horizontalStripeItem}`}
          ></div>
        </div>
      </div>
      <div className={styles.letterH}>
        <div className={`${styles.stripe} ${styles.verticalStripe}`}></div>
        <div className={`${styles.stripe} ${styles.horizontalStripe}`}></div>
        <div className={`${styles.stripe} ${styles.verticalStripe}`}></div>
      </div>
    </div>
  );
}
