import "./NavBar.css"

export default function NavBar() {
  return (
    <div className="nav-container">
        <div className='navbar'>
          <div className="logo">
            <img src="logo.png" alt="Logo-noefolio" />
            <span>NOEFOLIO</span>
          </div>
          <div className="profil">
            <img src="/astro-profile.png" alt="" />
            {/* <a href="https://www.freepik.com/free-vector/cute-astronaut-flying-cartoon-vector-icon-illustration-science-technology-icon-isolated-flat-vector_233066663.htm#fromView=keyword&page=34&position=0&uuid=d7d9f169-3b77-4509-8e42-b66c5d3cfe24&query=Astronaut+Line+Art">Image by catalyststuff on Freepik</a> */}
          </div>
        </div>
    </div>

  )
}
