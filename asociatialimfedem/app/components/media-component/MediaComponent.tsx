import React from "react";
import styles from "./MediaComponent.module.scss";

type Video = {
  id: string;
  platform: "facebook" | "youtube";
  url: string;
  title: string;
  description: string;
};

const videos: Video[] = [
  {
    id: "fb1",
    platform: "facebook",
    url: "https://www.facebook.com/daniel.tigleanu/videos/890966982228023",
    title: "TVSat",
    description:
      "Şansă nesperată pentru cei care luptă să învingă cancerul de sân, dar cărora li se umflă braţul pe partea operată. Această problemă, care se numește limfedem și care, până de curând, era o afecțiune incurabilă în România, are acum leac prin intervenţii chirurgicale speciale.",
  },
  {
    id: "yt1",
    platform: "youtube",
    url: "https://www.youtube.com/watch?v=GBdRN33uAqY",
    title: "Cu Capul Gol – Podcast Episod 1",
    description:
      "Cu Capul Gol, o inițiativă OPEN MINDS cu sprijinul EXPLORATIST, este un podcast dedicat femeilor care caută înțelegere, curaj și sprijin în fața unui diagnostic care schimbă totul — sau care vor pur și simplu să aibă mai multă grijă de ele. Aici vorbim despre sănătate, alegeri mici care pot avea un impact uriaș și despre cât de important e să nu amânăm grija pentru noi. În acest episod vom explora limfedemul și ce putem face pentru a-l gestiona împreună cu invitata Claudia Trandafirescu.",
  },
  {
    id: "yt2",
    platform: "youtube",
    url: "https://www.youtube.com/watch?v=2q629qujwxM",
    title: "Cu Capul Gol – Podcast Episod 2",
    description:
      "Cu Capul Gol, o inițiativă OPEN MINDS cu sprijinul EXPLORATIST, este un podcast dedicat femeilor care caută înțelegere, curaj și sprijin în fața unui diagnostic care schimbă totul — sau care vor pur și simplu să aibă mai multă grijă de ele. Aici vorbim despre sănătate, alegeri mici care pot avea un impact uriaș și despre cât de important e să nu amânăm grija pentru noi. În cazul unui diagnostic oncologic, după ce se termină etapele clasice de tratament – chimioterapie, intervenție chirurgicală, radioterapie - ne așteptăm ca totul să revină la normal. Dar uneori, apar schimbări despre care nimeni nu ne-a spus prea multe. Una dintre ele este limfedemul. În acest episod vom explora acest subiect și vom afla nu doar ce este, ci și ce putem face pentru a-l gestiona împreună cu invitata Claudia Trandafirescu, pacientă cu limfedem și Fondator al Asociației Limfedem – Împreună Pas cu Pas. Urmărește episodul și abonează-te pentru mai multe discuții care aduc claritate, inspirație și curaj.",
  },
];

const MediaComponent: React.FC = () => {
  return (
    <section className={styles.media} aria-labelledby="media-title">
      <div className={styles.inner}>
        {videos.map((video) => {
          const isFacebook = video.platform === "facebook";
          const embedSrc = isFacebook
            ? `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                video.url
              )}&show_text=0&width=560`
            : `https://www.youtube.com/embed/${video.url.split("v=")[1]}`;

          return (
            <div key={video.id} className={styles.videoBlock}>
              <div className={styles.embedWrap}>
                <iframe
                  title={video.title}
                  src={embedSrc}
                  width="560"
                  height="315"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <div className={styles.content}>
                <h2 id="media-title" className={styles.title}>
                  {video.title}
                </h2>

                <p className={styles.description}>{video.description}</p>

                <a
                  href={video.url}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  Deschide video pe {isFacebook ? "Facebook" : "YouTube"}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MediaComponent;
