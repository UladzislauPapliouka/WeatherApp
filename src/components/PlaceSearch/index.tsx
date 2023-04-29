import React, {
  KeyboardEvent,
  SyntheticEvent,
  useCallback,
  useState,
} from 'react';
import SelectItemsList from '@components/SelectItemsList';
import { PlaceActions } from '@store/reducers';
import {
  findPlaceByNameOpenWeatherAC,
  getAutocompleteAC,
} from '@store/sagas/openWeatherSaga';
import {
  findPlaceWeatherByNameAC,
  getAutocompleteWeatherAC,
} from '@store/sagas/weatherSaga';
import { APIVariants } from '@typing/storeTypes/appStateTypes';
import { NormalizedPlaceDataType } from '@typing/storeTypes/placeStateType';

import { useAppDispatch, useAppSelector } from '@/store';

import { PlaceSearchWrapper, SearchButton, SearchInput } from './styled';

export default function PlaceSearch({
  preferredAPI,
  hourly,
}: {
  preferredAPI: APIVariants;
  hourly: boolean;
}) {
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

  const handleAutocomplete = useCallback(
    (sel: NormalizedPlaceDataType) => {
      setField(sel.city);
      dispatch(PlaceActions.setPlace(sel));
      setIsAutocomplete(false);
    },
    [dispatch],
  );

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
}
