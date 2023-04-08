import styled from 'styled-components';

export const PlaceSearchWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 3em;
`;
export const SearchInput = styled.input`
  width: 100%;
  border-radius: 2em 0 0 2em;
  padding: 0 0 0 1em;
  border: none;
  outline: none;
  &:focus {
    border: 1px black solid;
    border-right: none;
    & + button {
      border: 1px black solid;
      border-left: none;
      padding-top: 0;
      padding-bottom: 0;
    }
  }
`;
export const SearchButton = styled.button`
  border-radius: 0 2em 2em 0;
  background-color: #353e4d;
  color: #f1eaea;
  font-size: 1em;
  font-weight: 500;
  border: none;
  outline: none;
`;
