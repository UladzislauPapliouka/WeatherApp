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
export const SettingButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: ${({ theme: { sizes } }) => sizes.gap.xs}px;
  right: ${({ theme: { sizes } }) => sizes.gap.xs}px;
  padding: ${({ theme: { sizes } }) => sizes.paddingSize.xs}px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background: ${({ theme: { colors } }) => colors.lightHoverColor03};
  }
`;
export const WithGoogleEvents = styled.div`
  padding: ${({ theme: { sizes } }) => sizes.gap.lg}px
    ${({ theme: { sizes } }) => sizes.gap.lg}px 0
    ${({ theme: { sizes } }) => sizes.gap.lg}px;
  @media screen and (max-width: ${({ theme: { sizes } }) =>
      sizes.displayBreakpoints.md}px) {
    padding: ${({ theme: { sizes } }) => sizes.gap.xl}px
      ${({ theme: { sizes } }) => sizes.gap.md}px 0
      ${({ theme: { sizes } }) => sizes.gap.md}px;
  }
`;
export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme: { sizes } }) => sizes.gap.sm}px;
`;
