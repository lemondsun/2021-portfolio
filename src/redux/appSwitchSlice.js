import { createSlice } from '@reduxjs/toolkit';

export const appSwitchSlice = createSlice({
  name: 'appSwitch',
  initialState: {
      appSwitch: false
  },
  reducers: {
    setAppSwitch: (state, action) => {
      return {
        ...state,
        appSwitch : action.payload
      }
    }
  }
});

export const { setAppSwitch } = appSwitchSlice.actions
export default appSwitchSlice.reducer 
