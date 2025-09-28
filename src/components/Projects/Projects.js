import styles from './Projects.module.css';
import myProjects from './projects.json';
import ProjectItem from '../ProjectItem/ProjectItem';

export default function Projects() {
    return (
        <section id="projects" className={styles['projects-container']}>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles['projects-list']}>
                {myProjects.map((el, i) => <ProjectItem key={i} project={el} />)}
            </div>
        </section>
    );
}