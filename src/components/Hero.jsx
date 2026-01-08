import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          LET AI MANAGE <span>YOUR ADS</span>
        </h1>

        <p>
          Ryze AI helps businesses automate workflows, gain actionable insights,
          and make smarter decisions using advanced artificial intelligence.
        </p>

        <div className="hero-buttons">
          <button>Get Started</button>
          <button className="secondary-btn">Book a Demo</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
