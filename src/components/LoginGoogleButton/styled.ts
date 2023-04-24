import styled from 'styled-components';

export const LoginGoogleButtonWrapper = styled.div`
  background-color: #ffffff;
  padding: 0.5em 1em;
  width: fit-content;
  border-radius: ${({ theme: { sizes } }) => sizes.borderRadiuses.md}px;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;

export const GoogleImage = styled.img`
  width: 2em;
  aspect-ratio: 1;
  border-radius: ${({ theme: { sizes } }) => sizes.fontSizes.xxl}px;
`;
export const ButtonText = styled.span`
  font-size: 1.5em;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight['500']};
  color: black;
`;
