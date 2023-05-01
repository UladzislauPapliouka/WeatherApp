import styled from 'styled-components';

export const AppWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: ${({ theme: { colors } }) => colors.textColor};
`;
export const AppBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: grayscale(${({ theme: { greyscale } }) => greyscale['60']});
`;
export const Container = styled.div`
  border: none;
  filter: grayscale(${({ theme: { greyscale } }) => -greyscale['60']});
  position: relative;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: ${({ theme: { sizes } }) => sizes.borderRadiuses.md}px;
`;
