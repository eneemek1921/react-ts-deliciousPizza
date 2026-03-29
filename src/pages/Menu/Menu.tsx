import { useMemo, useState } from "react";
import { products, type ProductsType } from "../../Data/menu";
import styles from './Menu.module.css'
import { useSearchParams } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

export default function Menu() {
    const {addToCart} = useCart()
    const [searhParams] = useSearchParams()
    const URLcategory = searhParams.get('category') || 'all'
    const [selected, setSelected] = useState(URLcategory)
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
                        <div key={product.id} className={styles.productCard} onClick={() => addToCart({...product, quantity: 1})}>
                            <h2 className={styles.productTitle}>{product.title}</h2>
                            <p className={styles.productPrice}>Price: {product.price}$</p>
                            <p className={styles.productCategory}>Category: {product.category}</p>
                            {product.sale && <p className={styles.productSale}>Sale: {product.sale}%</p>}
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}