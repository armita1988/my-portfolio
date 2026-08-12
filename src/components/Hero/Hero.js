import styles from './Hero.module.css';
import data from './hero.json';

export default function Hero() {
  return (
    <section className={styles['section-hero']}>
      <div className={styles['hero-content']}>
        <h1 className={styles['hero-title']}>{data.title}</h1>

        <p className={styles['hero-location']}>{data.location}</p>

        <p className={styles['hero-summary']}>{data.summary}</p>

        <div className={styles['hero-actions']}>
          <a href={data.links.trailora} target="_blank" rel="noreferrer" className={styles['primary-action']}>
            View Trailora
          </a>

          <a href={data.links.github} target="_blank" rel="noreferrer" className={styles['secondary-action']}>
            GitHub
          </a>

          <a href={data.links.linkedin} target="_blank" rel="noreferrer" className={styles['secondary-action']}>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
