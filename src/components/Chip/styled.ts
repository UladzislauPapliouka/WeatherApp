import styled, { css } from 'styled-components';

import { IChipWrapperProps } from './types';

export const ChipWrapper = styled.div<IChipWrapperProps>`
  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: ${({ theme: { sizes } }) => sizes.chipWidthSize.md}px;
  max-width: ${({ theme: { sizes } }) => sizes.chipWidthSize.xl}px;
  min-height: ${({ theme: { sizes } }) => sizes.chipHeightSize.md}px;
  background-color: ${({ theme: { colors } }) => colors.primaryDarkBlue};
  border-radius: ${({ theme: { sizes } }) => sizes.fontSizes.xxl}px;

  margin: ${({ theme: { sizes } }) => sizes.chipGapSize.xs}px;
  ${({ variant }) => {
    switch (variant) {
      case 'small':
        return css`
          font-size: ${({ theme: { sizes } }) => sizes.fontSizes.xs}px;
          padding: ${({ theme: { sizes } }) => sizes.chipGapSize.sm}px
            ${({ theme: { sizes } }) => sizes.chipGapSize.md}px;
        `;

      case 'large':
        return css`
          font-size: ${({ theme: { sizes } }) => sizes.fontSizes.md}px;
          padding: ${({ theme: { sizes } }) => sizes.chipGapSize.md}px
            ${({ theme: { sizes } }) => sizes.chipGapSize.lg}px;
        `;

      default:
        return css`
          font-size: ${({ theme: { sizes } }) => sizes.fontSizes.sm}px;
          padding: ${({ theme: { sizes } }) => sizes.chipGapSize.sm}px
            ${({ theme: { sizes } }) => sizes.chipGapSize.md}px;
        `;
    }
  }}
`;
export const ChipText = styled.span`
  display: inline-block;
  font-weight: bold;
  text-transform: uppercase;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
`;
