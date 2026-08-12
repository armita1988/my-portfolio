import styles from './Contact.module.css';

export default function Contact() {
  return (
    <footer id="contact" className={styles['section-contact']}>
      <div className={styles['contact-content']}>
        <p className={styles['section-label']}>Contact</p>

        <h2 className={styles['contact-title']}>Open to full-stack software engineering opportunities.</h2>

        <p className={styles['contact-description']}>
          I'm interested in roles where I can contribute across modern frontend development, backend systems, and cloud
          delivery—bringing a strong production engineering foundation and end-to-end ownership.
        </p>
      </div>

      <div className={styles['contact-links']}>
        <a href="mailto:armita.hajimani@gmail.com" className={styles['primary-link']}>
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/armita-haji-mani/"
          target="_blank"
          rel="noreferrer"
          className={styles['secondary-link']}
        >
          LinkedIn
        </a>

        <a href="https://github.com/armita1988" target="_blank" rel="noreferrer" className={styles['secondary-link']}>
          GitHub
        </a>
      </div>
    </footer>
  );
}
