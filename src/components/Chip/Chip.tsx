import React from 'react';

import styles from './Chip.module.scss';

interface ChipProps {
  text: string;
  variant?: 'small' | 'default' | 'large';
}

function Chip({ text, variant = 'default' }: ChipProps) {
  return (
    <div className={`${styles.Badge} ${styles[variant]}`}>
      <span className={styles.text}>{text}</span>
    </div>
  );
}
Chip.defaultProps = {
  variant: 'default',
};
export { Chip };
export type { ChipProps };
