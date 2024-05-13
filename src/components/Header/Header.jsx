import { useState } from 'react';
import styles from './Header.module.css'

export function Header(personalInfo) {
    const [sticky, setSticky] = useState(false)
    document.addEventListener('scroll', (event) => {
        if (window.scrollY > document.documentElement.clientHeight) {
            setSticky(true)
        } else { 
            setSticky(false)
        }
    })
    return (
        <div id="header" className={styles['app-header'] + ' ' + `${sticky ? styles['sticky-header'] : ''}`}>
            <div className={styles['header-container']}>
                <div className={styles.left}>
                    <div className="artist-name">
                        {personalInfo.alias + ' ' + personalInfo.lastName}
                    </div>
                </div>
                <div className="spacer"></div>
                <div className={styles.right}>
                    <div className={styles.links}>
                        <div className="link">Link 1</div>
                        <div className="link">Link 2</div>
                    </div>
                </div>
            </div>
        </div>
    )
}