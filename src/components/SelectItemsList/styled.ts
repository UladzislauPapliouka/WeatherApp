import styled from 'styled-components';

export const SelectListWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  z-index: 10000;
  background-color: rgba(53, 62, 77, 0.7);
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
`;
export const SelectOption = styled.span`
  width: 100%;
  text-align: left;

  &:hover {
    background-color: rgba(53, 62, 77, 0.9);
    color: #fff;
  }
`;
