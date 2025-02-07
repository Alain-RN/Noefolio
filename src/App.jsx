import './App.css'
import Bg_etoile from './components/bg_etoile/Bg_etoile'
import NavBar from './components/header/NavBar'
import Banniere from './components/header/Banniere'
import Fusee from './components/Animation/Fusee'
import Presentation from './components/presentation/Presentation'

function App() {

  return (
    <div className='app'>
      <NavBar></NavBar>
      <Banniere></Banniere>
      <Fusee></Fusee>
      <NavBar></NavBar>
      <Banniere></Banniere>
      <Fusee></Fusee>      <NavBar></NavBar>
      <Banniere></Banniere>
      
      <Presentation></Presentation>
      <Bg_etoile></Bg_etoile>
    </div>
  )
}

export default App
