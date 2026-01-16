// footer
// create a footer with company info, navigation links, and social media icons using React and Tailwind CSS.
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-20 w-full">
      <div className="px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-20 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Nike</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              © 2024 Nike, Inc. All rights reserved. Inspiring creativity in
              every athlete.
            </p>
            <p className="text-gray-500 text-xs">
              Our mission is to bring inspiration and innovation to every
              athlete in the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/newsroom"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Newsroom
                </a>
              </li>
              <li>
                <a
                  href="/investors"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Investors
                </a>
              </li>
              <li>
                <a
                  href="/sustainability"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-bold mb-6">Customer Service</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/shipping"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/order-status"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Order Status
                </a>
              </li>
              <li>
                <a
                  href="/gift-cards"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/cookie-preferences"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cookie Preferences
                </a>
              </li>
              <li>
                <a
                  href="/accessibility"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Accessibility
                </a>
              </li>
              <li>
                <a
                  href="/compliance"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Compliance
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-6">Follow Us</h4>
            <div className="flex space-x-4 mb-8">
              <a
                href="https://www.facebook.com/nike"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://www.twitter.com/nike"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/nike"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/nike"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
            <h5 className="text-sm font-semibold mb-3">Newsletter</h5>
            <p className="text-gray-500 text-xs mb-3">
              Subscribe to get special offers and updates.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-700 text-white text-sm px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <h5 className="font-semibold mb-3">Store Locator</h5>
              <p className="text-gray-400 text-sm">
                Find a Nike store near you
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Become a Member</h5>
              <p className="text-gray-400 text-sm">
                Join Nike membership for exclusive benefits
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Download the App</h5>
              <p className="text-gray-400 text-sm">
                Shop anytime, anywhere on your phone
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm text-center">
              Nike © 2024. All rights reserved. | Made with passion for athletes
              worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
