import { StyledDegreesSpanPropsType } from '@Types/propsTypes/degreeSpanTypes';
import styled from 'styled-components';

const StyledDegreeSpan = styled.span<StyledDegreesSpanPropsType>`
  font-size: ${({ size, theme: { sizes } }) => {
    switch (size) {
      case 'large':
        return sizes.fontSizes.xl;
      case 'small':
        return sizes.fontSizes.md;
      default:
        return sizes.fontSizes.lg;
    }
  }}px;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight['200']}};
`;
export default StyledDegreeSpan;
