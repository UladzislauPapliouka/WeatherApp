import { ChipWrapperPropsTypes } from '@Types/propsTypes/chipTypes';
import styled, { css } from 'styled-components';

export const ChipWrapper = styled.div<ChipWrapperPropsTypes>`
  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 3.125em;
  max-width: 6.25em;
  min-height: 2em;
  background-color: #353e4d;
  border-radius: 1em;
  padding: 0.2em 0.4em;
  margin: 0.1em;
  ${({ variant }) => {
    switch (variant) {
      case 'small':
        return css`
          font-size: 10px;
        `;
      case 'large':
        return css`
          font-size: 18px;
        `;
      default:
        return css`
          font-size: 16px;
        `;
    }
  }}
`;
export const ChipText = styled.span`
  width: 100%;
  display: inline-block;
  font-size: 0.8125em;
  font-weight: bold;
  color: #f1eaea;
  text-transform: uppercase;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
`;
