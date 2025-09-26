import styles from './WorkHistoryItem.module.css';
export default function WorkHistoryItem({ workHistoryItem }) {

    return (
        <div className={styles['work-history-item']}>
            <h3 className={styles.title}>
                {`${workHistoryItem.title}, ${workHistoryItem.company}`}</h3>
            <p className={styles.duration}>{`${workHistoryItem.startDate} - ${workHistoryItem.endDate}`}</p>
            <ul className={styles.tasks}>
                {workHistoryItem.tasks.map(task => <li className={styles.task}>{task}</li>)}
            </ul>

        </div>
    );


}