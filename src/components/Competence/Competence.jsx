import "./Competence.css"
import { skills } from "./Data_skills"
import CardSkills from "./CardSkills"

export default function Competence() {
  return (
    <div className="competence-container">
        <h2 className="competence-title">Competence</h2>
        <div className="langage">
            <h2>Langage de programation</h2>
            <div className="langage-slide" id="langage-slide">
                {
                    skills.map((skill) => (
                        <CardSkills key={skill.id} nom={skill.name} image={skill.image} level={skill.level} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}
