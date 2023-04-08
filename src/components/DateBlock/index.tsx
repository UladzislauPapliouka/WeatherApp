import React, { useEffect, useState } from 'react';

import { formatTime, parseDate } from '../../services/dateService';

import { DateBlockWrapper, DateText, TimeWrapper } from './styled';

function DateBlock() {
  const [time, setTime] = useState(formatTime(new Date()));
  const [parsedDate, setParsedDate] = useState(parseDate(new Date()));
  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setTime(formatTime(date));
      setParsedDate(parseDate(date));
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <DateBlockWrapper>
      <TimeWrapper>
        <DateText variant="large">{time.slice(0, time.length - 2)}</DateText>
        <DateText>{time.slice(-2)}</DateText>
      </TimeWrapper>
      <DateText variant="small">{parsedDate}</DateText>
    </DateBlockWrapper>
  );
}

export default DateBlock;
