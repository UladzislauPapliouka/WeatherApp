import React from 'react';
import styles from './DegreesSpan.module.scss';

export type DegreesSpanPropsType = {
  value: number
  size?: 'small' | 'default' | 'large'
};

export function DegreesSpan({ value, size = 'default' }:DegreesSpanPropsType) {
  return <span className={`${styles.degreesSpan} ${styles[size]}`}>{`${value.toFixed(0)}°`}</span>;
}
DegreesSpan.defaultProps = {
  size: 'default',
};
