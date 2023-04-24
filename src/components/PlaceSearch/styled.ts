import styled from 'styled-components';

export const PlaceSearchWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: ${({ theme: { sizes } }) => sizes.searchHeight.md}px;
`;
export const SearchInput = styled.input`
  width: 100%;
  border-radius: ${({ theme: { sizes } }) => sizes.borderRadiuses.md}px 0 0
    ${({ theme: { sizes } }) => sizes.borderRadiuses.md}px;
  padding: 0 0 0 ${({ theme: { sizes } }) => sizes.searchPadding.md}px;
  border: none;
  outline: none;
  &:focus {
    border: ${({ theme: { sizes } }) => sizes.borderWidth.xs}px
      ${({ theme: { colors } }) => colors.borderColor} solid;
    border-right: none;
    & + button {
      border: ${({ theme: { sizes } }) => sizes.borderWidth.xs}px
        ${({ theme: { colors } }) => colors.borderColor} solid;
      border-left: none;
    }
  }
`;
export const SearchButton = styled.button`
  border-radius: 0 ${({ theme: { sizes } }) => sizes.borderRadiuses.md}px
    ${({ theme: { sizes } }) => sizes.borderRadiuses.md}px 0;
  background-color: ${({ theme: { colors } }) => colors.primaryDarkBlue};
  color: ${({ theme: { colors } }) => colors.textColor};
  font-size: ${({ theme: { sizes } }) => sizes.fontSizes.md}px;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight['500']};
  border: none;
  outline: none;
  cursor: pointer;
`;
