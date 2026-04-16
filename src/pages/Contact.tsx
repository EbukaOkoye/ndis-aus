import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-40 flex items-center">
        {/* Background Image with Professional Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/ndis-support-connection/1920/1080"
            alt="NDIS Support Connection"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Multi-layered overlay for depth and readability */}
          <div className="absolute inset-0 bg-white/80 md:bg-white/45" />
          <div className="absolute inset-0 bg-linear-to-b from-white via-white/80 to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mx-auto">
              <MessageSquare size={14} />
              <span>Contact Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1]">
              Get in Touch <span className="text-primary">With Our Team</span>
            </h1>
            <p className="text-lg text-slate-900 font-semibold leading-relaxed">
              Have questions about our services or need help navigating the
              NDIS? We're here to help. Contact us today for a free
              consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-12">
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl font-bold text-slate-900">
                  Contact Information
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  We're always happy to hear from you. Feel free to reach out
                  via phone, email, or by filling out the contact form.
                </p>
              </div>

              <div className="flex flex-col gap-8">
                {[
                  {
                    icon: Phone,
                    title: "Call Us",
                    value: "0415 777 143",
                    href: "tel:0415777143",
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    value: "office@ausndisservices.com.au",
                    href: "mailto:office@ausndisservices.com.au",
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    value: "Adelaide, South Australia",
                    href: "#",
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    value: "Mon - Fri: 9:00 AM - 5:00 PM",
                    href: "#",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-6 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <item.icon size={28} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        {item.title}
                      </span>
                      <a
                        href={item.href}
                        className="text-lg font-bold text-slate-900 hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              {/* <div className="aspect-video rounded-3xl overflow-hidden shadow-xl border-8 border-slate-50 relative group">
                <img
                  src="https://picsum.photos/seed/map/800/600"
                  alt="Map"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                  <div className="bg-white px-6 py-3 rounded-full shadow-xl flex items-center gap-3">
                    <MapPin size={20} className="text-primary" />
                    <span className="font-bold text-slate-900">
                      Find Us in Adelaide
                    </span>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-10 md:p-16 rounded-3xl bg-slate-50 border border-slate-100 shadow-xl">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center gap-8 py-12"
                  >
                    <div className="w-24 h-24 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-lg">
                      <CheckCircle2 size={48} />
                    </div>
                    <div className="flex flex-col gap-4">
                      <h2 className="text-3xl font-bold text-slate-900">
                        Message Sent!
                      </h2>
                      <p className="text-slate-600 max-w-sm">
                        Thank you for reaching out. Our team will review your
                        message and get back to you as soon as possible.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-primary px-8"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                      <h2 className="text-3xl font-bold text-slate-900">
                        Send a Message
                      </h2>
                      <p className="text-slate-500">
                        Fill out the form below and we'll get back to you
                        shortly.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-slate-700">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Paul Smith"
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-slate-700">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="paul@example.com"
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-slate-700">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="0400 000 000"
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-slate-700">
                          Service Interested In
                        </label>
                        <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white">
                          <option>Support Coordination</option>
                          <option>Psychosocial Recovery Coaching</option>
                          <option>Specialist Support Coordination</option>
                          <option>Other Enquiry</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-slate-700">
                        Your Message
                      </label>
                      <textarea
                        rows={5}
                        required
                        placeholder="How can we help you?"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn-primary py-4 text-lg flex items-center justify-center gap-3 group shadow-lg shadow-primary/20"
                    >
                      <span>Send Message</span>
                      <Send
                        size={20}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
