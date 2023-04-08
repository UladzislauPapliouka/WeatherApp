import styled from 'styled-components';

import { DateTextVariants } from '../../types/propsTypes/dateBlockTypes';

export const DateBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const DateText = styled.span<DateTextVariants>`
  font-size: ${({ variant = 'default' }) => {
    switch (variant) {
      case 'large':
        return 3;
      case 'small':
        return 1;
      default:
        return 1.6;
    }
  }}em;
`;
export const TimeWrapper = styled.div``;
