import "./Diagram.css"
import Bar from "./Bar"
import { skills } from "./Data_skills"

function Diagram() {

  return (
    <div className="diagram" style={{gridTemplateColumns: `repeat(${skills.length}, 1fr)`}}>
        {
            skills.map((skill, index) => (
                <Bar className={``} key={index} color={skill.color} level={skill.level} name={skill.name}/>
            ))
        }
    </div>
  )
}

export default Diagram