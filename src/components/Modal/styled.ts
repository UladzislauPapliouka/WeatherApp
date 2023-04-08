import styled from 'styled-components';

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(53, 62, 77, 0.7);
  &:empty {
    display: none;
  }
`;
export default ModalWrapper;
