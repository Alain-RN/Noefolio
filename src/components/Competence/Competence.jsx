import "./Competence.css"
import { skills } from "./Data_skills"
import CardSkills from "./CardSkills"
import { useEffect, useRef, useState } from "react"

export default function Competence() {

    const containerRef = useRef(null);
    const [centerIndex, setCenterIndex] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        if (!containerRef.current) return;
  
        const container = containerRef.current;
        const scrollX = container.scrollLeft;
        const itemWidth = container.scrollWidth / items.length;
        const center = scrollX + container.offsetWidth / 2;
        const index = Math.round(center / itemWidth);
  
        setCenterIndex(index);
      };
  
      const container = containerRef.current;
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }, []);
  

  return (
    <div className="competence-container">
        <h2 className="competence-title">Competence</h2>
        <div className="langage">
            <h2>Langage de programation</h2>
            <div className="langage-slide" id="langage-slide" ref={containerRef}>
                {
                    skills.map((skill, index) => (
                        <CardSkills key={index} nom={skill.name} image={skill.image} level={skill.level} style={{
                            transform: `scale(${index === centerIndex ? 1.2 : 1})`,
                            transition: "transform 0.3s ease-in-out",
                        }}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
