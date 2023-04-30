import styled, { css } from 'styled-components';

export const SettingsModalWrapper = styled.div`
  position: relative;
  width: ${({ theme: { sizes } }) => sizes.settingSizes.md}px;
  height: fit-content;
  border-radius: ${({ theme: { sizes } }) => sizes.borderRadiuses.md}px;
  background-color: ${({ theme: { colors } }) => colors.textColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 ${({ theme: { sizes } }) => sizes.settingPadding.md}px
    ${({ theme: { sizes } }) => sizes.settingPadding.md}px
    ${({ theme: { sizes } }) => sizes.settingPadding.md}px;
  gap: 1em;
  @media screen and (max-width: ${({ theme: { sizes } }) =>
      sizes.displayBreakpoints.md}px) {
    width: 80%;
  }
  &:hover {
    cursor: default;
  }
`;

const TitleMixin = css`
  color: ${({ theme: { colors } }) => colors.primaryDarkBlue};
  margin: 0;
`;

export const Title = styled.h2`
  ${TitleMixin}
`;
export const SubTitle = styled.h4`
  ${TitleMixin}
`;
