import type { NextPage } from 'next';
import Image from 'next/image';

import styles from '../styles/Description.module.css';

const description = `
  Handcrafted delights that instantly brighten up your day.
  Whether its chocolate, vanilla or cinnamon, we use the finest
  ingredients to produce these mouth watering artifacts.
  `;

const Description: NextPage = () => {
  const plates = [
    '/food.jpg', '/food.jpg', '/food.jpg',
    '/food.jpg', '/food.jpg', '/food.jpg'
  ];
  return (
    <div className={styles.container}>
      <div className={`${styles.block} ${styles.left}`}>
        <h1 className={styles.head}>Our Sweets</h1>
        <div className={styles.line} />
        <p className={styles.description}>{description}</p>
      </div>
      <div className={`${styles.block} ${styles.right}`}>
        <div className={styles.imageGrid}>
          {plates.map((x, i) => {
            return <div key={i} className={styles.image}>
              <Image
                src={x}
                height="100px"
                width="100px"
                layout="responsive"
              />
            </div>
          })}
        </div>
      </div>
    </div>
  );
}

export default Description;
