import './App.css'
import Bg_etoile from './components/bg_etoile/Bg_etoile'
import NavBar from './components/header/NavBar'
import Banniere from './components/header/Banniere'
import Fusee from './components/Animation/Fusee'

function App() {

  return (
    <div className='app'>
      <NavBar></NavBar>
      <Banniere></Banniere>
      <Bg_etoile></Bg_etoile>
      <Fusee></Fusee>
    </div>
  )
}

export default App
