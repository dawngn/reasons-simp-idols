import Navbar from "./components/Navbar";
import Top from "./components/Top";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./components/style/App.css";
import { useState, useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import LazyLoad from "react-lazy-load";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <div className="App">
        {loading ? (
          <div className="Loader">
            <ScaleLoader
              className="load"
              size={0}
              color={"#8f81fc"}
              loading={loading}
            />
          </div>
        ) : (
          <div className="Weeb">
            <Navbar />
            <LazyLoad>
              <Top />
            </LazyLoad>
            <About />   
            <Gallery />
            <Footer />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
