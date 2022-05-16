import { configureStore } from '@reduxjs/toolkit';

import colorReducer from './colorSlice';
import projectReducer from './projectSlice';
import screenReducer from './screenSlice';
import triviaReducer from './triviaSlice';
import appSwitchReducer from './appSwitchSlice'

export default configureStore({
  reducer: {
    color: colorReducer,
    project: projectReducer,
    offsetY: screenReducer,
    triviaQuestions: triviaReducer,
    value: appSwitchReducer,
  },
});