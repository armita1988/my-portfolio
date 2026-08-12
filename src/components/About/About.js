import styles from './About.module.css';
import aboutMe from './about.json';
import AboutItem from '../AboutItem/AboutItem';

export default function About() {
  return (
    <section id="about" className={styles['section-about']}>
      <div className={styles['section-heading']}>
        <p className={styles['section-label']}>About</p>

        <h2 className={styles['about-title']}>
          From production backend/data systems to end-to-end full-stack delivery.
        </h2>
      </div>

      <div className={styles['about-items']}>
        {aboutMe.map((item) => (
          <AboutItem key={item.title} aboutItem={item} />
        ))}
      </div>
    </section>
  );
}
