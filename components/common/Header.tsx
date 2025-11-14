import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import styles from "@styles/Header.module.css";

interface HeaderProps {
  onNavigateToSignIn?: () => void;
  onNavigateToSignUp?: () => void;
  showAuthButtons?: boolean;
  activeNav?: "creator" | "become" | "support" | "help";
  isAuthenticated?: boolean;
  onLogout?: () => void;
}

export function Header({ onNavigateToSignIn, onNavigateToSignUp, showAuthButtons = false, activeNav, isAuthenticated, onLogout }: HeaderProps) {
  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link href="/" className={styles.logoBar}>
              <span className={styles.logoText}>FUOMO</span>
            </Link>
            <button className={styles.shopButton}>
              <ShoppingBag width={20} height={20} />
              <span>Shop</span>
            </button>
          </div>
          <nav className={styles.nav}>
            <Link href="/#creators" className={activeNav === "creator" ? "active" : undefined}>Creator</Link>
            <Link href="/#how" className={activeNav === "become" ? "active" : undefined}>Become Creator</Link>
            <Link href="/#gallery" className={activeNav === "support" ? "active" : undefined}>Support</Link>
            <Link href="/#faq" className={activeNav === "help" ? "active" : undefined}>Help</Link>
            {isAuthenticated ? (
              <button onClick={onLogout} className={styles.actionButton}>Logout</button>
            ) : (
              showAuthButtons && (
                <button onClick={onNavigateToSignUp ?? onNavigateToSignIn} className={styles.actionButton}>Buat Akun</button>
              )
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
