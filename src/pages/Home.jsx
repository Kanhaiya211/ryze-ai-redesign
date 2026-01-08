import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import TrustedBy from "../components/TrustedBy";
import VideoCard from "../components/VideoCard";
import VideoFeatures from "../components/VideoFeatures";
import BrandMarquee from "../components/BrandMarquee";
import Comparison from "../components/Comparison";
import AuditCTA from "../components/AuditCTA";
import AIAllInOne from "../components/AIAllInOne";


const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <TrustedBy />
      <VideoFeatures />
      <BrandMarquee />
      <Comparison />
      <AuditCTA />
      <AIAllInOne />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
