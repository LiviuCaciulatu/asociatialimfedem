import styles from "./CeFacem.module.scss";
import Link from "next/link";

const CeFacem: React.FC = () => {
  return (
    <div className={styles.ceFacem}>
      <p>
        Asociația Pacienților cu Limfedem reprezintă o comunitate dedicată,
        alcătuită din voluntari dedicați, care își unesc forțele pentru a face o
        schimbare pozitivă în viața pacienților cu limfedem și a aduce speranță
        și încurajare în mijlocul dificultăților, ca să ne ridicăm și să ne
        susținem.
        <br /><br />
        Fondată în aprilie 2023, Asociația Pacientilor cu Limfedem este o
        organizatie non-profit, un refugiu și un far de lumină pentru pacienții
        care luptă împotriva diverselor afecțiuni ale sistemului limfatic,
        limfedem primar, limfedem secundar, lipedem și alte boli conexe.
        <br /><br />
        Noi credem că aceste boli, deseori ignorate sau neglijate de sistemul
        medical, necesită atenție și sprijin sporit pentru a oferi pacienților o
        șansă de îmbunătățire a calității vieții și a redobândi controlul asupra
        propriei sănătăți.
      </p>

       <div className={styles.block}>
        <div className={`${styles.leftSide} ${styles.block1Left}`}>
          <h3 className={styles.blockTitle}>FII VOLUNTAR</h3>
          <p className={styles.blockSubtitle}>
            Oferă-ți timpul și abilitățile pentru a susține evenimentele și
            inițiativele noastre.
          </p>
          <Link href="/implica-te">
            <button className={styles.blockButton}>VEZI DETALII</button>
          </Link>
        </div>
        <div className={styles.rightSide}>
          <img
            src="/assets/png/joinUs-1.png"
            alt="Join us"
            width={500}
            height={500}
            className={styles.joinImage}
          />
        </div>
      </div>
      <div className={`${styles.block} ${styles.block2}`}>
        <div className={styles.leftSide}>
            <img
              src="/assets/png/joinUs-2.png"
              alt="logo"
              className={styles.logoAnpc}
            />
        </div>
        <div className={`${styles.rightSide} ${styles.block2Right}`}>
          <h3 className={styles.blockTitle}>SHARE MISIUNII NOASTRE</h3>
          <p className={styles.blockSubtitle}>
            Ajută-ne să creștem gradul de conștientizare împărtășind misiunea
            noastră prietenilor și familiei tale.
          </p>
          <Link href="/implica-te">
            <button className={styles.blockButton}>VEZI DETALII</button>
          </Link>
        </div>
      </div>
      <div className={styles.block}>
        <div className={`${styles.leftSide} ${styles.block1Left}`}>
          <h3 className={styles.blockTitle}>CONTRIBUIE</h3>
          <p className={styles.blockSubtitle}>
            Contribuțiile tale ne permit să ne continuăm munca în folosul
            pacienților.
          </p>
          <Link href="/implica-te">
            <button className={styles.blockButton}>VEZI DETALII</button>
          </Link>
        </div>
        <div className={styles.rightSide}>
            <img
              src="/assets/png/joinUs-3.png"
              alt="logo"
              className={styles.logoAnpc}
            />
        </div>
    </div>
    </div>
  );
};

export default CeFacem;
