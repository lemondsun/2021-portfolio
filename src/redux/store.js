import { configureStore } from '@reduxjs/toolkit';
import colorReducer from './colorSlice';
import projectReducer from './projectSlice'

export default configureStore({
  reducer: {
    color: colorReducer,
    project: projectReducer
  },
 
});