import styles from "./CeFacem.module.scss";
import Link from "next/link";

const CeFacem: React.FC = () => {
  return (
    <div className={styles.ceFacem}>
      <div className={styles.description}>
        <p>
          Asociația Pacienților cu Limfedem reprezintă o comunitate dedicată,
          alcătuită din voluntari dedicați, care își unesc forțele pentru a face
          o schimbare pozitivă în viața pacienților cu limfedem și a aduce
          speranță și încurajare în mijlocul dificultăților, ca să ne ridicăm și
          să ne susținem.
          <br />
          <br />
          Fondată în aprilie 2023, Asociația Pacientilor cu Limfedem este o
          organizatie non-profit, un refugiu și un far de lumină pentru
          pacienții care luptă împotriva diverselor afecțiuni ale sistemului
          limfatic, limfedem primar, limfedem secundar, lipedem și alte boli
          conexe.
          <br />
          <br />
          Noi credem că aceste boli, deseori ignorate sau neglijate de sistemul
          medical, necesită atenție și sprijin sporit pentru a oferi pacienților
          o șansă de îmbunătățire a calității vieții și a redobândi controlul
          asupra propriei sănătăți.
        </p>
      </div>
      <div className={styles.blocks}>
        <div className={styles.block}>
          <div className={`${styles.leftSide} ${styles.block1Left}`}>
            <h3 className={styles.blockSubTitle}>Misiune</h3>
            <p className={styles.blockDescription}>
              Misiunea noastră este să creăm un spațiu sigur și incluziv în care
              pacienții cu afecțiuni ale sistemului limfatic să se simtă
              înțeleși, sprijiniți și inspirați să depășească provocările
              zilnice. <br />
              <br /> Ne străduim să creștem conștientizarea asupra acestor boli
              neglijate și să aducem laolaltă pacienți, familiile și
              profesioniștii în domeniu pentru a împărtăși cunoștințe,
              experiențe și soluții inovatoare.
            </p>
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
            <h2 className={styles.blockTitleOrange}>OBIECTIVE</h2>
            <h3 className={styles.blockSubTitle}>Educație & formare</h3>
            <p className={styles.blockDescription}>
              Ne propunem să devină o sursă de informații de încredere pentru
              pacienții și familiile lor, oferind ghiduri, resurse și sfaturi
              pentru gestionarea optimă a afecțiunilor limfatice. Cu accent pe
              tehnici de gestionare și îmbrăcăminte de compresie, ne dorim să
              sprijinim pacienții în eforturile lor de a-și îmbunătăți calitatea
              vieții.
            </p>
            <h2 className={styles.blockTitle}>OBIECTIVE</h2>
            <h3 className={styles.blockSubTitle}>Sprijin și empatie</h3>
            <p className={styles.blockDescription}>
              Suntem o comunitate solidară și empatică, în care pacienții se pot
              conecta cu alții care înțeleg cu adevărat provocările pe care le
              trăiesc. Ne oferim sprijin reciproc, încurajare și umărul pe care
              să plângem sau să ne sprijinim.
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={`${styles.leftSide} ${styles.block1Left}`}>
            <h2 className={styles.blockTitleTeal}>OBIECTIVE</h2>
            <h3 className={styles.blockSubTitle}>Proiecte și evenimente</h3>
            <p className={styles.blockDescription}>
              Suntem hotărâți să creștem impactul nostru prin dezvoltarea și
              implementarea de proiecte și evenimente care să promoveze
              conștientizarea și să sprijine misiunea noastră. De la campanii de
              conștientizare publică până la sesiuni de educație medicală și
              activități de colectare de fonduri, ne străduim să creăm schimbări
              semnificative în mentalități și în viața pacienților.
            </p>
            <h2 className={styles.blockTitleTeal}>OBIECTIVE</h2>
            <h3 className={styles.blockSubTitle}>Schimbare socială</h3>
            <p className={styles.blockDescription}>
              Suntem într-o misiune de a schimba mentalități și atitudini față
              de aceste boli, de la neglijare la acceptare și empatie. Ne
              implicăm în activități de constientizare și colaborăm cu
              organizații și autorități pentru a obține recunoaștere și sprijin
              pentru pacienții noștri.
            </p>
            <h2 className={styles.blockTitleTeal}>OBIECTIVE</h2>
            <h3 className={styles.blockSubTitle}>Sprijin pentru copii</h3>
            <p className={styles.blockDescription}>
              Ne axăm pe sprijinirea copiilor cu limfedem primar, asigurându-ne
              că acești copii si tineri curajoși nu sunt uitați sau neglijați.
              Lucrăm pentru a crea o rețea de sprijin pentru ei și familiile
              lor, oferindu-le resursele, informatiile și încurajările de care
              au nevoie pentru a se dezvolta într-un mediu pozitiv. Le aratam
              copiilor ca nu sunt singuri in fata provocarilor de tot felul, ci
              fac parte dintr-o comunitate solida care ofera suport fiecarui
              membru in parte
            </p>
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
    </div>
  );
};

export default CeFacem;
