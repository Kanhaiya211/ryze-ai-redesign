import "../styles/features.css";

const Features = () => {
  return (
    <section className="features">
      <h2 className="features-title">Key Features</h2>

      <div className="features-grid">
        <div className="feature-card">
          <h3>AI Automation</h3>
          <p>
            Automate repetitive business workflows and reduce manual effort
            using intelligent AI-driven processes.
          </p>
        </div>

        <div className="feature-card">
          <h3>Smart Analytics</h3>
          <p>
            Gain real-time insights and data-driven recommendations to make
            faster and better decisions.
          </p>
        </div>

        <div className="feature-card">
          <h3>Seamless Integration</h3>
          <p>
            Easily integrate Ryze AI with existing tools and platforms without
            disrupting your current workflow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
