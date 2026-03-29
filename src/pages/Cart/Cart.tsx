import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useCart } from '../../contexts/CartContext'
import styles from './Cart.module.css'

interface FormData {
  name: string;
  address: string;
  phone: string;
}

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart()
  const [active, setActive] = useState<boolean>(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const handleClick = () => {
    setActive(!active)
  }

  const onSubmit = (data: FormData) => {
    console.log(data)
    setActive(false)
    clearCart()
  }

  return (
    <main className={styles.main}>
      <section className={styles.mainContent}>
        <button className={styles.clearBtn} onClick={() => clearCart()}>Clear</button>
        <button className={styles.clearBtn} onClick={handleClick} disabled={cart.length === 0}>Buy</button>
        <h1 className={styles.title}>Your cart:</h1>
        {cart.length === 0 ? (
          <p className={styles.emptyMessage}>There is nothing in the Cart :(</p>
        ) : (
          <div className={styles.cartList}>
            {cart.map(product => (
              <div key={product.id} className={styles.cartItem} onClick={() => removeFromCart(product.id)}>
                <h2 className={styles.itemTitle}>{product.title}</h2>
                <p className={styles.itemPrice}>{product.price}$, {product.quantity}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {active && (
        <div className={styles.overlay} onClick={handleClick}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2 className={styles.modalTitle}>Complete your order</h2>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <div className={styles.formField}>
                <input
                  {...register('name', {
                    required: 'Name is required',
                    pattern: {
                      value: /^[A-Za-zА-Яа-я]{2,}$/,
                      message: 'Only letters, minimum 2 characters'
                    }
                  })}
                  placeholder="Name"
                  className={styles.input}
                />
                {errors.name && <p className={styles.error}>{errors.name.message}</p>}
              </div>

              <div className={styles.formField}>
                <input
                  {...register('address', {
                    required: 'Address is required',
                    minLength: {
                      value: 5,
                      message: 'Minimum 5 characters'
                    }
                  })}
                  placeholder="Address"
                  className={styles.input}
                />
                {errors.address && <p className={styles.error}>{errors.address.message}</p>}
              </div>

              <div className={styles.formField}>
                <input
                  {...register('phone', {
                    required: 'Phone is required',
                    pattern: {
                      value: /^[0-9]{6,}$/,
                      message: 'Only numbers, minimum 6 digits'
                    }
                  })}
                  placeholder="Phone"
                  className={styles.input}
                />
                {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
              </div>

              <button type="submit" className={styles.submitBtn}>Submit order</button>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}