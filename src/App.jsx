import './App.css'
import Bg_etoile from './components/bg_etoile/Bg_etoile'
import NavBar from './components/header/NavBar'
import Banniere from './components/header/Banniere'
// import Fusee from './components/Animation/Fusee'
import Presentation from './components/presentation/Presentation.jsx'
import Competence from './components/Competence/Competence.jsx'

function App() {

  return (
    <div className='app'>
      <NavBar></NavBar>
      <Banniere></Banniere>
      <Competence></Competence>
      {/* <Presentation></Presentation> */}
      <Bg_etoile></Bg_etoile>
    </div>
  )
}

export default App
