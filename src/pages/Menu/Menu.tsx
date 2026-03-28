import { useMemo, useState } from "react";
import { products, type ProductsType } from "../../Data/menu";
import styles from './Menu.module.css'



export default function Menu() {
    const [selected, setSelected] = useState('all')

    const filteredProducts = useMemo(() => {
        if (selected === 'all') return products
        return products.filter(product => product.category === selected)
        
    }, [selected])

    return (
        <main className={styles.main}>
            <section className={styles.mainContent}>
                <div className={styles.filterBtns}>
                    <button className={styles.filterBtn} onClick={() => setSelected('all')}>All</button>
                    <button className={styles.filterBtn} onClick={() => setSelected('Classic')}>Classic</button>
                    <button className={styles.filterBtn} onClick={() => setSelected('Spicy')}>Spicy</button>
                    <button className={styles.filterBtn} onClick={() => setSelected('Vegetarian')}>Vegetarian</button>
                    <button className={styles.filterBtn} onClick={() => setSelected('Gourmet')}>Gourmet</button>
                    <button className={styles.filterBtn} onClick={() => setSelected('Meat')}>Meat</button>
                    <button className={styles.filterBtn} onClick={() => setSelected('Specialty')}>Specialty</button>
                    <button className={styles.filterBtn} onClick={() => setSelected('Gluten Free')}>Gluten Free</button>
                </div>
                <div className={styles.productsContent}>
                    {filteredProducts.map(product => (
                    <div key={product.id} className={styles.productCard}>
                        <h2>{product.title}</h2>
                        <p>Price: {product.price}$</p>
                        <p>Category: {product.category}</p>
                        {product.sale && <p className={styles.productSale}>Sale: {product.sale}%</p> }
                    </div>
                ))}
                </div>
            </section>
        </main>
    )
}
