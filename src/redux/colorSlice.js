import { createSlice } from '@reduxjs/toolkit';

export const colorSlice = createSlice({
  name: 'highlightColor',
  initialState: {
    color: 'black',
  },
  reducers: {
    updateColor: (state, action) => {
      return {
        ...state,
        color: action.payload
      }
    }
  }
});

export const { updateColor } = colorSlice.actions
export default colorSlice.reducer