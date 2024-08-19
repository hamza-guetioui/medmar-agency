import React from 'react';

const GraphicDesign = () => {
  const sectionStyle = {
    padding: '40px',
    backgroundColor: '#f0f8ff',
    borderRadius: '8px',
    marginBottom: '20px',
  };

  const titleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  };

  const paragraphStyle = {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#555',
    marginBottom: '20px',
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Photography</h2>
      <div style={paragraphStyle}>
        <h3>Introduction</h3>
        <p>
          Overview of graphic design services and their importance in creating
          a strong visual identity. Graphic design plays a crucial role in
          branding and marketing by communicating messages visually.
        </p>
      </div>
      <div style={paragraphStyle}>
        <h3>Types of Design Services</h3>
        <p>
          Our design services include logo and branding, print and digital
          marketing materials, and UI/UX design for web and mobile applications.
        </p>
      </div>
      <div style={paragraphStyle}>
        <h3>Design Process</h3>
        <p>
          We follow a collaborative design process that involves client feedback
          at every stage, ensuring that the final product meets your vision and
          requirements.
        </p>
      </div>
      <div style={paragraphStyle}>
        <h3>Tools and Technologies</h3>
        <p>
          Our designers use industry-standard tools like Adobe Illustrator and
          Photoshop to create high-quality and impactful designs.
        </p>
      </div>
      <div style={paragraphStyle}>
        <h3>Case Studies and Projects</h3>
        <p>
          Explore our portfolio showcasing successful projects and client
          testimonials that highlight our expertise and creativity in graphic
          design.
        </p>
      </div>
      <div style={paragraphStyle}>
        <h3>Pricing and Packages</h3>
        <p>
          We offer flexible pricing models and package options that can be
          tailored to fit your specific design needs and budget.
        </p>
      </div>
      <div style={paragraphStyle}>
        <h3>FAQs</h3>
        <p>
          Frequently asked questions about our graphic design services,
          including project timelines and deliverables.
        </p>
      </div>
      <div style={paragraphStyle}>
        <h3>Contact Information</h3>
        <p>
          Reach out to us for more information or to start your next graphic
          design project with our expert team.
        </p>
      </div>
      <div style={paragraphStyle}>
        <h3>Conclusion</h3>
        <p>
          Discover the advantages of choosing our graphic design services to
          enhance your brand&rsquo;s visual impact. Contact us today to get started!
        </p>
      </div>
    </section>
  );
};

export default GraphicDesign;