import "../styles/auditCta.css";

const AuditCTA = () => {
  return (
    <section className="audit-section">
      <div className="audit-strip">
        <div className="audit-strip-track">
          <span>23+ COUNTRIES</span>
          <span>•</span>
          <span>$500M+ AD SPEND MANAGED</span>
          <span>•</span>
          <span>2000+ CLIENTS</span>
          <span>•</span>
          <span>700+ AGENCIES</span>
          <span>•</span>
          <span>23+ COUNTRIES</span>
          <span>•</span>
          <span>$500M+ AD SPEND MANAGED</span>
        </div>
      </div>

      <div className="audit-content">
        <h2>
          Audit your <span>ad account</span> instantly.
        </h2>

        <div className="audit-input">
          <input type="email" placeholder="name@company.com" />
          <button>Audit Account</button>
        </div>
      </div>

      <div className="audit-strip bottom">
        <div className="audit-strip-track">
          <span>23+ COUNTRIES</span>
          <span>•</span>
          <span>$500M+ AD SPEND MANAGED</span>
          <span>•</span>
          <span>2000+ CLIENTS</span>
          <span>•</span>
          <span>700+ AGENCIES</span>
          <span>•</span>
          <span>23+ COUNTRIES</span>
          <span>•</span>
          <span>$500M+ AD SPEND MANAGED</span>
        </div>
      </div>
    </section>
  );
};

export default AuditCTA;
