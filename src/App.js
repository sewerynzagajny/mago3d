import React, { useState } from "react";
import LoadVideo from "./components/LoadVideo";
import logo from "./assets/logo.webp";

export default function App() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <>
      <LoadVideo onVideoLoaded={setVideoLoaded} />
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
