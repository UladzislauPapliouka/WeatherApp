import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userActions } from '@store/Reducers/UserReducer';
import { GoogleEventsInitialStateType } from '@Types/storeTypes/googleStateTypes';

const initialState: GoogleEventsInitialStateType[] = [];
const GoogleEventsSlice = createSlice({
  name: 'GOOGLE_EVENTS',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<GoogleEventsInitialStateType[]>) =>
      action.payload,
  },
  extraReducers: {
    [userActions.resetUser.type]: () => initialState,
  },
});

const GoogleEventsReducer = GoogleEventsSlice.reducer;
const GoogleEventsActions = GoogleEventsSlice.actions;

export { GoogleEventsActions, GoogleEventsReducer };
