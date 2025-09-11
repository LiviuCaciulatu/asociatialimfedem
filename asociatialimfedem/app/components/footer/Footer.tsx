import styles from './Footer.module.scss';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
          <div className={styles.left}>
            <h4>Meniu rapid</h4>
            <ul className={styles.list}>
              <li><a href="/">Acasă</a></li>
              <li><a href="/despre">Despre noi</a></li>
              <li><a href="/echipa-noastra">Echipa</a></li>
              <li><a href="/despre-limfedem">Despre Limfedem</a></li>
              <li><a href="/ce-facem">Ce facem</a></li>
            </ul>
          </div>

          <div className={styles.center}>
            <div className={styles.brand}>
              <img src="/assets/png/Limfedem_logo_orizontal.png" alt="logo" className={styles.logo} />
            </div>
          </div>

          <div className={styles.right}>
            <h4 className={styles.titleRight}>Link-uri utile</h4>
            <ul className={styles.list}>
              <li><a href="/implica-te">Implică-te</a></li>
              <li><a href="/media">Media</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contactează-ne</a></li>
              <li><a href="/politica-de-confidentialitate">Politica de confidențialitate</a></li>
            </ul>
            <div className={styles.social}>
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Instagram">IG</a>
            </div>
          </div>
      </div>
        <div className={styles.copyright}>© {year} Asociația Limfedem</div>
        <div className={styles.copyright}>© {year} CleanCode Solutions</div>
    </footer>
  );
}
