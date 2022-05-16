import React, {useState} from 'react';

import { useSelector } from 'react-redux';

import questionBox from '../../assets/questionBox.jpg';

import './question-box.styles.scss'

export default function QuestionBox({ children, firstQuestion, secondQuestion, thirdQuestion }) {
  const appSwitch = useSelector((state) => state.value.appSwitch)

  const [boxSelected, setBoxSelected] = useState(false)
  
  const boxClick = () => {
    setBoxSelected(!boxSelected)
  }

  return (
    <div className={
      `${firstQuestion && 'first-question'}
    ${secondQuestion && 'second-question'} 
    ${thirdQuestion && 'third-question'} 
    ${appSwitch === true ? 'question-box-on' : 'question-box'}
    `}
    onClick={()=> {boxClick()}}
    >
      {boxSelected === false || appSwitch === false ?
        <img
        className='question-box-image'
        src={questionBox}
        alt='super mario question box'
      />
      :
        <p>{children}</p>
    }
    </div>
  )
}
