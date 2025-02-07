import { useEffect } from "react";
import "./Presentation.css";
import Fusee from "../Animation/Fusee";
import { messages, Capitaine } from "./Presentation_data";
export default function Presentation() {

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
        document.body.style.overflow = 'auto';
    }, 15000);

    return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'auto';
    };
  }, []);


  return <div className="presentation-container">
      <div className="terminal-text">
        Terminal sdsdg sddgs...
      </div>
      <div className="greeting text1">Bonjour, ici le Capitaine en mission.</div>
      <div className="presentation-text text2">Je suis {Capitaine.prenom}, Développeur Web Fullstack et Développeur Mobile.</div>
      <Fusee></Fusee>
  </div>;
}
