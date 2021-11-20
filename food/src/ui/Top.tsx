import type { NextPage } from 'next';
import Image from 'next/image';

import styles from '../styles/Top.module.css';

const Top: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.logoBlock}>
          <Image
            src="/logo.png"
            height="250px"
            width="250px"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}

export default Top;
