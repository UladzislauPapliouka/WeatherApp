import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userActions } from '@store/Reducers/UserReducer';
import { GoogleEventStoreType } from '@Types/storeTypes/googleStateTypes';

const initialState: GoogleEventStoreType[] = [];
const GoogleEventsSlice = createSlice({
  name: 'GOOGLE_EVENTS',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<GoogleEventStoreType[]>) =>
      action.payload,
  },
  extraReducers: {
    [userActions.resetUser.type]: () => initialState,
  },
});

const GoogleEventsReducer = GoogleEventsSlice.reducer;
const GoogleEventsActions = GoogleEventsSlice.actions;

export { GoogleEventsActions, GoogleEventsReducer };
