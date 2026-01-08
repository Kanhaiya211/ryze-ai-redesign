import VideoCard from "./VideoCard";

const VideoFeatures = () => {
  return (
    <section
      style={{
        display: "flex",
        gap: "24px",
        padding: "80px 24px",
        overflowX: "auto",
      }}
    >
      <VideoCard
        title="Keyword optimization"
        video="/videos/keyword-optimization.mp4"
        color="#00E5FF"
      />

      <VideoCard
        title="Creative generation"
        video="/videos/creative-generation.mp4"
        color="#FF9100"
      />

      <VideoCard
        title="Creative analysis"
        video="/videos/creative-analysis.mp4"
        color="#00E676"
      />

      <VideoCard
        title="Account audits"
        video="/videos/account-audit.mp4"
        color="#FFD600"
      />

      <VideoCard
        title="Budget reallocation"
        video="/videos/budget-reallocation.mp4"
        color="#FF5252"
      />
    </section>
  );
};

export default VideoFeatures;
