import styled, { css } from 'styled-components';

import { ISelectArrowProps } from './types';

export const CustomSelectWrapper = styled.div`
  position: relative;
  background-color: ${({ theme: { colors } }) => colors.whiteColor};
  padding: ${({ theme: { sizes } }) => sizes.paddingSize.sm}px
    ${({ theme: { sizes } }) =>
      sizes.paddingSize.sm && 2 * sizes.paddingSize.sm}px;
  color: ${({ theme: { colors } }) => colors.textColorDark};
  font-size: ${({ theme: { sizes } }) => sizes.fontSizes.md}px;
  box-sizing: border-box;
  min-width: ${({ theme: { sizes } }) => sizes.selectWidthSizes.md}px;
  width: 90%;
  border-radius: ${({ theme: { sizes } }) => sizes.borderRadiuses.md}px;
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.lightHoverColor};
    cursor: pointer;
  }
  & > * {
    pointer-events: none;
  }
`;
export const SelectedVariantWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SelectedVariantText = styled.span``;
export const SelectArrow = styled.div<ISelectArrowProps>`
  & > svg > path {
    stroke: ${({ theme: { colors } }) => colors.textColorDark};
  }
  ${({ isActive }) =>
    isActive &&
    css`
      transform: rotateX(180deg);
    `}
`;
