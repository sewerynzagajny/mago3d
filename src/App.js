import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import FirstLoadPageVideo from "./components/FirstLoadPageVideo";
// import logo from "./assets/logo.png";
import videoMp4 from "./assets/logo-video.mp4";
import videoWebm from "./assets/logo-video.webm";
import poster from "./assets/black-background.png";
import Navigation from "./components/Navigation";
import Hero from "./pages/Hero";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import History from "./pages/History";
import Footer from "./components/Footer";
import Materials from "./pages/Materials";
import Contact from "./pages/Contacts";
import Assortment from "./pages/Assortment";
import Privacy from "./pages/Privacy";
import CookieBanner from "./components/CookieBanner";

export default function App() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const firstLoadPageVideoTime = 1.65;
  const headerRef = useRef(null); // Tworzymy referencję do nagłówka

  // Custom hook to handle scrolling to anchor
  function ScrollToTopOrAnchor() {
    const location = useLocation();
    const [prevPathname, setPrevPathname] = useState("");

    // Obsługa opóźnionego pokazania nagłówka po starcie
    useEffect(() => {
      if (!headerRef.current) return;

      const timeout = setTimeout(() => {
        headerRef.current.classList.add("header-visible");
      }, (firstLoadPageVideoTime * 1000) / 2);

      return () => clearTimeout(timeout);
    }, [location, prevPathname]);

    // Obsługa przewijania na kotwicę lub górę po zmianie lokalizacji
    useEffect(() => {
      const hash = location.hash;

      if (prevPathname && location.pathname !== prevPathname) {
        window.scrollTo(0, 0);
      } else if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else if (!hash) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      setPrevPathname(location.pathname);
    }, [location, prevPathname]);

    return null;
  }

  return (
    <Router>
      <ScrollToTopOrAnchor />
      <Routes>
        {/* Główna strona */}
        <Route
          path="/"
          element={
            <>
              <FirstLoadPageVideo
                key={videoLoaded ? "video-hidden" : "video-visible"}
                videoPath={videoMp4}
                videoType={"mp4"}
                posterPath={poster}
                videoWebmPath={videoWebm}
                animationTime={firstLoadPageVideoTime}
                hideVideoTime={0.8}
                hideVideoScaleX={0.165}
                hideVideoScaleY={0.165}
                hideVideoTranslateX={"-10vw"}
                hideVideoTranslateY={"1vh"}
                hideVideotransformOriginX={"0%"}
                hideVideotransformOriginY={"0%"}
                onVideoLoaded={() => setVideoLoaded(true)}
              />
              {videoLoaded && (
                <>
                  <Header ref={headerRef}>
                    <Navigation />
                    <Hero />
                    <CookieBanner />
                  </Header>
                  <main>
                    <AboutUs />
                  </main>
                  <Footer />
                </>
              )}
            </>
          }
        />
        {/* Podstrona Historia */}
        <Route path="/historia" element={<History />} />
        <Route path="/materialy" element={<Materials />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/asortyment" element={<Assortment />} />
        <Route path="/privacy" element={<Privacy />} />
        {/* Nowa podstrona */}
        {/* <Route path="/new-page" element={<NewPage />} /> */}
      </Routes>
    </Router>
  );
}
