import "../styles/videoCard.css";

const VideoCard = ({ title, video, color }) => {
  return (
    <div className="video-card">
      <video
        className="video-bg"
        src={video}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="video-overlay">
        <div className="video-text">
          <h3 style={{ color }}>{title}</h3>
          <span
            className="title-line"
            style={{ backgroundColor: color }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
