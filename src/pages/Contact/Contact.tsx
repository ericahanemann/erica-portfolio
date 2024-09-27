import styles from "./Contact.module.css";
import { TranslationContent } from "../../types/translations";
import { ChangeEvent, FormEvent, useEffect } from "react";
import { useState } from "react";

interface ContactProps {
  content: TranslationContent;
}

export default function Contact({ content }: ContactProps) {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "StaticForms - Contact Form",
    honeypot: "", // if any value received in this field, form submission will be ignored.
    message: "",
    replyTo: "@", // this will set replyTo of email to email address entered in the form
    accessKey: "you-access-key", // get your access key from https://www.staticforms.xyz
  });

  const [response, setResponse] = useState({
    type: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          type: "success",
          message: "Thank you for reaching out to us.",
        });
      } else {
        setResponse({
          type: "error",
          message: json.message,
        });
      }
    } catch (e) {
      console.log("An error occurred", e);
      setResponse({
        type: "error",
        message: "An error occured while submitting the form",
      });
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.contact}>
        <h3 className={styles.contactTitle}>{content.contact.title}</h3>
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              dolorum, molestiae facere impedit sed similique, harum nulla
              asperiores id fugiat rerum esse ipsa labore fugit iusto voluptatum
              in quas est. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Nostrum, exercitationem voluptate? Vero, magnam recusandae
              soluta, eveniet itaque sit quos, dolor amet explicabo sint quas
              animi eos repellat exercitationem! Ipsum, nisi?
            </p>
          </div>

          <div className={styles.formContainer}>
            <form
              action="https://api.staticforms.xyz/submit"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className={styles.field} style={{ display: "none" }}>
                <label className={styles.label}>Title</label>
                <input
                  className={styles.input}
                  type="text"
                  name="honeypot"
                  style={{ display: "none" }}
                  onChange={handleChange}
                />
                <input type="hidden" name="subject" onChange={handleChange} />
              </div>
              
              <div className={styles.field}>
                <label className={styles.label}>Your Name</label>
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  placeholder=" "
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Your Email</label>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  placeholder=" "
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={`${styles.label} ${styles.textareaLabel}`}>
                  Message
                </label>
                <textarea
                  className={styles.textarea}
                  name="message"
                  placeholder=" "
                  onChange={handleChange}
                  rows={6}
                  cols={100}
                  required
                />
              </div>
              <div className={styles.control}>
                <button className={styles.submitButton} type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
