import React, { useEffect } from "react";
import videoMp4 from "../assets/logo-video.mp4";
import videoWebm from "../assets/logo-video.webm";

export default function LoadVideo({ onVideoLoaded }) {
  useEffect(() => {
    const videoElement = document.querySelector(".logo-video__content");
    videoElement.onloadeddata = () => {
      onVideoLoaded(true);
      setTimeout(() => {
        videoElement.classList.add("logo-animation");
        setTimeout(() => {
          videoElement.remove();
          document.querySelector(".logo-video").remove();
        }, 800);
      }, 3000);
    };
  }, [onVideoLoaded]);

  return (
    <div className="logo-video">
      <video className="logo-video__content" autoPlay muted>
        <source src={videoMp4} type="video/mp4" />
        <source src={videoWebm} type="video/webm" />
        Your browser is not supported!
      </video>
    </div>
  );
}
