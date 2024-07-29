import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container mx-auto mt-20 p-8">
      <div className="text-center mb-16">
        <h1 className="text-7xl font-bold text-indigo-700 mb-6">About Us</h1>
        <p className="text-3xl text-gray-700">
          At Desklog, we are dedicated to transforming the way you manage tasks and time. Our innovative platform helps teams and individuals stay organized, productive, and efficient.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-5xl font-semibold text-indigo-700 mb-6">Our Mission</h2>
        <p className="text-2xl text-gray-700 leading-relaxed">
          Our mission is to empower businesses and individuals to optimize their project management processes through innovative solutions. We strive to provide tools that enhance productivity, streamline workflows, and drive success.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-5xl font-semibold text-indigo-700 mb-6">Our Values</h2>
        <ul className="list-disc list-inside text-2xl text-gray-700 leading-relaxed">
          <li>Customer Success: We prioritize our customers' needs and success above all.</li>
          <li>Innovation: We continuously innovate to bring the best features and functionality.</li>
          <li>Integrity: We maintain transparency and honesty in all our dealings.</li>
          <li>Collaboration: We believe in the power of teamwork and collaboration.</li>
          <li>Excellence: We strive for excellence in everything we do.</li>
        </ul>
      </div>

      <div className="mb-16">
        <h2 className="text-5xl font-semibold text-indigo-700 mb-6">Meet the Team</h2>
        <p className="text-2xl text-gray-700 leading-relaxed mb-8">
          Our team is composed of passionate professionals from diverse backgrounds, united by a common goal - to make project management effortless and efficient. We are dedicated to providing exceptional support and continuously improving our platform based on your feedback.
        </p>
        <div className="flex justify-center">
          <img src="https://i.pinimg.com/564x/1b/05/f4/1b05f4cace8bfe071d4f5631133d5e65.jpg" alt="Team" className="rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-5xl font-semibold text-indigo-700 mb-6">Get in Touch</h2>
        <p className="text-2xl text-gray-700 leading-relaxed mb-8">
          We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us.
        </p>
        <Link to="/login" state={{ fromContactUs: true }}>
          <button className="bg-blue-500 text-white px-8 py-4 rounded-full text-3xl hover:bg-blue-700 transition duration-300">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
