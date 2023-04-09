import { WeatherItemWrapperProps } from '@Types/propsTypes/weatherItemTypes';
import styled, { css } from 'styled-components';

const mobileView = css`
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const WeatherItemWrapper = styled.div<WeatherItemWrapperProps>`
  ${({ variant }) =>
    variant === 'compact'
      ? css`
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          gap: 1em;
          padding: 1em;
          @media screen and (max-width: 481px) {
            ${mobileView};
          }
        `
      : css`
          display: grid;
          grid-template-columns: repeat(2, 100px);
          grid-template-rows: repeat(2, 1fr);
          @media screen and (max-width: 768px) {
            ${mobileView};
          }
        `}
`;
export const ChipContainer = styled.div`
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
`;
export const IconContainer = styled.div`
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  grid-column-start: 1,
  grid-column-end: 2,
  grid-row-start: 1,
  grid-row-end: 3,
`;
export const DegreeSpanContainer = styled.div`
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
`;
