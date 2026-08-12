import styles from './Projects.module.css';
import myProjects from './projects.json';
import ProjectItem from '../ProjectItem/ProjectItem';

export default function Projects() {
  const featuredProject = myProjects.find((project) => project.featured);

  const selectedProjects = myProjects.filter((project) => !project.featured);

  return (
    <section id="projects" className={styles['section-projects']}>
      <div className={styles['section-heading']}>
        <p className={styles['section-label']}>Projects</p>

        <h2 className={styles['projects-title']}>
          Selected work across full-stack product engineering, cloud delivery, and React.
        </h2>
      </div>

      {featuredProject && (
        <div className={styles['featured-project']}>
          <p className={styles['group-label']}>Featured Project</p>

          <ProjectItem project={featuredProject} featured />
        </div>
      )}

      {selectedProjects.length > 0 && (
        <div className={styles['selected-projects']}>
          <p className={styles['group-label']}>Selected React Projects</p>

          <div className={styles['projects-list']}>
            {selectedProjects.map((project) => (
              <ProjectItem key={project.title} project={project} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
