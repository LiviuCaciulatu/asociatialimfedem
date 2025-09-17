import React from 'react';
import styles from './Hero.module.scss';
import Link from 'next/link';

interface HeroProps {
  title: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({ title, description, buttonText, buttonHref, backgroundImage }) => {
  const style: React.CSSProperties = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {};

  return (
    <section className={styles.hero} style={style} aria-labelledby="page-hero-title">
      <div className={styles.inner}>
        <h1 id="page-hero-title" className={styles.title}>{title}</h1>
        {description && <p className={styles.lead}>{description}</p>}
        {buttonText && buttonHref && (
          <Link href={buttonHref}>
            <button className={styles.primaryBtn}>{buttonText}</button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Hero;
