import "../styles/brandMarquee.css";

const BrandMarquee = () => {
  return (
    <section className="brand-section">
        <h2 id="client">Our Clients</h2>
      <div className="marquee">
        <div className="marquee-track">
          <img src="/brands/caleyx.svg" alt="caleyx"/>
          <img src="/brands/ritma.svg" alt="Ritma" />
          {/* <img src="/brands/mos.svg" alt="MOS" /> */}
          <img src="/brands/motif-digital.svg" alt="Motif" />
          <img src="/brands/pupil.svg" alt="Pupil" />
          <img src="/brands/willyx.svg" id="willyx" alt="Willyx" />

          <img src="/brands/caleyx.svg" alt="caleyx" />
          <img src="/brands/ritma.svg" alt="ritma" />
          <img src="/brands/mos.svg" alt="MOS" />
          <img src="/brands/motif-digital.svg" alt="Motif" />
          <img src="/brands/willyx.svg" id="willyx" alt="Willyx" />
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;
