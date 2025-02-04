/* eslint-disable react/prop-types */
import {useEffect, useRef } from "react";


export const AnimationH1 = ({ text, delay = 110 }) => {

  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    let index = 0;
    let currentText = "";
    
    const animateText = () => {
      if (index < text.length) {
        currentText += text[index];
        ref.current.innerHTML = `${currentText}<span>_<span/>`;
        index++;
        setTimeout(animateText, delay);
      }
    };

    animateText();
  }, [text, delay]);

  return( <div>
    <h1 ref={ref}></h1>
  </div>);

}