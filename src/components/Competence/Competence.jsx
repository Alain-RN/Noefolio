import "./Competence.css"
import { skills } from "./Data_skills"
import CardSkills from "./CardSkills"
import { useRef } from "react";


export default function Competence() {

  const sliderRef = useRef(null);

  const handleNext = () => {
    sliderRef.current.scrollBy({ left: 10, behavior: "smooth" });
  };

  const handlePrev = () => {
    sliderRef.current.scrollBy({ left: -10, behavior: "smooth" });
  };

  return (
    <div className="competence-container">
      <h2 className="competence-title">Competence</h2>
      <div className="langage" >
        <h2>Langage de programation</h2>
        <div className="langage-container">
          <input type="button" value="<" onClick={handlePrev}/>
          <div className="langage-slider" id="langage-slider" ref={sliderRef}>
            {
              skills.map((skill, index) => (
                <CardSkills key={index} nom={skill.name} image={skill.image} level={skill.level} />
              ))
            }
          </div>
          <input type="button" value=">" onClick={handleNext}/>
        </div>
      </div>
    </div>
  )
}
