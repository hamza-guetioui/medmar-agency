import Link from "next/link";
import React from "react";

function Index() {
  return (
    <section className="p-8 bg-gray-100 rounded-lg">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Our Services</h1>
      <p className="text-lg text-gray-600 mb-10">
        Welcome to our{" "}
        <Link href="/services" className="text-blue-500 hover:underline">
          Services
        </Link>{" "}
        page, where we offer a comprehensive range of digital solutions
        designedhref elevate your brand and drive results. Explore our core
        services belowhref learn how we can help you achieve your business
        goals.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            <Link
              href="/services/graphic-design"
              className="text-blue-500 hover:underline"
            >
              Graphic Design
            </Link>
          </h2>
          <p className="text-gray-700">
            Our{" "}
            <Link
              href="/services/graphic-design"
              className="text-blue-500 hover:underline"
            >
              graphic design services
            </Link>{" "}
            are crafted to bring your brand’s vision to life. Whether you need a
            new logo, branding materials, or engaging digital graphics, our
            creative team is equipped to deliver designs that resonate with your
            audience and enhance your brand identity.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            <Link
              href="/services/digital-marketing"
              className="text-blue-500 hover:underline"
            >
              Digital Marketing
            </Link>
          </h2>
          <p className="text-gray-700">
            Unlock the full potential of your online presence with our{" "}
            <Link
              href="/services/digital-marketing"
              className="text-blue-500 hover:underline"
            >
              digital marketing services
            </Link>
            . From search engine optimization (SEO) and social media marketing
            to targeted email campaigns, we create strategies that boost your
            visibility and drive engagement.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            <Link
              href="/services/video-editing"
              className="text-blue-500 hover:underline"
            >
              Video Editing
            </Link>
          </h2>
          <p className="text-gray-700">
            Transform your raw footage into compelling stories with our{" "}
            <Link
              href="/services/video-editing"
              className="text-blue-500 hover:underline"
            >
              video editing services
            </Link>
            . Our team specializes in creating high-quality promotional videos,
            social media clips, and more, ensuring your content stands out.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            <Link
              href="/services/photography"
              className="text-blue-500 hover:underline"
            >
              Photography
            </Link>
          </h2>
          <p className="text-gray-700">
            Capture the essence of your brand with our{" "}
            <Link
              href="/services/photography"
              className="text-blue-500 hover:underline"
            >
              photography services
            </Link>
            . Whether it’s for product shoots, corporate events, or portrait
            sessions, our professional photographers use top-notch equipment and
            techniques to produce stunning images.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            <Link
              href="/services/web-development"
              className="text-blue-500 hover:underline"
            >
              Web Development
            </Link>
          </h2>
          <p className="text-gray-700">
            Build a strong online presence with our{" "}
            <Link
              href="/services/web-development"
              className="text-blue-500 hover:underline"
            >
              web development services
            </Link>
            . We offer custom solutions tailored to your needs, including web
            design, mobile app development, and software solutions. Our team
            uses the latest technologies to create functional and visually
            appealing websites.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Index;
