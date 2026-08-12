import styles from './WorkHistoryItem.module.css';

export default function WorkHistoryItem({ workHistoryItem }) {
  return (
    <article className={styles['work-history-item']}>
      <div className={styles['work-history-header']}>
        <div className={styles['role-info']}>
          <div className={styles['logo-box']}>
            <img className={styles.logo} src={workHistoryItem.logo} alt={`${workHistoryItem.company} logo`} />
          </div>

          <div>
            <h3 className={styles.title}>{workHistoryItem.title}</h3>
            <p className={styles.company}>{workHistoryItem.company}</p>
          </div>
        </div>

        <p className={styles.duration}>
          {workHistoryItem.startDate} — {workHistoryItem.endDate}
        </p>
      </div>

      <ul className={styles.tasks}>
        {workHistoryItem.tasks.map((task) => (
          <li key={task} className={styles.task}>
            {task}
          </li>
        ))}
      </ul>
    </article>
  );
}
