import React, { useState } from "react";
import FirstLoadPageVideo from "./components/FirstLoadPageVideo";
// import logo from "./assets/logo.png";
import videoMp4 from "./assets/logo-video.mp4";
import videoWebm from "./assets/logo-video.webm";
import Navigation from "./components/Navigation";
import Hero from "./pages/Hero";
import Header from "./components/Header";

export default function App() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <>
      <FirstLoadPageVideo
        videoPath={videoMp4}
        videoType={"mp4"}
        videoWebmPath={videoWebm}
        animationTime={3}
        hideVideoTime={0.8}
        hideVideoScaleX={0.165}
        hideVideoScaleY={0.165}
        hideVideoTranslateX={"-10vw"}
        hideVideoTranslateY={"1vh"}
        hideVideotransformOriginX={"0%"}
        hideVideotransformOriginY={"0%"}
        onVideoLoaded={setVideoLoaded}
      />
      {videoLoaded && (
        <Header>
          <Navigation />
          <Hero />
        </Header>
      )}
    </>
  );
}
