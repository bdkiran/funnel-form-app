import React from 'react';
import styles from './TopBar.module.css';
import logo from './aaLogo.png';

export default function TopBar() {
    return (
        <header className={styles.appHeader}>
            <img src={logo} alt="logo"/>
        </header>
    )
}
