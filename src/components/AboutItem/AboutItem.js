import styles from './AboutItem.module.css';

export default function AboutItem({ aboutItem }) {

    return (
        <div className={styles['about-item']}>
            <h3 className={styles.title}>{aboutItem.title}</h3>
            <p className={styles.description}>{aboutItem.description}</p>
        </div>
    );


}