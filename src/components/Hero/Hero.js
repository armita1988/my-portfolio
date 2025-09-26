import styles from './Hero.module.css'
export default function Hero() {

    return (
        <section className={styles['section-hero']}>
            <div className={styles['hero-text']}>
                <h1 className={styles['hero-header']}>Hi, I'm Armita</h1>
                <p className={styles['hero-title']}>Full-Stack Developer (MERN) with 5+ years of programming experience</p>
                <p className={styles['hero-subtitle']} >Ex–Data Engineer now building web apps with React, Node.js, Express, and MongoDB.</p>
                <a className={styles['hero-contact']} href="mailto:armita.hajimani@gmail.com" >Contact Me</a>
            </div>

            <div className={styles['hero-img-box']}>
                <img src='/assets/hero/heroImage.png' alt='hero ' />
            </div>

        </section>);
}