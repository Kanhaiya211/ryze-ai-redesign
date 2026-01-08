import "../styles/testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-heading">What Our Customers Say</h2>

      <div className="testimonials-grid">
        <div className="testimonial-card">
          <p className="testimonial-text">
            “Ryze AI helped us automate critical workflows and significantly
            improved our operational efficiency.”
          </p>
          <span className="testimonial-author">
            — Product Manager, Tech Startup
          </span>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">
            “The insights provided by Ryze AI allowed our team to make faster
            and more informed business decisions.”
          </p>
          <span className="testimonial-author">
            — Operations Lead, SaaS Company
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
