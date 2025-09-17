import React from "react";
import styles from "./MediaComponent.module.scss";

const VIDEO_URL =
  "https://www.facebook.com/daniel.tigleanu/videos/890966982228023";

const MediaComponent: React.FC = () => {
  const pluginSrc = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
    VIDEO_URL
  )}&show_text=0&width=560`;

  return (
    <section className={styles.media} aria-labelledby="media-title">
      <div className={styles.inner}>
        <div className={styles.embedWrap}>
          <iframe
            title="Facebook video"
            src={pluginSrc}
            width="560"
            height="315"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div className={styles.video}>
          <h2 id="media-title" className={styles.title}>
            TVSat
          </h2>
          <p className={styles.fallback}>
            Şansă nesperată pentru cei care luptă să învingă cancerul de sân,
            dar cărora li se umflă braţul pe partea operată. Această problemă,
            care se numește limfedem și care, până de curând, era o afecțiune
            incurabilă în România, are acum leac prin intervenţii chirurgicale
            speciale.{" "}
          </p>
            <a
              href={VIDEO_URL}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              Deschide video pe Facebook
            </a>
        </div>
      </div>
    </section>
  );
};

export default MediaComponent;
