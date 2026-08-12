import styles from './ProjectItem.module.css';

export default function ProjectItem({ project, featured = false }) {
  return (
    <article className={`${styles['project-item']} ${featured ? styles.featured : ''}`}>
      <div className={styles['project-image-box']}>
        <img className={styles['project-image']} src={project.image} alt={`${project.title} project preview`} />
      </div>

      <div className={styles['project-content']}>
        <div className={styles['project-heading']}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.subtitle}>{project.subtitle}</p>
        </div>

        <p className={styles.description}>{project.description}</p>

        {featured && project.highlights && (
          <ul className={styles.highlights}>
            {project.highlights.map((highlight) => (
              <li key={highlight} className={styles.highlight}>
                {highlight}
              </li>
            ))}
          </ul>
        )}

        <ul className={styles.technologies} aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology} className={styles.technology}>
              {technology}
            </li>
          ))}
        </ul>

        <div className={styles.links}>
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noreferrer" className={styles['primary-link']}>
              {featured ? 'Live Platform' : 'Live Demo'}
            </a>
          )}

          {featured && project.links.frontend && (
            <a href={project.links.frontend} target="_blank" rel="noreferrer" className={styles['secondary-link']}>
              Frontend Repository
            </a>
          )}

          {featured && project.links.backend && (
            <a href={project.links.backend} target="_blank" rel="noreferrer" className={styles['secondary-link']}>
              Backend Repository
            </a>
          )}

          {!featured && project.links.source && (
            <a href={project.links.source} target="_blank" rel="noreferrer" className={styles['secondary-link']}>
              GitHub Repository
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
