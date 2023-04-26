import styled from 'styled-components';

const ErrorMessage = styled.span`
  font-size: ${({ theme: { sizes } }) => sizes.fontSizes.xxl}px;
`;

const ErrorComponentStack = styled.span`
  font-size: ${({ theme: { sizes } }) => sizes.fontSizes.xl}px;
`;

const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${({ theme: { sizes } }) => sizes.gap.xxl}px;
`;

export { ErrorComponentStack, ErrorMessage, ErrorWrapper };
