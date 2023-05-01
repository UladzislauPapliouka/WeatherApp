import styled from 'styled-components';

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
