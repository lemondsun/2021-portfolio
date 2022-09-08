import React, { useState, useEffect } from 'react';
import './scrolling-headline.styles.scss'
export default function ScrollingHeadline() {
  const [currentHighLightIndex, setCurrentHighLightIndex] = useState(0);
  const phraseList = ['FullStack Developer', 'FrontEnd Developer', 'React Developer'];
 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHighLightIndex(
        currentHighLightIndex === phraseList.length - 1
          ? 0
          : currentHighLightIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [currentHighLightIndex, phraseList.length]);

  return (
    <div className='scrolling-headline-window'>
      <div className="mask">
        <span>
          {phraseList[currentHighLightIndex]}
        </span>
      </div>
    </div>
  );
}
