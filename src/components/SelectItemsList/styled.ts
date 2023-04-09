import styled from 'styled-components';

export const SelectListWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.selectBackground};
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
`;
export const SelectOption = styled.span`
  width: 100%;
  text-align: left;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.chipColor};
  }
`;
