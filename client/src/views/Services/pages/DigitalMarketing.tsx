import React from 'react';

const DigitalMarketing = () => {
  const sectionStyle = {
    padding: '40px',
    backgroundColor: '#e6ffe6',
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
      <h2 style={titleStyle}>Digital Marketing</h2>
      <div style={paragraphStyle}>
        <h3>Introduction</h3>
        <p>
          Our digital marketing services help businesses enhance their online
          presence and reach their target audience effectively. We focus on
          delivering measurable results through strategic campaigns.
        </p>
      </div>
      <div style={paragraphStyle}>
        <h3>Types of Digital Marketing Services</h3>
        <p>
          We offer a range of services including SEO, social media marketing,
          content marketing, and email campaigns to boost your brand&rsquo;s visibility.
        </p>
      </div>
      <div style={paragraphStyle}>
        <h3>Marketing Process</h3>
        <p>
          Our process involves detailed analysis and strategic planning to ensure
          that your marketing campaigns achieve the desired outcomes and ROI.
        </p>
      </div>
      <div style={paragraphStyle}>
        <h3>Tools and Platforms</h3>
        <p>
          We utilize the latest digital marketing tools and platforms, such as
          Google Analytics, Facebook Ads, and Mailchimp, to optimize your
          campaigns.
        </p>
      </div>
      <div style={paragraphStyle}>
        <h3>Case Studies and Success Stories</h3>
        <p>
          Learn about our successful marketing campaigns and how we&rsquo;ve helped
          businesses grow their online presence and increase conversions.
        </p>
      </div>
      <div style={paragraphStyle}>
        <h3>Pricing and Packages</h3>
        <p>
          Our flexible pricing models and packages are designed to suit
          businesses of all sizes, from startups to large enterprises.
        </p>
      </div>
      <div style={paragraphStyle}>
        <h3>FAQs</h3>
        <p>
          Common questions about our digital marketing services, including
          campaign management and performance tracking.
        </p>
      </div>
      <div style={paragraphStyle}>
        <h3>Contact Information</h3>
        <p>
          Contact us to learn more about our digital marketing services and how
          we can help your business thrive online.
        </p>
      </div>
      <div style={paragraphStyle}>
        <h3>Conclusion</h3>
        <p>
          Discover the benefits of partnering with our digital marketing
          experts to elevate your brand&rsquo;s online presence. Get in touch today!
        </p>
      </div>
    </section>
  );
};

export default DigitalMarketing;
