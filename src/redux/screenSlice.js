import { createSlice } from '@reduxjs/toolkit';

//this slice sets the state of the screens Y axis
export const screenSlice = createSlice({
  name: 'screenYPlacement',
  initialState: {
    offsetY: 0,
  },
  reducers: {
    setoffsetY: (state, action) => {
      return {
        ...state,
        offsetY : action.payload
      }
    }
  }
});

export const { setoffsetY } = screenSlice.actions
export default screenSlice.reducer 