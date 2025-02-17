import "./Competence.css"
import { skills } from "./Data_skills"
import CardSkills from "./CardSkills"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { useRef } from "react"



export default function Competence() {

  const refSlider = useRef(null);
  const by = 144;

  const handleButtonLeft = ()=> {
    refSlider.current.scrollBy({ 
      left : -by,
      behavior : "smooth"
    } )
  }

  const handleButtonRight = ()=> {
    refSlider.current.scrollBy({ 
      left : by,
      behavior : "smooth"
    } )
  }


  return (
    <div className="e skill-container">
      {/* <h2 className="skill-title">Competence</h2> */}
      <div className="skill" >
        <h2>Outils et Langage</h2>
        <div className="skill-slider-container">
          <BiChevronLeft className="b l" size={28} onClick={handleButtonLeft}/>
          <BiChevronRight className="b r" size={28} onClick={handleButtonRight}/>
          <div className="skill-slider" id="skill-slider" ref={refSlider}>
            {
              skills.map((skill, index) => (
                <CardSkills key={index} nom={skill.name} image={skill.image} level={skill.level} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
