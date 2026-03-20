import styles from './WorkHistoryItem.module.css';
export default function WorkHistoryItem({ workHistoryItem }) {
  return (
    <div className={styles['work-history-item']}>
      <div className={styles['work-history-content']}>
        <div className={styles['title-container']}>
          <div className={styles['logo-box']}>
            <img className={styles.logo} src={workHistoryItem.logo} alt={`${workHistoryItem.title}-logo`} />
          </div>
          <h3 className={styles.title}>{`${workHistoryItem.title}, ${workHistoryItem.company}`}</h3>
        </div>
        <p className={styles.duration}>{`${workHistoryItem.startDate} - ${workHistoryItem.endDate}`}</p>
        <ul className={styles.tasks}>
          {workHistoryItem.tasks.map((task) => (
            <li className={styles.task}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
