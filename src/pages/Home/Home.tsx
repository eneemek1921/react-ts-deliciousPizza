import { Link } from "react-router-dom";
import { filters } from "../../Data/filters";
import styles from './Home.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.mainContent}>
                <h1 className={styles.title}>Welcome to Delicious Pizza!</h1>
                <div className={styles.filters}>
                    {filters.map(filter => (
                        <Link key={filter.id} to={filter.url} className={styles.filterLink}>
                            <h1 className={styles.filterTitle}>{filter.title}</h1>
                        </Link>
                    ))}
                </div>

                <div className={styles.texts}>
                    <p className={styles.firstP}>
                        We're not just a pizzeria — we're a passion project born from a simple belief: great pizza makes life better.
                    </p>
                    <p className={styles.p}>
                        It all started in a small kitchen, where we spent months perfecting our dough recipe, testing countless combinations of flour, water, and yeast until we found the perfect balance — crispy on the outside, soft and airy on the inside.
                    </p>
                    <p className={styles.p}>
                        Our ingredients? Only the freshest. We source tomatoes from family farms in Italy, mozzarella that arrives every morning, and vegetables that still smell like earth. Every pizza is hand-stretched, topped with care, and baked in a stone oven at 400°C for exactly 90 seconds.
                    </p>
                    <p className={styles.p}>
                        But Delicious Pizza is more than food. It's the place where friends gather after a long week, where families celebrate small victories, and where you can always find a warm slice and a warmer smile.
                    </p>
                    <p className={styles.p}>
                        Whether you're a fan of the classic Margherita, a daring experimenter with our Spicy Diavola, or someone who just wants a quiet corner with a good book and a slice — we've got a seat for you.
                    </p>
                    <p className={styles.p}>
                        We don't just make pizza. We make moments.
                    </p>
                    <p className={styles.p}>
                        Come taste the difference. Your slice is waiting.
                    </p>
                    <p className={styles.lastP}>
                        — <em>The Delicious Pizza Team</em>
                    </p>
                </div>
            </section>
        </main>
    )
}