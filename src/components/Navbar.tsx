import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Heart } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import AppointmentModal from "./AppointmentModal";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  // { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  // { name: "Donate", href: "/donation" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="relative w-24 h-14 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/ndis_logo_love.png"
                alt="Australian NDIS Services Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <a
              href="tel:0405610898"
              className="flex items-center gap-2 hover:text-white/80 transition-colors"
            >
              <Phone size={14} />
              <span>0415 777 143</span>
            </a>
            <a
              href="mailto:office@ausndisservices.com.au"
              className="flex items-center gap-2 hover:text-white/80 transition-colors"
            >
              <Mail size={14} />
              <span>office@ausndisservices.com.au</span>
            </a>
          </div>
          {/* <div className="flex items-center gap-4">
            <Link
              to="/donation"
              className="flex items-center gap-2 hover:text-white/80 transition-colors font-medium"
            >
              <Heart size={14} className="fill-white" />
              <span>Support Our Mission</span>
            </Link>
          </div> */}
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={cn(
          "transition-all duration-300 py-4",
          scrolled ? "bg-white shadow-md py-3" : "bg-white/90 backdrop-blur-md",
        )}
      >
        <div className="container flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/ndis_logo-removebg.png"
                alt="Australian NDIS Services Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-extrabold text-primary leading-tight tracking-tight">
                Australian NDIS Services
              </span>
              {/* <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold leading-none">
                My Support Connection
              </span> */}
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-slate-600",
                )}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary py-2 px-5 text-sm cursor-pointer"
            >
              Make an Appointment
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-slate-600 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-lg font-medium py-2 transition-colors",
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-slate-600",
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="btn-primary mt-4 text-center">
                Make an Appointment
              </Link>
              <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-4 text-sm text-slate-500">
                <a href="tel:0405610898" className="flex items-center gap-3">
                  <Phone size={18} className="text-primary" />
                  <span>0405 610 898</span>
                </a>
                <a
                  href="mailto:office@ausndisservices.com.au"
                  className="flex items-center gap-3"
                >
                  <Mail size={18} className="text-primary" />
                  <span>office@ausndisservices.com.au</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  );
}
