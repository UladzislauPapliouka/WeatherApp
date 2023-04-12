import styled from 'styled-components';

export const SelectListWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  top: calc(100% + 4px);
  left: 0;
  display: flex;
  flex-direction: column;
`;
export const SelectOption = styled.span`
  width: 100%;
  pointer-events: all;
  box-sizing: border-box;
  text-align: left;
  padding: ${({ theme: { sizes } }) => sizes.paddingSize.sm}px
    ${({ theme: { sizes } }) =>
      sizes.paddingSize.sm && 2 * sizes.paddingSize.sm}px;
  background-color: ${({ theme: { colors } }) => colors.whiteColor};
  z-index: 1;
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.lightHoverColor};
  }
  &:first-child {
    border-radius: ${({ theme: { sizes } }) => sizes.borderRadiuses.md}px
      ${({ theme: { sizes } }) => sizes.borderRadiuses.md}px 0 0;
  }
  &:last-child {
    border-radius: 0 0 ${({ theme: { sizes } }) => sizes.borderRadiuses.md}px
      ${({ theme: { sizes } }) => sizes.borderRadiuses.md}px;
  }
`;
