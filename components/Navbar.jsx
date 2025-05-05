'use client';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <div style={styles.logo}>MyApp</div>
            <div style={styles.links}>
                <Link href="/protected" style={styles.link}>
                    Protected
                </Link>
                <Link href="/NotProtected" style={styles.link}>
                    Unprotected
                </Link>
            </div>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#1f2937', 
        color: '#fff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
        top: 0,
        zIndex: 1000,
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#60a5fa', 
    },
    links: {
        display: 'flex',
        gap: '1.5rem',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '1.1rem',
        fontWeight: 500,
        transition: 'color 0.3s ease',
    },
};

export default Navbar;
