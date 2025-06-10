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
import videoMp4Mobile from "./assets/logo-video-mobile.mp4";
import videoWebmMobile from "./assets/logo-video-mobile.webm";
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
import Details from "./pages/Details";
import Tsv3 from "./pages/assortyment/Tsv3";

export default function App() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const firstLoadPageVideoTime = 1.7; // Czas trwania animacji w sekundach
  const headerRef = useRef(null); // Tworzymy referencję do nagłówka

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 560; // Twój breakpoint

  const hideVideoProps = isMobile
    ? {
        hideVideoScaleX: 0.1,
        hideVideoScaleY: 0.1,
        hideVideoTranslateX: "-10vw",
        hideVideoTranslateY: "-50vh",
      }
    : {
        hideVideoScaleX: 0.165,
        hideVideoScaleY: 0.165,
        hideVideoTranslateX: "-10vw",
        hideVideoTranslateY: "-1vh",
      };

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
                videoPathMobile={videoMp4Mobile}
                videoType={"mp4"}
                posterPath={poster}
                videoWebmPath={videoWebm}
                videoWebmPathMobile={videoWebmMobile}
                animationTime={firstLoadPageVideoTime}
                hideVideoTime={0.8}
                hideVideotransformOriginX={"0%"}
                hideVideotransformOriginY={"0%"}
                mobileBreakpoint={560}
                onVideoLoaded={() => setVideoLoaded(true)}
                {...hideVideoProps}
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
        <Route path="/szczegoly" element={<Details />} />
        <Route
          path="/szczegoly/druki-3d/podstawka-pod-thermomix-tM5-tM6-tSv3"
          element={<Tsv3 />}
        />
        {/* Nowa podstrona */}
        {/* <Route path="/new-page" element={<NewPage />} /> */}
      </Routes>
    </Router>
  );
}
