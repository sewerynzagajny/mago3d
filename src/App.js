import React, { useState } from "react";
import LoadVideo from "./components/FirstLoadPageVideo";
import logo from "./assets/logo.webp";
import videoMp4 from "./assets/logo-video.mp4";
import videoWebm from "./assets/logo-video.webm";

export default function App() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <>
      <LoadVideo
        videoPath={videoMp4}
        videoType={"mp4"}
        videoWebmPath={videoWebm}
        animationTime={3}
        hideVideoTime={0.8}
        hideVideoScaleX={0.45}
        hideVideoScaleY={0.45}
        hideVideoTranslateX={"-40%"}
        hideVideoTranslateY={"-24%"}
        transformOriginX="0%"
        transformOriginY="0%"
        onVideoLoaded={setVideoLoaded}
      />
      {videoLoaded && (
        <>
          <div className="nav">
            <img src={logo} alt="logo" />
            <div
              style={{
                color: "#52D552 ",
                fontSize: "4rem",
                textAlign: "center",
              }}
            >
              MaGo3d
            </div>
          </div>

          <div style={{ backgroundColor: "#1c1e1f", padding: "6rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </div>
          <div style={{ backgroundColor: "#0e0f10", padding: "6rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </div>
        </>
      )}
    </>
  );
}
