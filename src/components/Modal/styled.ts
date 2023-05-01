import styled from 'styled-components';

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme: { colors } }) => `${colors.primaryDarkBlue}c7`};
  &:empty {
    display: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

export default ModalWrapper;
