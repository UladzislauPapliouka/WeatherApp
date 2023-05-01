import styled from 'styled-components';

export const GoogleEventsWrapper = styled.div`
  max-width: ${({ theme: { sizes } }) => sizes.GoogleEventWrapperWidth.md}px;
  max-height: ${({ theme: { sizes } }) => sizes.GoogleEventWrapperHeight.md}px;
  overflow: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const NoEventsText = styled.span``;
export const GoogleEventWrapper = styled.div`
  display: block;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight['500']};
  max-width: ${({ theme: { sizes } }) => sizes.googleEventWidth.md};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
`;
export const GoogleEventTitle = styled.span`
  margin-left: ${({ theme: { sizes } }) => sizes.googleEvenMargin.md}px;
`;
