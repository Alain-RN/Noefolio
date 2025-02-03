import './App.css'
import Bg_etoile from './components/bg_etoile/Bg_etoile'
import NavBar from './components/header/NavBar'
import Banniere from './components/header/Banniere'

function App() {

  return (
    <div>
      <NavBar></NavBar>
      <Banniere></Banniere>
      <Bg_etoile></Bg_etoile>
    </div>
  )
}

export default App
