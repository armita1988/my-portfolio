import styles from './Contact.module.css';

export default function Contact() {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src='/assets/contact/emailIcon.png' alt="Email icon" />
                    <a href="mailto:armita.hajimani@gmail.com">armita.hajimani@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src='/assets/contact/linkedinIcon.png' alt="LinkedIn icon" />
                    <a href="https://www.linkedin.com/in/armita-haji-mani/">linkedin.com/armita-haji-mani</a>
                </li>
                <li className={styles.link}>
                    <img src='/assets/contact/githubIcon.png' alt="Github icon" />
                    <a href="https://www.github.com/armita1988">https://github.com/armita1988</a>
                </li>
            </ul>
        </footer>
    );
}