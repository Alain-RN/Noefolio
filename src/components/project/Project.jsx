import { useEffect, useRef } from "react";
import "./project.css"

const projects = [
  { x: 100, y: 150 },
  { x: 300, y: 250 },
  { x: 400, y: 450 },
];

export default function Project() {

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "white";
      ctx.lineWidth = 2;
      ctx.fillStyle = "white";

      // Dessiner les lignes (chaque point est relié au précédent uniquement)
      for (let i = 1; i < projects.length; i++) {
        ctx.beginPath();
        ctx.moveTo(projects[i - 1].x, projects[i - 1].y);
        ctx.lineTo(projects[i].x, projects[i].y);
        ctx.stroke();
      }

      // Dessiner les cercles
      projects.forEach(({ x, y }) => {
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    draw();
  }, []);

  return (
    <div className="e project">
      <h2>Projet</h2>
      <canvas ref={canvasRef} className="canvas-project">
      </canvas>
    </div>
  )
}
