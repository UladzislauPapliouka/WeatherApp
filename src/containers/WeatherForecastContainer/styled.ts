import styled from 'styled-components';

const ForecastWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.selectBackground};
  color: ${({ theme: { colors } }) => colors.textColor};
  @media screen and (max-width: ${({ theme: { sizes } }) =>
      sizes.displayBreakpoints.md}px) {
    flex-direction: column;
    justify-content: flex-start;
    overflow-y: auto;
    max-height: ${({ theme: { sizes } }) => sizes.ForeCastMaxHeight.md}px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
export default ForecastWrapper;
