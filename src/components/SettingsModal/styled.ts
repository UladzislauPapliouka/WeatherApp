import styled, { css } from 'styled-components';

export const SettingsModalWrapper = styled.div`
  position: relative;
  width: 500px;
  height: fit-content;
  border-radius: 8px;
  background-color: #f1eaea;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2em 2em 2em;
  gap: 1em;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const TitleMixin = css`
  color: #353e4d;
  margin-bottom: 0.01em;
  margin-top: 0.2em;
`;
export const Title = styled.h2`
  ${TitleMixin}
`;
export const SubTitle = styled.h4`
  ${TitleMixin}
`;
