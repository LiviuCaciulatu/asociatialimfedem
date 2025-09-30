"use client";

import React, { useState } from "react";
import styles from "./EventDetail.module.scss";
import Hero from "../Hero/Hero";
import Footer from "../footer/Footer";
import Lightbox from "../lightbox/Lightbox";

type Event = {
  id: string;
  title: string;
  description?: string;
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
        <p className={styles.description}>{event.description}</p>
        {gallery.length > 0 && (
          <div className={styles.gallery}>
            {gallery.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={src}
                alt={`${event.title} ${i + 1}`}
                className={styles.galleryImage}
                onClick={() => openAt(i)}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />

      {isOpen && (
        <Lightbox images={gallery} index={index} onClose={close} onPrev={prev} onNext={next} />
      )}
    </article>
  );
};

export default EventDetail;
