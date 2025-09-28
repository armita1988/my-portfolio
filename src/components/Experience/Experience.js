import styles from './Experience.module.css';
import workHistory from './work-history.json';
import WorkHistoryItem from '../WorkHistoryItem/WorkHistoryItem';
import Skills from '../Skills/Skills';

export default function Experience() {

    return (
        <section id="experience" className={styles['section-experience']}>
            <h2 className={styles['experience-title']}>experience</h2>

            <div className={styles['experience-content']}>
                <Skills />
                <div className={styles['work-history']}>
                    {workHistory.map((el, i) => <WorkHistoryItem key={i} workHistoryItem={el} />)}
                </div>
            </div>
        </section>
    );
}