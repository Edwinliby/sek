import { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import logo from '../../assets/Logo.webp';
import whiteLogo from '../../assets/white-logo.webp'

export default function Navbar({ handleFormClick }) {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 150;
            setIsScrolled(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={styles.nav}>

            <div className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${isMobileMenuOpen ? styles.open : ''}`}>

                <div className={`${styles.menuIcon} ${isMobileMenuOpen ? styles.open : ''}`} onClick={handleMobileMenuToggle}>
                    <div className={styles.bar} />
                    <div className={styles.bar} />
                    <div className={styles.bar} />
                </div>

                <a href="#home" className={styles.blueLogo}>
                    <img className={styles.logo} src={logo} alt='sek-logo' />
                </a>

                <a href="#home" className={styles.whiteLogo}>
                    <img className={styles.logo} src={whiteLogo} alt='sek-logo' />
                </a>

                <div className={`${styles.links} ${isMobileMenuOpen ? styles.open : ''}`}>
                    <a href="#home" className={styles.whiteLogo}>
                        <img className={styles.logoo} src={whiteLogo} alt='gsfk-logo' />
                    </a>
                    <a href="#home" className={styles.blueLogo}>
                        <img className={styles.logoo} src={logo} alt='gsfk-logo' />
                    </a>

                    <div className={styles.linkBlocks}>
                        <a href={window.location.pathname === '/team' ? '/#about' : '#about'}>
                            About
                        </a>
                        <a href="#join" >
                            Partners
                        </a>
                        <a href="#glance" >
                            At a Glance
                        </a>
                        <a href="#features" >
                            Features
                        </a>
                        {/* <p className={styles.menuBuy} onClick={handleFormClick}>
                            <b>Buy Ticket</b>
                        </p> */}
                        <a href="#" className={styles.menuBuy}>
                            Tickets Closed
                        </a>
                    </div>

                    {/* <p className={styles.buy} onClick={handleFormClick}>
                        <b>Buy Ticket</b>
                    </p> */}
                    <a href="#" className={styles.buy}>
                        Tickets Closed
                    </a>
                </div>
            </div>
        </nav >
    );
}