import "../styles/footer.css";
const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-content">
    <p>
      © {new Date().getFullYear()} <span>Ryze AI</span>. All rights reserved.
    </p>
    <p>Privacy Policy · Terms of Service</p>
  </div>
</footer>

  );
};

export default Footer;
