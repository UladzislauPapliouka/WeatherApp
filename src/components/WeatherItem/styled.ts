import { WeatherItemWrapperProps } from '@components/WeatherItem/types';
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
          gap: ${({ theme: { sizes } }) => sizes.WeatherItemGaps.md}px;
          padding: ${({ theme: { sizes } }) => sizes.WeatherItemGaps.md}px;
          @media screen and (max-width: ${({ theme: { sizes } }) =>
              sizes.displayBreakpoints.md}px) {
            ${mobileView};
          }
        `
      : css`
          display: grid;
          grid-template-columns: repeat(
            2,
            ${({ theme: { sizes } }) => sizes.WeatherItemColumn.md}px
          );
          grid-template-rows: repeat(2, 1fr);
          @media screen and (max-width: ${({ theme: { sizes } }) =>
              sizes.displayBreakpoints.md}px) {
            ${mobileView};
          }
        `}
`;
export const ChipContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
`;
export const DegreeSpanContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
