import { useState } from 'react'
import styles from './Navbar.module.css'


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (<nav className={styles.navbar}>
        <a href="/" className={styles['navbar-title']}>Portfolio</a>
        <div className={`${styles['navbar-menu']} `}>
            <img className={styles['menu-icon']}
                src={isOpen ? '/assets/nav/closeIcon.png' : '/assets/nav/menuIcon.png'}
                alt='menu icon'
                onClick={() => setIsOpen(!isOpen)} />

            <ul className={`${styles['menu-items']} ${isOpen ? styles['is-open'] : ''} }`}>
                <li className={styles['menu-item']} > <a href='#about'
                    onClick={() => setIsOpen(!isOpen)}>About</a></li>
                <li className={styles['menu-item']} > <a href='#experience'
                    onClick={() => setIsOpen(!isOpen)}>Experience</a></li>
                <li className={styles['menu-item']} > <a href='#projects'
                    onClick={() => setIsOpen(!isOpen)}>Projects</a></li>
                <li className={styles['menu-item']} > <a href='#contact'
                    onClick={() => setIsOpen(!isOpen)}>Contact</a></li>
            </ul>
        </div >
    </nav >)
}