import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src="https://ik.imagekit.io/lg14qfjkg/RANBIDGE%20SOLUTIONS%20PRIVATE%20LIMITED.png?updatedAt=1766758168670"
              alt="Ranbidge Logo"
              className="h-24 w-24 object-contain bg-white rounded-full p-2"
            />
            <p className="text-slate-400 text-sm">
              Bridging the Gap Between Academics and Industry Excellence
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/profile.php?id=61578597456959" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/rspl_academy?igsh=MXE3NWY3ZmNiNmtucg==" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ranbidge-solutions-private-limited-company-a98983376" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/RanbridgePvtLtd" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.youtube.com/@RSPL-Academy" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm">
                About
              </Link>
              <Link to="/services" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm">
                Services
              </Link>
              <Link to="/domains" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm">
                Domains
              </Link>
              <Link to="/internship" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm">
                Internship
              </Link>
              <Link to="/contact" className="block text-slate-400 hover:text-blue-400 transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2">
              <p className="text-slate-400 text-sm">Internship Programs</p>
              <p className="text-slate-400 text-sm">Skill Development</p>
              <p className="text-slate-400 text-sm">Project-Based Learning</p>
              <p className="text-slate-400 text-sm">Mentorship</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-slate-400 text-sm">+91 8247392437</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-slate-400 text-sm">ranbidgesoutionspvtltd@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-blue-400 mt-0.5" />
                <span className="text-slate-400 text-sm">
                 Ravindra Nagar,Narasaraopet,AndhraPradesh,India
                  522601
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2025 Ranbidge Solutions Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;