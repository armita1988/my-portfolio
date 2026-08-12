import styles from './Education.module.css';
import education from './education.json';

export default function Education() {
  return (
    <section id="education" className={styles['section-education']}>
      <div className={styles['section-heading']}>
        <p className={styles['section-label']}>Education</p>

        <h2 className={styles['education-title']}>
          Computer science, artificial intelligence, and full-stack development.
        </h2>
      </div>

      <div className={styles['education-list']}>
        {education.map((item) => (
          <article key={`${item.institution}-${item.degree}`} className={styles['education-item']}>
            <div className={styles['education-main']}>
              <h3 className={styles.degree}>{item.degree}</h3>
              <p className={styles.institution}>{item.institution}</p>
            </div>

            <div className={styles['education-meta']}>
              <p>{item.dates}</p>
              <p>{item.location}</p>
            </div>

            {item.detail && <p className={styles.detail}>{item.detail}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
