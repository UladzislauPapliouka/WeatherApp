import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NormalizedPlaceDataType } from '@typing/storeTypes/placeStateType';

const initialState: Array<NormalizedPlaceDataType> = [];

const SearchAutocompleteSlice = createSlice({
  name: 'Autocomplete',
  initialState,
  reducers: {
    setVariant: (
      state,
      action: PayloadAction<Array<NormalizedPlaceDataType>>,
    ) => action.payload,
  },
});

export default SearchAutocompleteSlice.reducer;
const AutocompleteActions = SearchAutocompleteSlice.actions;

export { AutocompleteActions };
