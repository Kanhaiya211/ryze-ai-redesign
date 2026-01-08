import "../styles/aiAllInOne.css";

const AIAllInOne = () => {
  return (
    <section className="ai-section">
      <div className="ai-container">
        <h2 className="ai-heading">
          An <span>AI marketer</span> that does it all for you
        </h2>

        <div className="ai-cards">
          <div className="ai-card">
            <h3>Set up and launch campaigns</h3>
            <div className="ai-card-preview">
              <div className="preview-box">Campaign preview</div>
            </div>
          </div>

          <div className="ai-card">
            <h3>Suggest what to fix and optimize</h3>
            <div className="ai-card-preview">
              <div className="preview-box">Optimization table</div>
            </div>
          </div>

          <div className="ai-card">
            <h3>Reports that build themselves</h3>
            <div className="ai-card-preview">
              <div className="preview-box">Automated report</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAllInOne;
