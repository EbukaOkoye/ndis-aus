import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Shield,
  MessageSquare,
  Heart,
  Sparkles,
  HelpCircle,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/src/lib/utils";
import { faqs, services, whyChoose } from "../lib/dummyData";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-40 flex items-center">
        {/* Background Image with Professional Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/ndis-img.jpg"
            alt="NDIS Support and Care"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Multi-layered overlay for depth and readability */}
          <div className="absolute inset-0 bg-white/80 md:bg-white/60" />
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/80 to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                <Sparkles size={14} />
                <span>Empowering Your Journey</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1]">
                Expert NDIS{" "}
                <span className="text-primary">Support Coordination</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                We help you navigate the NDIS with confidence, connecting you to
                the right supports to achieve your goals and live a fulfilling
                life.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Link to="/contact" className="btn-primary py-4 text-lg">
                  Get Started Today
                </Link>
                <Link
                  to="/services"
                  className="btn-outline px-8 py-4 text-lg"
                >
                  Explore Services
                </Link>
                <a
                  href="https://www.ndis.gov.au/understanding"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline bg-white text-base"
                >
                  Understanding the NDIS
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-square">
                <img
                  src="/ndis_logo.png"
                  alt="Support Coordination"
                  className="w-full h-full object-cover bg-white"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              How We Can Support You
            </h2>
            <p className="text-slate-600 max-w-2xl">
              We can provide Recovery Coach services, Support Coordination or
              Specialist Support Coordination, depending on your needs and the
              type of funding you have been allocated.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                    service.color,
                  )}
                >
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  to={service.href}
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col gap-8">
              <span className="text-primary font-bold uppercase tracking-widest text-sm">
                Why Choose Australian NDIS Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Expert Guidance with a Personal Touch
              </h2>
              <p className="text-slate-600 leading-relaxed">
                At Australian NDIS Services, we believe everyone deserves the
                opportunity to live their best life. Our team is dedicated to
                providing the highest quality support coordination.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyChoose.map((item) => (
                  <div key={item.title} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-primary">
                      <CheckCircle2 size={18} />
                      <span className="font-bold text-slate-900">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 pl-7">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* <div className="pt-4">
                <Link to="/about" className="btn-primary px-8">
                  About Our Team
                </Link>
              </div> */}
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/rhdp.jpg"
                  alt="Our Team"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-2xl border border-slate-100 hidden sm:block max-w-[280px]">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Sparkles
                        key={i}
                        size={16}
                        className="text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm italic text-slate-600">
                    "The team at Australian NDIS Services has been instrumental in helping me
                    navigate my NDIS plan. I couldn't have done it without
                    them."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                      <img
                        src="https://picsum.photos/seed/avatar1/100/100"
                        alt="Client"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-900">
                        Sarah Jenkins
                      </span>
                      <span className="text-[10px] text-slate-500 uppercase font-bold">
                        NDIS Participant
                      </span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container max-w-4xl">
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">
              Got Questions?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group p-6 rounded-xl border border-slate-100 bg-slate-50 open:bg-white open:shadow-lg transition-all duration-300"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-slate-900 pr-8">
                    {faq.question}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center group-open:rotate-180 transition-transform">
                    <HelpCircle size={18} className="text-primary" />
                  </div>
                </summary>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/ndis-community-support/1920/1080"
            alt="NDIS Community Support"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" />
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-6"
              >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider w-fit">
                  <Sparkles size={14} className="text-amber-400" />
                  <span>Connect With Us</span>
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                  Take the Next Step in Your{" "}
                  <span className="text-amber-400">NDIS Journey</span>
                </h2>
                <p className="text-lg text-white/90 leading-relaxed max-w-xl">
                  Ready to experience expert support coordination? Fill out the
                  form, and our dedicated team will get back to you within 24
                  hours to discuss how we can help you achieve your goals.
                </p>

                <div className="flex flex-col gap-4 mt-4">
                  {[
                    "Personalised Support Plans",
                    "Expert NDIS Navigation",
                    "Dedicated Case Management",
                    "Community Connection",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Glassmorphism Form Container */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <MessageSquare className="text-amber-400" />
                  Book an Appointment
                </h3>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-white/70 uppercase tracking-wider ml-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Paul"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-white/70 uppercase tracking-wider ml-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Smith"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-white/70 uppercase tracking-wider ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="paul@example.com"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-white/70 uppercase tracking-wider ml-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="0400 000 000"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-white/70 uppercase tracking-wider ml-1">
                      Services Required
                    </label>
                    <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-all appearance-none">
                      <option className="bg-slate-900">
                        Support Coordination
                      </option>
                      <option className="bg-slate-900">
                        Specialist Support Coordination
                      </option>
                      <option className="bg-slate-900">
                        Recovery Coaching
                      </option>
                      <option className="bg-slate-900">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-white/70 uppercase tracking-wider ml-1">
                      How Did You Find Us?
                    </label>
                    <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-all appearance-none">
                      <option className="bg-slate-900">Social Media</option>
                      <option className="bg-slate-900">Google Search</option>
                      <option className="bg-slate-900">Word of Mouth</option>
                      <option className="bg-slate-900">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-xs font-bold text-white/70 uppercase tracking-wider ml-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us how we can help you..."
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-all resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="md:col-span-2 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-4 rounded-xl transition-all shadow-lg shadow-amber-400/20 active:scale-[0.98]"
                  >
                    Submit Appointment Request
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container">
          <div className="relative rounded-3xl bg-primary overflow-hidden px-8 py-16 md:py-24 text-center text-white">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-8">
              <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
                Contact us today for a free consultation and discover how our
                expert support coordinators can help you achieve your goals.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-primary px-10 py-4 rounded-md font-bold text-lg hover:bg-slate-100 transition-colors"
                >
                  Make an Appointment
                </Link>
                <a
                  href="tel:0405610898"
                  className="flex items-center gap-3 px-10 py-4 rounded-md border-2 border-white/30 font-bold text-lg hover:bg-white/10 transition-colors"
                >
                  <Phone size={20} />
                  0415 777 143
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
