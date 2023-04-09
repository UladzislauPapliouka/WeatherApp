import { SelectArrowPropsType } from '@Types/propsTypes/customSelectTypes';
import styled, { css } from 'styled-components';

export const CustomSelectWrapper = styled.div`
  background-color: ${({ theme: { colors } }) => colors.selectBackground};
  padding: ${({ theme: { sizes } }) => sizes.fontSizes.sm}px;
  color: ${({ theme: { colors } }) => colors.textColor};
  font-size: ${({ theme: { sizes } }) => sizes.fontSizes.md}px;
  position: relative;
  min-width: ${({ theme: { sizes } }) => sizes.selectWidthSizes.md}px;
  border-radius: ${({ theme: { sizes } }) => sizes.fontSizes.xxl}px;
`;
export const SelectedVariantWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SelectedVariantText = styled.span``;
export const SelectArrow = styled.div<SelectArrowPropsType>`
  border-left: ${({ theme: { sizes } }) => sizes.selectArrowSizes.md}px solid
    transparent;
  border-right: ${({ theme: { sizes } }) => sizes.selectArrowSizes.md}px solid
    transparent;
  border-top: ${({ theme: { sizes } }) => sizes.selectArrowSizes.md}px solid
    #353e4d;
  ${({ isActive }) =>
    isActive &&
    css`
      transform: rotateX(180deg);
    `}
`;
