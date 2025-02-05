/* eslint-disable react/prop-types */
import {useEffect, useRef } from "react";
import "./AnimationH1.css"

export const AnimationH1 = ({ text, delay = 110 }) => {

  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    let index = 0;
    let currentText = "";
    
    const animateText = () => {
      if (index < text.length) {
        currentText += text[index];
        ref.current.innerHTML = `${currentText}<span ${(index + 1 == text.length)?"class='curseur'":""}>_<span/>`;
        index++;index < text.length
        setTimeout(animateText, delay);
      }
    };
    animateText();
  }, [text, delay]);

  return( <div>
    <h1 ref={ref}></h1>
  </div>);

}