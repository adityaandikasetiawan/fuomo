import { Instagram, Youtube, Twitter, Facebook } from "lucide-react";
import Link from "next/link";
import styles from "@styles/HomePage.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerGrid}>
          <div>
            <Link href="/" className={styles.footerLogoBar}><span>FUOMO</span></Link>
            <p className={styles.footerText}>
              Punya kreativitas sendiri tapi enggak tau mau mulai dari mana? Di PUOMO
              bisa! Komunitas terbuka untuk semua jenis kreator!
            </p>
            <div className={styles.socialRow}>
              <a href="#" className={styles.socialBtn}><Instagram width={16} height={16} /></a>
              <a href="#" className={styles.socialBtn}><Youtube width={16} height={16} /></a>
              <a href="#" className={styles.socialBtn}><Twitter width={16} height={16} /></a>
              <a href="#" className={styles.socialBtn}><Facebook width={16} height={16} /></a>
            </div>
          </div>

          <div className={styles.linkCol}>
            <h3>Product</h3>
            <ul className={styles.links}>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Case studies</a></li>
              <li><a href="#">Reviews</a></li>
              <li><a href="#">Updates</a></li>
            </ul>
          </div>

          <div className={styles.linkCol}>
            <h3>Supports</h3>
            <ul className={styles.links}>
              <li><a href="#">Getting started</a></li>
              <li><a href="#">Help center</a></li>
              <li><a href="#">Server status</a></li>
              <li><a href="#">Report a bug</a></li>
              <li><a href="#">Chat support</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2025 Fuomo. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}