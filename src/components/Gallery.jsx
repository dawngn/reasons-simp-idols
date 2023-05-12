import "./style/Gallery.css";
import cha1 from "../assets/cha1.png";
import cha2 from "../assets/cha2.png";
import cha3 from "../assets/cha3.png";
import cha4 from "../assets/cha4.png";
import cha5 from "../assets/cha5.png";
import cha6 from "../assets/cha6.png";
import cha7 from "../assets/cha7.png";
import cha8 from "../assets/cha8.png";
import cha9 from "../assets/cha9.png";
import cha10 from "../assets/cha10.png";
import { useInView } from "react-intersection-observer";

function Gallery() {

  const { ref:galleryRef, inView:galleryView } = useInView();

  return (
    <>
      <div ref={galleryRef} className={`${galleryView ? "gallery" : "galleryAnimate"}`} id="gallery">
        <div className="gallery-container">
          <h1 className="galleryH1">GALLERY</h1>
          <div className="characters">
            <div className="character">
              <a
                href="https://virtualyoutuber.fandom.com/wiki/Kurumi_Noah"
                className="new"
              >
                <img className="newC" src={cha1} alt="Kurumi Noah" />
              </a>
              <a
                href="https://virtualyoutuber.fandom.com/wiki/Tachibana_Hinano"
                className="new"
              >
                <img className="newC" src={cha2} alt="Tachibana Hinano" />
              </a>
              <a
                href="https://virtualyoutuber.fandom.com/wiki/Kamito"
                className="new"
              >
                <img className="newC" src={cha3} alt="Kamito" />
              </a>
              <a
                href="https://virtualyoutuber.fandom.com/wiki/Kaga_Nazuna"
                className="new"
              >
                <img className="newC" src={cha4} alt="Kaga Nazuna" />
              </a>
              <a
                href="https://virtualyoutuber.fandom.com/wiki/Nekota_Tsuna"
                className="new"
              >
                <img className="newC" src={cha5} alt="Nekota Tsuna" />
              </a>
              <a
                href="https://virtualyoutuber.fandom.com/wiki/Kaga_Sumire"
                className="new"
              >
                <img className="newC" src={cha6} alt="Kaga Sumire" />
              </a>
              <a
                href="https://virtualyoutuber.fandom.com/wiki/Kuzuha"
                className="new"
              >
                <img className="newC" src={cha7} alt="Kuzuha" />
              </a>
              <a
                href="https://virtualyoutuber.fandom.com/wiki/Kaminari_Qpi"
                className="new"
              >
                <img className="newC" src={cha8} alt="Kaminari Qpi" />
              </a>
              <a
                href="https://virtualyoutuber.fandom.com/wiki/Yakumo_Beni"
                className="new"
              >
                <img className="newC" src={cha9} alt="Yakumo Beni" />
              </a>
              <a
                href="https://virtualyoutuber.fandom.com/wiki/Hanabusa_Lisa"
                className="new"
              >
                <img className="newC" src={cha10} alt="Hanabusa Lisa" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Gallery;
