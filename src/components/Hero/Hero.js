import styles from './Hero.module.css'
import data from './hero.json';
export default function Hero() {

    return (
        <section className={styles['section-hero']}>
            <div className={styles['hero-text']}>
                <h1 className={styles['hero-header']}>{data.header}</h1>
                <p className={styles['hero-title']}>{data.title}</p>
                <p className={styles['hero-subtitle']} >{data.subtitle}</p>
                <a className={styles['hero-contact']} href={`mailto:${data.contactEmail}`} >Contact Me</a>
            </div>

            <div className={styles['hero-img-box']}>
                <img src={data.image} alt='hero ' />
            </div>

        </section >);
}