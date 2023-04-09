import styled from 'styled-components';

export const PlaceBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;
export const CityName = styled.span`
  font-size: ${({ theme: { sizes } }) => sizes.fontSizes.xl}px;
`;
export const CountryName = styled.span`
  font-size: ${({ theme: { sizes } }) => sizes.fontSizes.md}px;
`;
