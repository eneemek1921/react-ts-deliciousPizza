import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {
    
    return (
        <main className={styles.main}>
            <section className={styles.mainContent}>
                <Link className={styles.link} to='/'>Home</Link>
                <Link className={styles.link} to='/Menu'>Menu</Link>
                <Link className={styles.link} to='/Cart'>Cart</Link>
                <Link className={styles.link} to='/Contact'>Contact</Link>
            </section>
        </main>
    )
}