import React, { useEffect, useState } from 'react';

import styles from './DateBlock.module.scss';

export default function DateBlock() {
  const [date, setDate] = useState<Date>(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const time = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(date);
  const dateParse = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date);
  return (
    <div className={styles.dateBlock}>
      <div className={styles.time}>
        <span>{time.slice(0, time.length - 2)}</span>
        <span>{time.slice(-2)}</span>
      </div>
      <span className={styles.date}>{dateParse}</span>
    </div>
  );
}
