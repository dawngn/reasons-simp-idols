import './style/Navbar.css'
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <>

     <nav className="navbar">
        <div className="navbar-container">
            <ul>
                <li className='section'>
                  <Link to="top" spy={true} smooth={true} offset={-100} duration={500}>Top</Link>
                </li>
                <li className='section'><Link to="main-about" spy={true} smooth={true} offset={-100} duration={500}>About</Link></li>
                <li className='section'><Link to="gallery" spy={true} smooth={true} offset={-150} duration={500}>Gallery</Link></li>

            </ul>
        </div>  
     </nav>

    </>
  )
}

export default Navbar