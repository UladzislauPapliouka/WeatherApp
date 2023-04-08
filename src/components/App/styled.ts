import styled from 'styled-components';

export const AppWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: #f1eaea;
`;
export const AppBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: grayscale(60%);
`;
export const Container = styled.div`
  border: none;
  filter: grayscale(-60%);
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: calc(90%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
export const SettingButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;
export const WithGoogleEvents = styled.div`
  padding: 4em 4em 0 4em;
  @media screen and (max-width: 768px) {
    padding: 2em 1em 0 1em;
  }
`;
export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2em;
`;
