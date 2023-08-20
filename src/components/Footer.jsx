import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">About Us</h2>
            <p className="text-sm">
            Swiggy, a premier food delivery app, offers a seamless way to explore and order a diverse range of cuisine from local favorites to gourmet delights. With its user-friendly interface and doorstep delivery.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="text-sm">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Restaurants</a>
              </li>
              <li>
                <a href="/cart">Order Now</a>
              </li>
              <li>
                <a href="#">Track Order</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <p className="text-sm">
              123 Main Street, Mumbai
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@swiggy.com
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-2">
        <div className="container mx-auto text-center text-sm">
          &copy; 2023 Your Company. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
