import styled from 'styled-components';

import { StyledDegreesSpanPropsType } from '../../types/propsTypes/degreeSpanTypes';

const StyledDegreeSpan = styled.span<StyledDegreesSpanPropsType>`
  font-size: ${({ size }) => {
    switch (size) {
      case 'large':
        return 44;
      case 'small':
        return 20;
      default:
        return 32;
    }
  }}px;
  font-weight: 200;
`;
export default StyledDegreeSpan;
