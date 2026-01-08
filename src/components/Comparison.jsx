import "../styles/comparison.css";

const Comparison = () => {
  return (
    <section className="comparison-section">
      <div className="comparison-container">
        <div className="comparison-box left">
          <h2>
            <span className="highlight">Autonomous AI</span>
            <br />
            marketer
          </h2>

          <ul>
            <li>24/7 performance audits</li>
            <li>AI creative generation</li>
            <li>Suggests tweaks to improve ROAS</li>
          </ul>
        </div>

        <div className="comparison-divider"></div>

        <div className="comparison-box right">
          <h2>
            ChatGPT for
            <br />
            <span className="muted">paid ads</span>
          </h2>

          <ul>
            <li>“How can I improve ROAS?”</li>
            <li>“What are my best-performing assets?”</li>
            <li>“Which campaigns are wasting spend?”</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
