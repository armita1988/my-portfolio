import styles from './Contact.module.css';

export default function Contact() {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>
          I'm currently open to Junior Full-Stack, Frontend, or Backend Developer opportunities. Feel free to reach out
          if you'd like to connect or discuss potential roles.
        </p>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="/assets/contact/emailIcon.png" alt="Email icon" />
          <a href="mailto:armita.hajimani@gmail.com">armita.hajimani@gmail.com</a>
        </li>

        <li className={styles.link}>
          <img src="/assets/contact/linkedinIcon.png" alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/armita-haji-mani/" target="_blank" rel="noopener noreferrer">
            linkedin.com/armita-haji-mani
          </a>
        </li>

        <li className={styles.link}>
          <img src="/assets/contact/githubIcon.png" alt="Github icon" />
          <a href="https://www.github.com/armita1988" target="_blank" rel="noopener noreferrer">
            github.com/armita1988
          </a>
        </li>
      </ul>
    </footer>
  );
}
