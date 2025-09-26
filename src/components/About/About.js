import styles from './About.module.css';
import aboutMe from './about.json';
import AboutItem from '../AboutItem/AboutItem';

export default function About() {

    return (
        <section id="about" className={styles['section-about']}>
            <h2 className={styles['about-title']}>About</h2>

            <div className={styles['about-content']}>
                <div className={styles['about-img-box']}>
                    <img src='/assets/about/aboutImage.png' alt='about' />
                </div>
                <div className={styles['about-items']}>
                    {aboutMe.map((el, i) => <AboutItem key={i} aboutItem={el} />)}
                </div>
            </div>
        </section>
    );
}