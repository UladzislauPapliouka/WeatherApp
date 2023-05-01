import React, {
  KeyboardEvent,
  SyntheticEvent,
  useCallback,
  useState,
} from 'react';

import { useAppDispatch, useAppSelector } from '@/store';
import SelectItemsList from '@components/SelectItemsList';
import {
  findPlaceByNameOpenWeatherAC,
  findPlaceWeatherByNameAC,
  getAutocompleteAC,
  getAutocompleteWeatherAC,
} from '@store/actionCreators';
import { PlaceActions } from '@store/reducers';
import { APIVariants } from '@typing/storeTypes/appStateTypes';
import { NormalizedPlaceDataType } from '@typing/storeTypes/placeStateType';

import { PlaceSearchWrapper, SearchButton, SearchInput } from './styled';

const PlaceSearch = ({
  preferredAPI,
  hourly,
  chooseCallback,
}: {
  preferredAPI: APIVariants;
  hourly: boolean;
  chooseCallback?: () => void;
}) => {
  const dispatch = useAppDispatch();

  const [isAutoComplete, setIsAutocomplete] = useState(false);

  const autoCompleteVariants = useAppSelector((state) =>
    state.autocompleteVariants.map((opt) => ({
      ...opt,
      toString() {
        return `${opt.city},${opt.country}`;
      },
    })),
  );

  const initialField = useAppSelector((state) => state.placeInfo.city);

  const [field, setField] = useState(initialField);

  const onChangeHandler = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsAutocomplete(true);
    setField(e.currentTarget.value);
    if (!e.currentTarget.value) return;

    if (preferredAPI === APIVariants.openWeatherAPI) {
      dispatch(getAutocompleteAC(e.currentTarget.value));
    } else {
      dispatch(getAutocompleteWeatherAC(e.currentTarget.value));
    }
  };

  const handleClick = () => {
    chooseCallback && chooseCallback();
    if (preferredAPI === APIVariants.openWeatherAPI) {
      dispatch(findPlaceByNameOpenWeatherAC(field, hourly));
    } else {
      dispatch(findPlaceWeatherByNameAC(field, hourly));
    }
  };

  const handleInputBlur = () => {
    setTimeout(() => setIsAutocomplete(false), 100);
  };

  const handleEnterClick = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      handleClick();
    }
  };

  const handleAutocomplete = useCallback((sel: NormalizedPlaceDataType) => {
    chooseCallback && chooseCallback();
    setField(sel.city);
    dispatch(PlaceActions.setPlace(sel));
    setIsAutocomplete(false);
  }, []);

  return (
    <PlaceSearchWrapper>
      <SearchInput
        value={field}
        onBlur={handleInputBlur}
        onKeyDown={handleEnterClick}
        onChange={onChangeHandler}
      />
      <SearchButton onClick={handleClick}>Search</SearchButton>
      {isAutoComplete && !!autoCompleteVariants.length && (
        <SelectItemsList
          handleChangeSelected={handleAutocomplete}
          options={autoCompleteVariants}
        />
      )}
    </PlaceSearchWrapper>
  );
};

export default PlaceSearch;
