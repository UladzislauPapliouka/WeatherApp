import { AxiosInstance } from 'axios';

import DayNames from '@constants/dayNames';

function getDayName(dayNumber: number) {
  const daysName = [
    DayNames.Sunday,
    DayNames.Monday,
    DayNames.Tuesday,
    DayNames.Wednesday,
    DayNames.Thursday,
    DayNames.Friday,
    DayNames.Saturday,
  ];

  return daysName[dayNumber];
}

const cacheService = async <T>(url: string, instance: AxiosInstance) => {
  const cache = await window.caches.open('openMeteo');

  const cacheItem = await cache.match(url);

  if (cacheItem) {
    const response = await cacheItem.json();

    if (Math.abs(response.cacheTime - new Date().getTime()) <= 3600000) {
      return response;
    }
  }

  const response = await instance.get<T>(url);

  if (!response) return null;

  await cache.put(
    response.config.url as string,
    new Response(
      JSON.stringify({ ...response.data, cacheTime: new Date().getTime() }),
    ),
  );

  return response.data;
};

export { cacheService, getDayName };
