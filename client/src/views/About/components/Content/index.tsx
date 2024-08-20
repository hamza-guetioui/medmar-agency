import React from "react";
import Members from "./Members";
function Index() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold text-center mb-8">
        About Innovate Agency
      </h1>

      <p className="text-lg mb-8 leading-relaxed">
        Welcome to <span className="font-semibold">Innovate Agency</span>, your
        premier destination for cutting-edge marketing solutions. We believe in
        the power of creativity and strategic thinking to transform brands and
        drive success. Our agency is built on the foundation of innovation,
        collaboration, and results-driven strategies. With years of experience
        in the industry, we have honed our skills to deliver exceptional
        services that help businesses thrive in the competitive digital
        landscape.
      </p>

      <div className="bg-gray-300 h-80 mb-8 flex items-center justify-center">
        <span className="text-xl font-semibold">Image Placeholder</span>
      </div>

      <h2 className="text-4xl font-bold mb-6">Our Comprehensive Services</h2>
      <p className="text-lg mb-8 leading-relaxed">
        At Innovate Agency, we offer a diverse range of services designed to
        meet your unique marketing needs. Our team of experts is adept at
        crafting tailored solutions that align with your business goals. Here’s
        a glimpse of what we offer:
      </p>

      <ul className="list-disc list-inside mb-8 space-y-4">
        <li className="text-lg">
          <span className="font-semibold">UI/UX Design and Development:</span>{" "}
          Our design team creates intuitive and aesthetically pleasing
          interfaces that enhance user experience and drive engagement.
        </li>
        <li className="text-lg">
          <span className="font-semibold">Video Marketing and Editing:</span>{" "}
          From concept to production, we produce compelling video content that
          tells your brand story and captivates your audience.
        </li>
        <li className="text-lg">
          <span className="font-semibold">Graphic Design and Photography:</span>{" "}
          Our creative team delivers stunning visuals and professional
          photography that capture the essence of your brand.
        </li>
        <li className="text-lg">
          <span className="font-semibold">
            Digital Marketing and Social Media Management:
          </span>{" "}
          We craft data-driven digital strategies that increase your online
          presence and engage your target audience effectively.
        </li>
        <li className="text-lg">
          <span className="font-semibold">
            Brand Strategy and Content Creation:
          </span>{" "}
          Our strategists and writers collaborate to develop compelling content
          that resonates with your audience and strengthens your brand identity.
        </li>
      </ul>

      <div className="bg-gray-300 h-80 mb-8 flex items-center justify-center">
        <span className="text-xl font-semibold">Image Placeholder</span>
      </div>

      <h2 className="text-4xl font-bold mb-6">Meet Our Expert Team</h2>
      <p className="text-lg mb-8 leading-relaxed">
        Our team at Innovate Agency is a dynamic blend of creative minds and
        strategic thinkers. We are passionate about what we do and are committed
        to delivering excellence in every project. Each team member brings
        unique skills and perspectives, allowing us to approach challenges with
        innovative solutions. Our collaborative environment fosters creativity
        and ensures that we remain at the forefront of industry trends.
      </p>
      <Members />

      <h2 className="text-4xl font-bold mb-6">Why Choose Innovate Agency?</h2>
      <p className="text-lg mb-8 leading-relaxed">
        Partnering with Innovate Agency means choosing a team that is deeply
        invested in your success. We pride ourselves on our commitment to
        quality, transparency, and delivering measurable results. Our
        personalized approach ensures that every strategy is tailored to your
        specific needs, empowering your brand to achieve its full potential.
        With a finger on the pulse of the latest industry trends, we are
        equipped to navigate the ever-evolving digital landscape and drive your
        business forward.
      </p>

      <div className="bg-gray-300 h-80 mb-8 flex items-center justify-center">
        <span className="text-xl font-semibold">Image Placeholder</span>
      </div>

      <p className="text-lg leading-relaxed">
        Let Innovate Agency be the catalyst for your brand&rsquo;s success.
        Contact us today to explore how we can elevate your marketing efforts
        and transform your vision into reality. Together, we can create
        something extraordinary and propel your brand to new heights.
      </p>
    </div>
  );
}

export default Index;
