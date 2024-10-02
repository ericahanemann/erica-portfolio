import styles from "./Contact.module.css";
import { TranslationContent } from "../../types/translations";
import { ChangeEvent, useEffect } from "react";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

interface ContactProps {
  content: TranslationContent;
}

export default function Contact({ content }: ContactProps) {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [state, handleSubmit] = useForm("mzzpnokz");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setContact({ ...contact, [e.target.name]: e.target.value });

  return (
    <main className={styles.main}>
      <section className={styles.contact}>
        <h3 className={styles.contactTitle}>{content.contact.title}</h3>
        <div className={styles.contactContainer}>
          <div className={styles.formContainer}>
            {state.succeeded ? (
              <p className={styles.statusMessage}>
                {content.contact.successMessage}
              </p>
            ) : (
              ""
            )}
            {state.errors ? (
              <p className={styles.statusMessage}>
                {content.contact.errorMessage}
              </p>
            ) : (
              ""
            )}
            <div className={styles.formInfo}>
              <p>
                {content.contact.formInfo}
                <strong>{content.contact.formEmail}</strong>
              </p>
            </div>
            <form method="POST" onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">
                  {content.contact.nameInput}
                </label>
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  value={state.succeeded || state.errors ? " " : contact.name}
                  placeholder=" "
                  onChange={handleChange}
                  required
                  disabled={state.succeeded || state.errors ? true : false}
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">
                  {content.contact.emailInput}
                </label>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  value={state.succeeded || state.errors ? " " : contact.email}
                  placeholder=" "
                  onChange={handleChange}
                  required
                  disabled={
                    state.succeeded || state.errors || state.submitting
                      ? true
                      : false
                  }
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className={styles.field}>
                <label className={`${styles.label} ${styles.textareaLabel}`}>
                  {content.contact.messageArea}
                </label>
                <textarea
                  className={styles.textarea}
                  name="message"
                  value={
                    state.succeeded || state.errors ? " " : contact.message
                  }
                  placeholder=" "
                  onChange={handleChange}
                  rows={4}
                  cols={100}
                  required
                  disabled={
                    state.succeeded || state.errors || state.submitting
                      ? true
                      : false
                  }
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div className={styles.control}>
                <button
                  className={styles.submitButton}
                  type="submit"
                  disabled={
                    state.succeeded || state.errors || state.submitting
                      ? true
                      : false
                  }
                >
                  {content.contact.submitBtn}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
