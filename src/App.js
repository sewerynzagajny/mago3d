import React, { useState, useEffect } from "react";
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
import Navigation from "./components/Navigation";
import Hero from "./pages/Hero";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import History from "./pages/History";
import Footer from "./components/Footer";
import Materials from "./pages/Materials";

export default function App() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const firstLoadPageVideoTime = 3;

  // Custom hook to handle scrolling to anchor
  function ScrollToTopOrAnchor() {
    const location = useLocation();
    const [prevPathname, setPrevPathname] = useState("");

    useEffect(() => {
      const hash = location.hash; // Pobierz hash z URL (np. #about)

      if (prevPathname && location.pathname !== prevPathname) {
        // Jeśli zmieniono podstronę, przewiń natychmiast na górę
        window.scrollTo(0, 0);
      } else if (hash) {
        // Jeśli hash istnieje, przewiń płynnie do elementu
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else if (!hash) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      // Zaktualizuj poprzednią ścieżkę
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
                videoPath={videoMp4}
                videoType={"mp4"}
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
                  <Header>
                    <Navigation />
                    <Hero />
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
        {/* Nowa podstrona */}
        {/* <Route path="/new-page" element={<NewPage />} /> */}
      </Routes>
    </Router>
  );
}
