import { Header } from "@components/common/Header";
import { Footer } from "@components/common/Footer";
import styles from "@styles/HomePage.module.css";
import type { Creator } from "@lib/api/types";

interface HomePageProps {
  onNavigateToSignIn: () => void;
  onNavigateToSignUp?: () => void;
  creatorsData?: Creator[] | undefined;
  isAuthenticated?: boolean;
  onLogout?: () => void;
}

export function HomePage({ onNavigateToSignIn, onNavigateToSignUp, creatorsData, isAuthenticated, onLogout }: HomePageProps) {
  const creators = [
    {
      name: "Bisa Di!",
      title: "Lengkapi Karyamu",
      description: "Upgrade your illustration atau 3d art dengan referensi kamu pribadi",
    },
    {
      name: "Jago Di!",
      title: "Share Karyamu",
      description: "Upload karya kamu di platform FUOMO, buat portfolio onlinemu jadi lebih menarik!",
    },
    {
      name: "Dago Ui!",
      title: "Dapatkan Reward",
      description: "Berpeluang mendapatkan reward dari komunitas FUOMO yang mendukung karya dan kreativitasmu!",
    },
  ];



  return (
    <div className={styles.page}>
      <Header 
        onNavigateToSignIn={onNavigateToSignIn} 
        onNavigateToSignUp={onNavigateToSignUp} 
        showAuthButtons={!isAuthenticated}
        isAuthenticated={isAuthenticated}
        onLogout={onLogout}
        activeNav="creator"
      />

      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div>
            <h1 className={styles.heroTitle}>Create-Connect-Grow</h1>
            <p className={styles.heroText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className={styles.cta}>Mulai Disini</button>
          </div>
          <div>
            <div className={styles.heroImage}>Hero Image</div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="creators">
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Temukan Creator Favoritmu Disini!</h2>
          <div className={styles.grid}>
            {(creatorsData && creatorsData.length > 0
              ? creatorsData.map((c) => (
                  <div key={c.id} className={styles.card}>
                    <div className={styles.cardImage}>{c.name}</div>
                    <div className={styles.cardBody}>
                      <h3 className={styles.cardTitle}>{c.title ?? c.name}</h3>
                      <p className={styles.cardText}>{c.description ?? ""}</p>
                    </div>
                  </div>
                ))
              : [1, 2, 3, 4].map((item) => (
                  <div key={item} className={styles.card}>
                    <div className={styles.cardImage}>Creator {item}</div>
                    <div className={styles.cardBody}>
                      <h3 className={styles.cardTitle}>Creator {item}</h3>
                      <p className={styles.cardText}>Deskripsi singkat creator {item}</p>
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.section} id="how">
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Gimana cara kerjanya?</h2>
          <div className={styles.grid}>
            {creators.map((creator, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardImage}>{creator.name}</div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{creator.title}</h3>
                  <p className={styles.cardText}>{creator.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={styles.section} id="gallery">
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>#FUOMOhits - Tempat Kreator Dapat Insight Seru!</h2>
          <p className={styles.heroText}>Udah tau ART-Hits terbaru? tentunya kalian, dan gabungin dengan</p>

          <div className={styles.grid}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className={styles.card}>
                <div className={styles.cardImage}>Gallery {item}</div>
              </div>
            ))}
            <div>
              <button className={styles.cta}>SHOW ALL</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.section} id="faq">
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle} style={{ textAlign: "center" }}>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqImage}>FAQ Image</div>
            <div className={styles.faqContent}>
              <details>
                <summary>Apa itu PUOMO?</summary>
                <p>PUOMO adalah platform komunitas untuk kreator yang memungkinkan kamu untuk berbagi karya, mendapatkan referensi, dan berkembang bersama kreator lainnya.</p>
              </details>
              <details>
                <summary>Bagaimana cara menjadi creator di PUOMO?</summary>
                <p>Daftar akun, lengkapi profil, dan mulai unggah karya. Berinteraksi dengan komunitas untuk mendapatkan feedback.</p>
              </details>
              <details>
                <summary>Apakah PUOMO gratis?</summary>
                <p>Ya, gratis digunakan. Tersedia fitur premium untuk exposure tambahan.</p>
              </details>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
