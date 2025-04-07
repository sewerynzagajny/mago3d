import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstLoadPageVideo from "./components/FirstLoadPageVideo";
// import logo from "./assets/logo.png";
import videoMp4 from "./assets/logo-video.mp4";
import videoWebm from "./assets/logo-video.webm";
import Navigation from "./components/Navigation";
import Hero from "./pages/Hero";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import History from "./pages/History";

export default function App() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const firstLoadPageVideoTime = 3;

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     window.scrollTo(0, 0);
  //   }, firstLoadPageVideoTime * 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <Router>
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
                </>
              )}
            </>
          }
        />
        {/* Podstrona Historia */}
        <Route path="/historia" element={<History />} />
        {/* Nowa podstrona */}
        {/* <Route path="/new-page" element={<NewPage />} /> */}
      </Routes>
    </Router>
  );
}
