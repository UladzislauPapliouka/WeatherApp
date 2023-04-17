import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlaceInitialStateType } from '@Types/storeTypes/placeStateType';

const initialState: Array<PlaceInitialStateType> = [];
const SearchAutocompleteSlice = createSlice({
  name: 'Autocomplete',
  initialState,
  reducers: {
    setVariant: (state, action: PayloadAction<Array<PlaceInitialStateType>>) =>
      action.payload,
  },
});
export default SearchAutocompleteSlice.reducer;
const AutocompleteActions = SearchAutocompleteSlice.actions;
export { AutocompleteActions };
