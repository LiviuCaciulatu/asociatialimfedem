"use client";

import React, { useState } from "react";
import styles from "./EventDetail.module.scss";
import Hero from "../Hero/Hero";
import Footer from "../footer/Footer";
import Lightbox from "../lightbox/Lightbox";

type Event = {
  id: string;
  title: string;
  description?: string | string[];
  image?: string;
  images?: string[];
};

const EventDetail: React.FC<{ event: Event }> = ({ event }) => {
  const gallery =
    event.images && event.images.length
      ? event.images
      : event.image
      ? [event.image]
      : [];

  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (i: number) => {
    setIndex(i);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);
  const prev = () => setIndex((s) => (s > 0 ? s - 1 : gallery.length - 1));
  const next = () => setIndex((s) => (s < gallery.length - 1 ? s + 1 : 0));

  return (
    <article className={styles.wrapper}>
      <header className={styles.header}>
        <Hero
          title={event.title}
          backgroundImage="/assets/jpg/background-1.jpg"
        />
      </header>
        <div className={styles.content}>
          <div className={styles.mainContent}>
            <div className={styles.description}>
            {Array.isArray(event.description) ? (
              event.description.map((p, i) => (
                <div
                  key={i}
                  className={styles.paragraph}
                  dangerouslySetInnerHTML={{ __html: p ?? "" }}
                />
              ))
            ) : (
              <div
                dangerouslySetInnerHTML={{
                  __html: (event.description as string) ?? "",
                }}
              />
            )}
          </div>
          {gallery.length > 0 && (
            <div className={styles.gallery}>
              {gallery.map((src, i) => (
                <div
                  key={i}
                  className={styles.galleryItem}
                  onClick={() => openAt(i)}
                >
                  <img
                    src={src}
                    alt={`${event.title} ${i + 1}`}
                    className={styles.galleryImage}
                  />
                </div>
              ))}
            </div>
          )}
          </div>

          <aside className={styles.voluntarWrap}>
            <div className={styles.voluntarCard}>
              <img
                src="/assets/events/decembrie/decembrie-1.jpg"
                alt="Fii voluntar"
                className={styles.voluntarImage}
              />
              <h3 className={styles.voluntarTitle}>FII VOLUNTAR!</h3>
              <p className={styles.voluntarText}>
                Oferă-ți timpul și abilitățile pentru a susține evenimentele și
                inițiativele noastre.
              </p>
              <a href="/voluntar" className={styles.ctaButton}>
                VEZI DETALII
              </a>
            </div>
          </aside>
        </div>
      <Footer />

      {isOpen && (
        <Lightbox
          images={gallery}
          index={index}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </article>
  );
};

export default EventDetail;
