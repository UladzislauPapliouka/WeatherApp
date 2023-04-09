import { StyledDegreesSpanPropsType } from '@Types/propsTypes/degreeSpanTypes';
import styled from 'styled-components';

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
