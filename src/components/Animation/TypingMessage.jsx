/* eslint-disable react/prop-types */
import { useRef, useState } from "react"
import "./TypingMessage.css"
import { useEffect } from "react"

export default function TypingMessage({ messages = [] }) {

    const textRef = useRef(null);
    const [messageTab] = useState(messages);

    useEffect(()=> {

        let index = 0;

        const typingText = ()=> {
            if( index < messageTab.length ) {
                textRef.current.textContent = messageTab[ index ];
                textRef.current.style.animation = "none"
                textRef.current.offsetHeight
                textRef.current.style.animation = `typing 3s steps(${ messageTab[index].length }) forwards`
                setTimeout(() => {
                    index++;
                    typingText();
                }, 4000);
            }
        }

        typingText()

    }, [messageTab]);

  return (
    <div className="Typing-container">
        <div className="terminal-text" ref={textRef}></div>
    </div>
  )
}
