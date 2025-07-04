import './App.css'
import Bg_etoile from './components/bg_etoile/Bg_etoile'
import NavBar from './components/header/NavBar'
import Banniere from './components/header/Banniere'
// import Fusee from './components/Animation/Fusee'
import Presentation from './components/presentation/Presentation.jsx'
import Competence from './components/Competence/Competence.jsx'
import About from './components/About/About.jsx'
import Project from './components/project/Project.jsx'
import { useEffect, useState } from 'react'

function App() {
  const [isTimeElapsed, setIsTimeElapsed] = useState(false);

  const timeElapsed = ()=> {
    setIsTimeElapsed( e => !e )
  }
  useEffect(()=> {
    const timer = setTimeout(() => {
      timeElapsed()
    }, 18000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className='app'>
      {
        <div className="element-page" style={{opacity: !isTimeElapsed?"0":"1"}}>
          <NavBar></NavBar>
          <Banniere isTimeElapsed = {isTimeElapsed}></Banniere>
          <About></About>
          <Competence></Competence>
          <Project></Project>
          <Bg_etoile></Bg_etoile>
        </div>
      }

      {!isTimeElapsed && <Presentation></Presentation>} 
    </div>
  )
}

export default App
