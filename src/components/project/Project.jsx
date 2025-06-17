import { useState } from "react";
import "./project.css";
import {BiChevronRight} from "react-icons/bi"

const projects = [
  {
    id: 1,
    title: "Mission Apollo",
    tech: "React + Node.js",
    status: "Mission accomplie",
    description:
      "Un tableau de bord interactif pour suivre les satellites en orbite.",
  },
  {
    id: 2,
    title: "Voyager X",
    tech: "Python + Flask",
    status: "Mission en cours",
    description: "Une IA qui pilote un rover virtuel sur Mars.",
  },
  {
    id: 3,
    title: "Nebula Chat",
    tech: "Socket.io + Express",
    status: "En orbite",
    description: "Un chat spatial en temps réel pour les astronautes.",
  },
];
export default function Project() {
  const [openCockpit, setOpenCockpit] = useState(false);
  const [selected, setSelected] = useState(projects[0]);

  const handleCockpit = ()=>{
    setOpenCockpit( v => !v);
  }

  return (
    <div className="e project-container">
      <div className="dashboard">
        <button className="openCockpit" onClick={handleCockpit}><BiChevronRight size={28} className={ openCockpit ? "rot" : "norm" }></BiChevronRight></button>
        <div className={`sidebar-container ${openCockpit ? 'open': ''}`} >
          <div className="sidebar">
            <h2>Cockpit</h2>
            {projects.map((proj) => (
              <button
                key={proj.id}
                className={`project-btn ${selected.id === proj.id ? "active" : ""
                  }`}
                onClick={() => setSelected(proj)}
              >
                {proj.title}
              </button>
            ))}
          </div>
        </div>
        <div className="project-details">
          <h2>{selected.title}</h2>
          <p>
            <strong>Technologie :</strong> {selected.tech}
          </p>
          <p>
            <strong>Statut de la mission :</strong> {selected.status}
          </p>
          <p>
            <strong>Briefing :</strong> {selected.description}
          </p>
        </div>
      </div>
    </div>
  );
}
