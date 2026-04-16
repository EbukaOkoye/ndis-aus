import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { footerLinks } from "../lib/dummyData";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-20 h-20 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/ndis_logo-removebg.png"
                  alt="Australian NDIS Services Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white leading-tight">
                  Australian NDIS Services
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              We are a NDIS-registered service provider providing services all
              over Australia.
              {/* Empowering people with disability of all ages to achieve their
              goals and live a fulfilling life through expert NDIS support
              coordination. */}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
            <div className="relative w-3/5 lg:w-11/12 transition-transform duration-300 group-hover:scale-105 flex items-center gap-2.5">
              <img
                src="/NDIS logo.png"
                alt="Australian NDIS Services Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
              <img
                src="/flags.png"
                alt="Australian NDIS Services Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col gap-6">
              <h3 className="text-lg font-bold text-white">{section.title}</h3>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0"
                      />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-white">Contact Info</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase font-bold">
                    Call Us
                  </span>
                  <a
                    href="tel:0415777143"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    0415 777 143
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase font-bold">
                    Email Us
                  </span>
                  <a
                    href="mailto:office@ausndisservices.com.au"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    office@ausndisservices.com.au
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase font-bold">
                    Location
                  </span>
                  <span className="text-sm">Adelaide, South Australia</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500 font-medium">
          <p>
            © {new Date().getFullYear()} Australian NDIS Services. All rights
            reserved.
          </p>
          {/* <div className="flex items-center gap-8">
            <Link
              to="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
