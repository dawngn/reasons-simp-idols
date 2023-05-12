/* eslint-disable react/no-unescaped-entities */
import "./style/About.css";
import sus from "/src/assets/sus.gif";
import champion from "/src/assets/winner.jpg";
import { useInView } from "react-intersection-observer";



function About() {

  const { ref:aboutRef, inView:aboutView } = useInView();

  return (
    <div className="main-about">
      <div ref={aboutRef} className={ `${ aboutView ? "aboutAnimate" : "about" }`} >
        <div className="about-container">
          <h1>ABOUT</h1>
          <div className="about-content">
            <div className="about-img">
              <img className="sus" src={sus} alt="" />
            </div>
            <div className="about-smt">
              <p>A platform where fans can connect with their favorite virtual personalities. These websites typically feature information about the vtuber's background, personality, and interests, as well as links to their social media accounts, merchandise, and upcoming events. Overall, it is an essential hub for fans to stay up-to-date and engaged with their beloved virtual celebrities.</p>
            </div>
          </div>
          <div className="about-vtuber">
            <h2>What is VTuber?</h2>
            <img className="champion" src={champion} alt="" />
            <p className="vtuber-content">
            Virtual YouTubers, or VTubers, are online entertainers who use digital avatars to disguise their real world appearance. Through the use of computer graphics and motion capture, the virtual avatar interacts with the audience.
            </p> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
