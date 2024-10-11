import { useContext } from "react";
import styles from "./Footer.module.css";
import { TranslationsContext } from "../../routes";

export default function Footer() {
  const contentContext = useContext(TranslationsContext);
  if (!contentContext)
    return <div>Erro: contexto de traduções não disponível</div>;
  const { translations } = contentContext;

  return (
    <footer>
      <div className={styles.footerContainer}>
        <p>
          &copy; {new Date().getFullYear()} {translations.footer.copyrightText}
        </p>
      </div>
    </footer>
  );
}
