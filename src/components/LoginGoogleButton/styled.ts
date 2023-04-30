import styled from 'styled-components';

export const LoginGoogleButtonWrapper = styled.div`
  background-color: ${({ theme: { colors } }) => colors.whiteColor};
  padding: ${({ theme: { sizes } }) => sizes.paddingSize.sm}px
    ${({ theme: { sizes } }) => sizes.paddingSize.md}px;
  width: fit-content;
  border-radius: ${({ theme: { sizes } }) => sizes.borderRadiuses.md}px;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme: { sizes } }) => sizes.paddingSize.md}px;
  cursor: pointer;
`;

export const GoogleImage = styled.img`
  width: ${({ theme: { sizes } }) => sizes.fontSizes.lg}px;
  aspect-ratio: 1;
  border-radius: ${({ theme: { sizes } }) => sizes.fontSizes.xxl}px;
`;
export const ButtonText = styled.span`
  font-size: ${({ theme: { sizes } }) => sizes.fontSizes.lg}px;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight['500']};
  color: ${({ theme: { colors } }) => colors.textColorDark};
`;
