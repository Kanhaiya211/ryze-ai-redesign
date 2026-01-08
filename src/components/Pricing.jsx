import "../styles/pricing.css";
const Pricing = () => {
  return (
    <section className="pricing">
      <h2 className="pricing-title">Pricing Plans</h2>

      <div className="pricing-grid">
        <div className="pricing-card">
          <h3>Starter</h3>
          <p className="pricing-desc">Best for individuals and small teams</p>
          <p className="price">₹0 / month</p>
          <button>Get Started</button>
        </div>

        <div className="pricing-card featured">
          <h3>Professional</h3>
          <p className="pricing-desc">Ideal for growing businesses</p>
          <p className="price">₹2,499 / month</p>
          <button>Choose Plan</button>
        </div>

        <div className="pricing-card">
          <h3>Enterprise</h3>
          <p className="pricing-desc">
            Custom solutions for large organizations
          </p>
          <p className="price">Contact Sales</p>
          <button>Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
