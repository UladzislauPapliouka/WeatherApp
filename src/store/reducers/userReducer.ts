import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GoogleUserInfoType } from '@typing/storeTypes/googleStateTypes';

const initialState: GoogleUserInfoType = {
  Ad: '',
  NT: '',
  cu: '',
  hK: '',
  rV: '',
  uT: '',
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ user: GoogleUserInfoType }>) =>
      action.payload.user,
    resetUser: () => initialState,
  },
});

const userActions = userSlice.actions;

export default userSlice.reducer;

export { userActions };
