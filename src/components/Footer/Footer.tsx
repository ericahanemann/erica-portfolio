import styles from "./Footer.module.css";

import { TranslationContent } from "../../types/translations";

interface FooterProps {
  content: TranslationContent;
}

export default function Footer({ content }: FooterProps) {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <p>
          &copy; {new Date().getFullYear()} {content.footer.copyrightText}
        </p>
      </div>
    </footer>
  );
}
