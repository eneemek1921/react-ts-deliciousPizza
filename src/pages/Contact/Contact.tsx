import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    console.log({ name, email, message })
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <main className={styles.main}>
      <section className={styles.mainContent}>
        <h1 className={styles.title}>Contact Us</h1>
        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <h3> Address</h3>
            <p>123000 Pizza Street</p>
          </div>
          <div className={styles.infoItem}>
            <h3> Phone</h3>
            <p>+1 (000) 000-0000</p>
          </div>
          <div className={styles.infoItem}>
            <h3> Email</h3>
            <p>example@gmail.com</p>
          </div>
          <div className={styles.infoItem}>
            <h3> Hours</h3>
            <p>Mon - Sun: 11:00 AM - 10:00 PM</p>
          </div>
        </div>

        <div className={styles.formContainer}>
          <h2 className={styles.subtitle}>Send us a message</h2>
          <div className={styles.form}>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
            <textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={styles.textarea}
              rows={5}
            />
            <button onClick={handleSubmit} className={styles.submitBtn}>Send message</button>
          </div>
        </div>
      </section>
    </main>
  )
}