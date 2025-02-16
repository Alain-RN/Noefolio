import "./Competence.css"
import { skills } from "./Data_skills"
import CardSkills from "./CardSkills"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { useEffect, useRef } from "react"



export default function Competence() {

  const refSlider = useRef(null);

  useEffect(() => {
    if(!refSlider.current) {
      alert("aaaaa")
    }
  }, [])

  return (
    <div className="e skill-container">
      <h2 className="skill-title">Competence</h2>
      <div className="skill" >
        <h2>Langage de programation</h2>
        <div className="skill-slider-container">
          <BiChevronLeft className="b l" size={28}/>
          <BiChevronRight className="b r" size={28}/>
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
