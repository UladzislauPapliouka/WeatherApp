import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type userType = {
  Ad: string;
  NT: string;
  cu: string;
  hK: string;
  rV: string;
  uT: string;
};
const initialState: userType = {
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
    setUser: (state, action: PayloadAction<{ user: userType }>) =>
      action.payload.user,
    resetUser: () => initialState,
  },
});
const userActions = userSlice.actions;
export default userSlice.reducer;

export { userActions };
