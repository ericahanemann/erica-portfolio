import css from "./ContactForm.module.css";
import Social from "../Social/Social";
import Footer from "../Footer/Footer";

function ContactForm({ content, theme }) {
  return (
    <div id="contact" className={css["form-section"]}>
      <div className={css["form-container"]}>
        <h3>{content.contact.contactTitle}</h3>
        <p className={css["form-description"]}>
          {content.contact.formDescription}
        </p>

        <form
          action="https://getform.io/f/bf7ba357-d0ab-4fb5-9f6d-38239f791dbf"
          method="POST"
        >
          <div className={`${css["message"]} ${css[theme]}`}>
            <textarea
              name="message"
              placeholder={content.contact.messagePlaceholder}
              rows={10}
              required
            />
          </div>

          <div className={`${css["person-info"]} ${css[theme]}`}>
            <input
              type="text"
              name="name"
              placeholder={content.contact.nameInputPlaceholder}
              required
            />
            <input
              type="text"
              name="email"
              placeholder={content.contact.emailInputPlaceholder}
              required
            />
            <button type="submit">Send message</button>
          </div>
        </form>
      </div>

      <Social theme={theme} content={content} />
      <Footer content={content} theme={theme} />
    </div>
  );
}

export default ContactForm;
