import { configureStore } from '@reduxjs/toolkit';

import colorReducer from './colorSlice';
import projectReducer from './projectSlice';
import screenReducer from './screenSlice';


export default configureStore({
  reducer: {
    color: colorReducer,
    project: projectReducer,
    offsetY: screenReducer
  },
});