import styled, { keyframes } from 'styled-components';

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const rotateAnimation = keyframes`
from {
  transform: rotate(0deg);
}
  to{
    transform: rotate(360deg);
  }
`;
export const Spinner = styled.div`
  max-height: 100px;
  height: 100%;
  min-height: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border-left: 2px solid red;
  border-top: 2px solid red;
  border-bottom: 2px solid transparent;
  border-right: 2px solid transparent;
  animation: 0.7s ease-in-out ${rotateAnimation} infinite;
`;