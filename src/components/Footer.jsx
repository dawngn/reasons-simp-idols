import '../components/style/Footer.css'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'

function Footer() {
  return ( 
    <>
    
    
      <div className="slide-show">
        <div className="outwrap">
        <ul className="wrap">
          <li className="slide">
            <img className='img-slide' src={logo1} alt="logo1" />
           </li> 
           <li className="slide">
            <img className='img-slide' src={logo2} alt="logo2" />
           </li>
           <li className="slide">
            <img className='img-slide' src={logo3} alt="logo3" />
           </li>
           <li className="slide">
            <img className='img-slide' src={logo4} alt="logo4" />
           </li>
           <li className="slide">
            <img className='img-slide' src={logo5} alt="logo5" />
           </li>
        </ul>
        <ul className="wrap">
          <li className="slide">
            <img className='img-slide' src={logo1} alt="logo1" />
           </li> 
           <li className="slide">
            <img className='img-slide' src={logo2} alt="logo2" />
           </li>
           <li className="slide">
            <img className='img-slide' src={logo3} alt="logo3" />
           </li>
           <li className="slide">
            <img className='img-slide' src={logo4} alt="logo4" />
           </li>
           <li className="slide">
            <img className='img-slide' src={logo5} alt="logo5" />
           </li>
        </ul>
        </div>
      </div>
      <footer >
      <h3 className='end'>Thank for coming</h3>
      <p>© Dawn</p>
    </footer>

    </>
   );
}

export default Footer;