import React from 'react';
import styles from './BottomBar.module.css'

export default function BottomBar() {
    return (
        <footer className={styles.appFooter}>
            <p>
                <a>Terms of Use</a>
                    &nbsp; | &nbsp;
                <a>Privacy Policy</a>
            </p>
        </footer>
    )
}
