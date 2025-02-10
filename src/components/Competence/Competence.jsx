import "./Competence.css"
import { skills } from "./Data_skills"
import CardSkills from "./CardSkills"
import { useRef } from "react";


export default function Competence() {

  const sliderRef = useRef(null);


  const elementWidth = 130;
  const gap = 16;           


  const handleNext = () => {
    if (sliderRef.current) {
      // Calculer la largeur de chaque élément + gap
      const scrollAmount = elementWidth + gap;
      const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

      // Si nous ne sommes pas à la fin, faire défiler
      if (sliderRef.current.scrollLeft < maxScroll) {
        sliderRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",  // Défilement fluide
        });
      }
    }
  };

  // Fonction pour faire défiler vers la gauche
  const handlePrev = () => {
    if (sliderRef.current) {
      // Calculer la largeur de chaque élément + gap
      const scrollAmount = elementWidth + gap;

      // Si nous ne sommes pas au début, faire défiler
      if (sliderRef.current.scrollLeft > 0) {
        sliderRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",  // Défilement fluide
        });
      }
    }
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
