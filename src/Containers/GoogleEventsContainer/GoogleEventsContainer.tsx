import React from 'react';
import styles from './GoogleEventsContainer.module.scss';
import { GoogleEvent } from '../../Components/GoogleEvent';

export default function GoogleEventsContainer() {
  const hasEvents = true;
  return (
    <div className={styles.googleEventsContainer}>
      {hasEvents
        ? (
          <>
            <GoogleEvent time="8:00" eventTitle="wake up" />
            <GoogleEvent time="9:00" eventTitle="wake up1" />
            <GoogleEvent time="10:00" eventTitle="wake up2" />
            <GoogleEvent time="11:00" eventTitle="wake up3" />
            <GoogleEvent time="12:00" eventTitle="wake up4" />
            <GoogleEvent time="13:00" eventTitle="wake up5" />
            <GoogleEvent time="14:00" eventTitle="wake up6" />
            <GoogleEvent time="15:00" eventTitle="wake up7" />
            <GoogleEvent time="16:00" eventTitle="wake up8" />
            <GoogleEvent time="17:00" eventTitle="wake up9" />
            <GoogleEvent time="18:00" eventTitle="wake up10" />
            <GoogleEvent time="19:00" eventTitle="wake up11" />
          </>
        )
        : <span>No events</span>}
    </div>
  );
}
