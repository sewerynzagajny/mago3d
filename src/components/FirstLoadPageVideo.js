import React, { useEffect } from "react";
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
  videoPath: PropTypes.string.isRequired,
  videoType: PropTypes.string.isRequired,
  videoWebmPath: PropTypes.string,
  animationTime: PropTypes.number,
  hideVideoTime: PropTypes.number,
  hideVideoScaleX: PropTypes.number,
  hideVideoScaleY: PropTypes.number,
  hideVideoTranslateX: PropTypes.string,
  hideVideoTranslateY: PropTypes.string,
  onVideoLoaded: PropTypes.func.isRequired,
  transformOriginX: PropTypes.string,
  transformOriginY: PropTypes.string,
};

export default function FirstLoadPageVideo({
  videoPath,
  videoType,
  videoWebmPath,
  animationTime = 3,
  hideVideoTime = 0.8,
  hideVideoScaleX = 0,
  hideVideoScaleY = 0,
  hideVideoTranslateX = "0%",
  hideVideoTranslateY = "0%",
  hideVideotransformOriginX = "50%",
  hideVideotransformOriginY = "50%",
  onVideoLoaded,
}) {
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
            if (parentElement) {
              parentElement.style.display = "none";
            }
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
    <div className="first-load-page-video" style={firstLoadPageVideoStyle}>
      <video
        className="first-load-page-video__content"
        style={videoContent}
        autoPlay
        muted
      >
        <source src={videoPath} type={`video/${videoType}`} />
        {videoWebmPath && <source src={videoWebmPath} type="video/webm" />}
        Your browser is not supported!
      </video>
    </div>
  );
}
