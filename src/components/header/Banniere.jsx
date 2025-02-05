/* eslint-disable react/no-unknown-property */
import "./Banniere.css";
import { AnimationH1 } from "../Animation/AnimationH1";
import { Canvas } from "@react-three/fiber";
// import Fusee3D from "../Model3D/Fusee3D";
import * as THREE from 'three'

export default function Banniere() {

  const sphere = new THREE.SphereGeometry(2, 32, 32)
  const sphereColor = new THREE.MeshBasicMaterial({
    color: "yellow",
    emissive: new THREE.Color("yellow"),
    emissiveIntensity: 1          
  })

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
        {/* <div className="cercle">

        </div> */}
        <div className="scene">
          <Canvas camera={{ position: [0, 4, 0], near: 0.1, far: 1000 }}>
            <ambientLight intensity={0.1} />
            <directionalLight position={[0, 0, 5]} />
            <mesh geometry={sphere}  material={sphereColor}/>
          </Canvas>
        </div>
      </div>
    </div>
  );
}
