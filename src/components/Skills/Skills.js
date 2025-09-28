import styles from './Skills.module.css'

export default function Skills() {

    return (
        <div className={styles['skills']}>
            <div className={styles['skill-box']}>
                <div className={styles['skill-img-box']}>
                    <img src='/assets/skills/html.png' alt='html icon' />
                </div>
                <p className={styles['skill-title']}>HTML</p>
            </div>
            <div className={styles['skill-box']}>
                <div className={styles['skill-img-box']}>
                    <img src='/assets/skills/css.png' alt='css icon' />
                </div>
                <p className={styles['skill-title']}>CSS</p>
            </div>
            <div className={styles['skill-box']}>
                <div className={styles['skill-img-box']}>
                    <img src='/assets/skills/javascript.png' alt='js icon' />
                </div>
                <p className={styles['skill-title']}>Javascript</p>
            </div>

            <div className={styles['skill-box']}>
                <div className={styles['skill-img-box']}>
                    <img src='/assets/skills/react.png' alt='react icon' />
                </div>
                <p className={styles['skill-title']}>React</p>
            </div>

            <div className={styles['skill-box']}>
                <div className={styles['skill-img-box']}>
                    <img src='/assets/skills/node.png' alt='node icon' />
                </div>
                <p className={styles['skill-title']}>Node</p>
            </div>

            <div className={styles['skill-box']}>
                <div className={styles['skill-img-box']}>
                    <img src='/assets/skills/mongodb.png' alt='mongodb icon' />
                </div>
                <p className={styles['skill-title']}>MongoDB</p>
            </div>

            <div className={styles['skill-box']}>
                <div className={styles['skill-img-box']}>
                    <img src='/assets/skills/java.png' alt='java icon' />
                </div>
                <p className={styles['skill-title']}>Java</p>
            </div>

        </div>
    );
}