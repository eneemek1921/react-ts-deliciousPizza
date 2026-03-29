import { Link } from 'react-router-dom'
import styles from './Nav.module.css'
import { useCart } from '../../contexts/CartContext'

export default function Nav() {
    const {cart} = useCart()
    
    return (
        <nav className={styles.nav}>
            <div className={styles.navContent}>
                <Link className={styles.link} to='/'>Home</Link>
                <Link className={styles.link} to='/Menu'>Menu</Link>
                <Link className={styles.link} to='/Cart'>
                    Cart {cart.length >= 1 && <span className={styles.cartBadge}>{cart.length}</span>}
                </Link>
                <Link className={styles.link} to='/Contact'>Contact</Link>
            </div>
        </nav>
    )
}