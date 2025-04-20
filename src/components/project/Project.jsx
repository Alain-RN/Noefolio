import { useState } from "react";
import "./project.css"

const projects = [
  {
    id: 1,
    title: "Mission Apollo",
    tech: "React + Node.js",
    status: "Mission accomplie",
    description: "Un tableau de bord interactif pour suivre les satellites en orbite.",
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

  const [selected, setSelected] = useState(projects[0]);

  return (
    <div className="e">
      <div className="dashboard">
      <div className="sidebar">
        <h2>Cockpit</h2>
        {projects.map((proj) => (
          <button
            key={proj.id}
            className={`project-btn ${selected.id === proj.id ? "active" : ""}`}
            onClick={() => setSelected(proj)}
          >
            {proj.title}
          </button>
        ))}
      </div>
      <div className="project-details">
        <h2>{selected.title}</h2>
        <p><strong>Technologie :</strong> {selected.tech}</p>
        <p><strong>Statut de la mission :</strong> {selected.status}</p>
        <p><strong>Briefing :</strong> {selected.description}</p>
      </div>
    </div>
    </div>
  );
}
