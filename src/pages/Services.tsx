import { motion } from "motion/react";
import {
  ArrowRight,
  Users,
  Shield,
  Heart,
  Sparkles,
  CheckCircle2,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/src/lib/utils";
import { servicesServicesPage } from "../lib/dummyData";

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-40 flex items-center">
        {/* Background Image with Professional Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            // src="https://picsum.photos/seed/ndis-independence/1920/1080"
            src="/thumbnail_four.jpg"
            alt="NDIS Services and Independence"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Multi-layered overlay for depth and readability */}
          <div className="absolute inset-0 bg-white/80 md:bg-white/60" />
          <div className="absolute inset-0 bg-linear-to-b from-white via-white/80 to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mx-auto">
              <Sparkles size={14} />
              <span>Our Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1]">
              Expert NDIS Support{" "}
              <span className="text-primary">Tailored to You</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              We provide a range of specialised services designed to help you
              navigate the NDIS and achieve your goals. Discover how we can
              support your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="flex flex-col gap-20">
            {servicesServicesPage.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
                  index % 2 === 1 ? "lg:flex-row-reverse" : "",
                )}
              >
                <div
                  className={cn(
                    "flex flex-col gap-8",
                    index % 2 === 1 ? "lg:order-2" : "lg:order-1",
                  )}
                >
                  <div
                    className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg",
                      service.color,
                    )}
                  >
                    <service.icon size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">
                    {service.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-slate-700"
                      >
                        <CheckCircle2 size={18} className="text-primary" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Link
                      to={service.href}
                      target="_blank"
                      className="btn-primary px-8"
                    >
                      Learn More About {service.title}
                    </Link>
                  </div>
                </div>

                <div
                  className={cn(
                    "relative",
                    index % 2 === 1 ? "lg:order-1" : "lg:order-2",
                  )}
                >
                  <div className="aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Decorative elements */}
                  <div
                    className={cn(
                      "absolute -z-10 w-64 h-64 rounded-full blur-3xl opacity-20",
                      index % 2 === 1
                        ? "-top-10 -left-10 bg-primary"
                        : "-bottom-10 -right-10 bg-primary",
                    )}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="flex flex-col items-center text-center gap-4 mb-20">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Our Simple 4-Step Process
            </h2>
            <p className="text-slate-600 max-w-2xl">
              We make it easy to get the support you need. Here's how we work
              with you from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                desc: "We meet with you to understand your goals, needs, and NDIS plan.",
              },
              {
                step: "02",
                title: "Plan Analysis",
                desc: "We review your plan and identify the best ways to use your funding.",
              },
              {
                step: "03",
                title: "Provider Connection",
                desc: "We connect you with high-quality service providers that match your needs.",
              },
              {
                step: "04",
                title: "Ongoing Support",
                desc: "We provide continuous support and monitoring to ensure your goals are being met.",
              },
            ].map((item, index) => (
              <div
                key={item.step}
                className="relative p-8 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col gap-6"
              >
                <span className="text-5xl font-black text-primary/10 absolute top-6 right-6">
                  {item.step}
                </span>
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-lg relative z-10">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 relative z-10">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed relative z-10">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto p-12 rounded-3xl bg-[#035e9e] text-white flex flex-col lg:flex-row items-center gap-12">
            <div className="flex flex-col gap-6 grow text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold">
                Get in touch with our expert coordinators today!
              </h2>
              <p className="text-slate-400 text-lg">
                Our expert coordinators can help you design a support strategy
                that perfectly aligns with your goals and NDIS plan.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <a
                  href="tel:0415777143"
                  className="flex items-center gap-3 text-white font-bold"
                >
                  <Phone size={20} className="text-white" />
                  0415 777 143
                </a>
                <a
                  href="mailto:office@ausndisservices.com.au"
                  className="flex items-center gap-3 text-white font-bold"
                >
                  <Mail size={20} className="text-white" />
                  office@ausndisservices.com.au
                </a>
              </div>
            </div>
            <Link
              to="/contact"
              className="btn-primary px-10 py-4 text-lg shrink-0"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
