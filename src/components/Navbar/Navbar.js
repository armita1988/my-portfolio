import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles['navbar-title']}>
        Armita Haji Mani
      </a>

      <div className={styles['navbar-menu']}>
        <img
          className={styles['menu-icon']}
          src={isOpen ? '/assets/nav/closeIcon.png' : '/assets/nav/menuIcon.png'}
          alt={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen((open) => !open)}
        />

        <ul className={`${styles['menu-items']} ${isOpen ? styles['is-open'] : ''}`}>
          <li className={styles['menu-item']}>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>

          <li className={styles['menu-item']}>
            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>
          </li>

          <li className={styles['menu-item']}>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li className={styles['menu-item']}>
            <a href="#education" onClick={closeMenu}>
              Education
            </a>
          </li>

          <li className={styles['menu-item']}>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
