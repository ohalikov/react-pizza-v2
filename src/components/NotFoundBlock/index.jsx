import React from 'react';
import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Ничего не найдено, увы!
      </h1>
      <p className={styles.description}>К сожалению данная страница отсутствует.</p>
    </div>
  );
};
