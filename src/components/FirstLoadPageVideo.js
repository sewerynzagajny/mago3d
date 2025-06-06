import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

let firstLoadPageVideoStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  zIndex: 99999,
  opacity: 1,
  overflow: "hidden",
};

const videoContent = {
  height: "100%",
  width: "100%",
  objectFit: "cover",
};

FirstLoadPageVideo.propTypes = {
  videoPath: PropTypes.string.isRequired, // desktop
  videoPathMobile: PropTypes.string, // mobile
  videoType: PropTypes.string.isRequired,
  videoWebmPath: PropTypes.string,
  videoWebmPathMobile: PropTypes.string,
  animationTime: PropTypes.number,
  hideVideoTime: PropTypes.number,
  hideVideoScaleX: PropTypes.number,
  hideVideoScaleY: PropTypes.number,
  hideVideoTranslateX: PropTypes.string,
  hideVideoTranslateY: PropTypes.string,
  onVideoLoaded: PropTypes.func.isRequired,
  hideVideotransformOriginX: PropTypes.string,
  hideVideotransformOriginY: PropTypes.string,
  posterPath: PropTypes.string,
  mobileBreakpoint: PropTypes.number, // px
};

export default function FirstLoadPageVideo({
  videoPath,
  videoPathMobile,
  videoType,
  videoWebmPath,
  videoWebmPathMobile,
  posterPath,
  animationTime = 3,
  hideVideoTime = 0.8,
  hideVideoScaleX = 0,
  hideVideoScaleY = 0,
  hideVideoTranslateX = "0%",
  hideVideoTranslateY = "0%",
  hideVideotransformOriginX = "50%",
  hideVideotransformOriginY = "50%",
  onVideoLoaded,
  mobileBreakpoint = 768,
}) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Wybierz wersję mobilną lub desktopową na podstawie szerokości okna
  const isMobile =
    typeof window !== "undefined" && window.innerWidth <= mobileBreakpoint;
  const selectedVideoPath =
    isMobile && videoPathMobile ? videoPathMobile : videoPath;
  const selectedWebmPath =
    isMobile && videoWebmPathMobile ? videoWebmPathMobile : videoWebmPath;

  useEffect(() => {
    const hideVideo = {
      opacity: 0,
      transform: `scale(${hideVideoScaleX}, ${hideVideoScaleY}) translate(${hideVideoTranslateX}, ${hideVideoTranslateY})`,
      transformOrigin: `${hideVideotransformOriginX} ${hideVideotransformOriginY}`,
      transition: `all ${hideVideoTime}s`,
    };
    const videoElement = document.querySelector(
      ".first-load-page-video__content"
    );
    if (!videoElement) return;
    videoElement.onloadeddata = () => {
      setIsVideoLoaded(true);
      onVideoLoaded(true);
      setTimeout(() => {
        Object.assign(videoElement.style, hideVideo);
        setTimeout(() => {
          if (videoElement) {
            videoElement.remove();
          }

          const parentElement = document.querySelector(
            ".first-load-page-video"
          );
          if (parentElement) {
            parentElement.style.display = "none";
          }
        }, hideVideoTime * 1000 + 100);
      }, animationTime * 1000);
    };
  }, [
    onVideoLoaded,
    animationTime,
    hideVideoTime,
    hideVideoTranslateX,
    hideVideoTranslateY,
    hideVideoScaleX,
    hideVideoScaleY,
    hideVideotransformOriginX,
    hideVideotransformOriginY,
  ]);

  return (
    <div
      className="first-load-page-video"
      style={{
        ...firstLoadPageVideoStyle,
        display: isVideoLoaded ? "block" : "none", // Ukryj wideo, dopóki się nie załaduje
      }}
    >
      <video
        className="first-load-page-video__content"
        style={videoContent}
        autoPlay
        muted
        playsInline
        poster={posterPath} // nie zmieniamy poster!
      >
        <source src={selectedVideoPath} type={`video/${videoType}`} />
        {selectedWebmPath && (
          <source src={selectedWebmPath} type={`video/${videoType}`} />
        )}
        Your browser is not supported!
      </video>
    </div>
  );
}
