import styles from "../page.module.css";
import Wishlist from "../../components/Wishlist";

export default function WishlistPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Wishlist />
      </main>
    </div>
  );
}
