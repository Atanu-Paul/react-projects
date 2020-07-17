import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div style={{ position: "sticky", top: " 0" }}>
      <div className="ui embed">
        <iframe title="video-player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h3 className="ui header">{video.snippet.title}</h3>
        <h4 className="ui header">{video.snippet.channelTitle}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
