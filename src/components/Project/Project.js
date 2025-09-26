import styles from './Project.module.css';

export default function Project({ project }) {
    return (
        <div className={styles.project}>

            <div className={styles['img-box']}>
                <img src={project.image} alt={`${project.title}`.toLowerCase()} />
            </div>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.technologies}>
                {project.technologies.map(el => <span className={styles.technology}>{el}</span>)}
            </div>
            <div className={styles.links}>
                <a className={styles.source} href={project.links.demo}>Demo</a>
                <a className={styles.source} href={project.links.source}>Source</a>
            </div>

        </div>
    );

}