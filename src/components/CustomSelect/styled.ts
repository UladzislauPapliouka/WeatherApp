import styled, { css } from 'styled-components';

import { SelectArrowPropsType } from '../../types/propsTypes/customSelectTypes';

export const CustomSelectWrapper = styled.div`
  background-color: rgba(53, 62, 77, 0.7);
  padding: 0.5em 0.5em 0.5em 0.7em;
  color: #f1eaea;
  font-size: 20px;
  position: relative;
  width: 100%;
  min-width: 200px;
  border-radius: 2em;
`;
export const SelectedVariantWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SelectedVariantText = styled.span``;
export const SelectArrow = styled.div<SelectArrowPropsType>`
  width: 0;
  height: 0;
  border-left: 0.6em solid transparent;
  border-right: 0.6em solid transparent;
  border-top: 0.6em solid #353e4d;
  line-height: 0;
  float: left;
  ${({ isActive }) =>
    isActive &&
    css`
      transform: rotateX(180deg);
    `}
`;
