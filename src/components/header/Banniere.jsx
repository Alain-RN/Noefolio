import "./Banniere.css";
import { AnimationH1 } from "../Animation/AnimationH1";

export default function Banniere() {
  return (
    <div className="banniere">
      <div className="accroche">
        <AnimationH1 text="Prêt à explorer l'infini du développement web ?"></AnimationH1>
        {/* <h1>Prêt à explorer l'infini du développement web ?</h1> */}
        <p>
          L'univers du code est vaste et rempli de possibilités infinies. À
          travers chaque projet, je m’efforce de repousser les limites du
          développement web pour construire des expériences uniques. Explorez
          mes créations et embarquez pour un voyage où la technologie et
          l’imagination n’ont aucune frontière.
        </p>
        <a href="#projects">Explorer mes projets</a>
      </div>
      <div className="cercel-container">
        <div className="cercle">

        </div>
      </div>
    </div>
  );
}
