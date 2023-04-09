import { ChipWrapperPropsTypes } from '@Types/propsTypes/chipTypes';
import styled, { css } from 'styled-components';

export const ChipWrapper = styled.div<ChipWrapperPropsTypes>`
  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: ${({ theme: { sizes } }) => sizes.chipWidthSize.md}px;
  max-width: ${({ theme: { sizes } }) => sizes.chipWidthSize.xl}px;
  min-height: ${({ theme: { sizes } }) => sizes.chipHeightSize.md}px;
  background-color: ${({ theme: { colors } }) => colors.chipColor};
  border-radius: ${({ theme: { sizes } }) => sizes.fontSizes.xxl}px;
  padding: ${({ theme: { sizes } }) => sizes.chipGapSize.sm}px
    ${({ theme: { sizes } }) => sizes.chipGapSize.md}px;
  margin: ${({ theme: { sizes } }) => sizes.chipGapSize.xs}px;
  ${({ variant }) => {
    switch (variant) {
      case 'small':
        return css`
          font-size: ${({ theme: { sizes } }) => sizes.fontSizes.xs}px;
        `;
      case 'large':
        return css`
          font-size: ${({ theme: { sizes } }) => sizes.fontSizes.xs}px;
        `;
      default:
        return css`
          font-size: ${({ theme: { sizes } }) => sizes.fontSizes.xs}px;
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
