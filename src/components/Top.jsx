import './style/Top.css'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'
import img1 from '/src/assets/img1.png'
import img2 from '/src/assets/img2.png'
import img3 from '/src/assets/img3.png'
import img4 from '/src/assets/img4.png'
  


function Top() {
  return ( 
    <>
      <div className="top" id='top'>
        <div className="top-container">
          <Slide>
            <div className="each-slide">
              <div style={{ 'backgroundImage': `url(${img1})` }}>
              </div>
            </div>
            <div className="each-slide">
              <div style={{ 'backgroundImage': `url(${img2})` }}>
              </div>
            </div>
            <div className="each-slide">
              <div style={{ 'backgroundImage': `url(${img3})` }}>
              </div>
            </div>
            <div className="each-slide">
              <div style={{ 'backgroundImage': `url(${img4})` }}>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </>     
   );
}

export default Top;