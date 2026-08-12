import styles from './Experience.module.css';
import workHistory from './work-history.json';
import WorkHistoryItem from '../WorkHistoryItem/WorkHistoryItem';

export default function Experience() {
  return (
    <section id="experience" className={styles['section-experience']}>
      <div className={styles['section-heading']}>
        <p className={styles['section-label']}>Experience</p>

        <h2 className={styles['experience-title']}>
          Professional experience across backend, data, and full-stack engineering.
        </h2>
      </div>

      <div className={styles['work-history']}>
        {workHistory.map((item) => (
          <WorkHistoryItem key={`${item.company}-${item.title}`} workHistoryItem={item} />
        ))}
      </div>
    </section>
  );
}
