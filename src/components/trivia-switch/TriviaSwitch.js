import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {setAppSwitch} from '../../redux/appSwitchSlice'

import './trivia-switch.styles.scss';

import Fab from '@mui/material/Fab';
import ExtensionIcon from '@mui/icons-material/Extension';

export default function TriviaSwitch() {
  const dispatch = useDispatch();
  //this function will use the redux reducer to save the Y axis to redux
  const switchApp = () => dispatch(setAppSwitch(!appSwitch));
  const appSwitch = useSelector((state) => state.value.appSwitch)

  let buttonComment = ()=> appSwitch !== false ? 'Click here to end game' : 'Click here to play trivia game'

  return (
    <div className='trivia-switch-tab'>
      <Fab
        onClick={switchApp}
        variant="extended">
        <ExtensionIcon sx={{ mr: 1 }} />
       {buttonComment()}
  </Fab>
    </div>
  )
}
