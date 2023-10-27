import React from 'react';

function AboutPage() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://picsum.photos/600/400?random=about1"
            className="img-fluid rounded shadow-lg"
            alt="About Us"
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-4 mt-4">About Us</h1>
          <p className="lead">
            Welcome to our online store. We are dedicated to delivering exceptional products and services to our valued customers.
          </p>
          <p>
            Our team is committed to creating the best shopping experience possible. We prioritize quality and customer satisfaction in everything we do.
          </p>
          <p>
            Feel free to explore our diverse product range, and don't hesitate to contact us if you have any questions or suggestions.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6 order-md-2">
          <img
            src="https://picsum.photos/600/400?random=about2"
            className="img-fluid rounded shadow-lg"
            alt="About Us"
          />
        </div>
        <div className="col-md-6 order-md-1">
          <h2 className="mt-4">Our Mission</h2>
          <p>
            Our mission is to provide high-quality products that meet the needs and preferences of our customers. We continuously strive to improve our products and services to exceed your expectations.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <img
            src="https://picsum.photos/600/400?random=about3"
            className="img-fluid rounded shadow-lg"
            alt="About Us"
          />
        </div>
        <div className="col-md-6">
          <h2 className="mt-4">Contact Us</h2>
          <p>
            If you have any inquiries, feedback, or requests, please don't hesitate to get in touch with us. We value your opinion and are always ready to assist you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
