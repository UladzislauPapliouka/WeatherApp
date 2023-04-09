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
