import styled from 'styled-components';

import { IDateTextProps } from './types';

export const DateBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const DateText = styled.span<IDateTextProps>`
  font-size: ${({ variant = 'default', theme: { sizes } }) => {
    switch (variant) {
      case 'large':
        return sizes.fontSizes.xxl;
      case 'small':
        return sizes.fontSizes.sm;
      default:
        return sizes.fontSizes.lg;
    }
  }}px;
`;
export const TimeWrapper = styled.div``;
