import { motion } from "motion/react";
import {
  CheckCircle2,
  Users,
  Shield,
  Heart,
  Sparkles,
  Target,
  Eye,
  Award,
  Goal,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/src/lib/utils";
import { coreValues } from "../lib/dummyData";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-40 flex items-center min-h-[60vh]">
        {/* Background Image with Professional Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/ndis-team-dedication/1920/1080"
            alt="NDIS Team Dedication"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Subtle dark overlay for readability */}
          <div className="absolute inset-0 bg-slate-900/60" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-white text-xs font-bold uppercase tracking-wider w-fit">
                <Users size={14} className="text-primary" />
                <span>About Australian NDIS Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1]">
                Empowering people of all{" "}
                <span className="text-primary">
                  {" "}
                  Ages, Abilities and Cultures
                </span>
              </h1>
              <p className="text-lg text-slate-200 leading-relaxed max-w-xl">
                Our qualified Social Workers have been working across the disability
                and mental health sectors for over 10 years with people from all
                walks of life. All our staff have current NDIS, Police, and Working
                with Children checks, as well as First Aid and CPR. We are passionate
                about getting the best results to help you reach your goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-4/3">
                <img
                  // src="https://picsum.photos/seed/about-hero/800/600"
                  src="/about-small.png"
                  alt="Our Team"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 max-w-60">
                <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center shrink-0">
                  <Award size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-900">
                    10+ Years
                  </span>
                  <span className="text-xs text-slate-500">
                    Combined Experience
                  </span>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white lg:w-9/12 lg:mx-auto">
        <p className="text-slate-600 leading-relaxed lg:text-2xl font-medium">
          Australian NDIS Services is a fast growing community that
          values people of all ages, abilities and cultures. We
          acknowledge the Traditional Owners and Custodians of
          Country throughout Australia, honouring their ongoing
          connection to land, waters, and community. We provide
          services to NDIS participants, and we can meet with
          you to discuss your support needs.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="p-10 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col gap-6">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To help you achieve your NDIS goals and live a healthy,
                independent life. We value a person-centred approach, ensuring
                that support is tailored to each individual's needs
              </p>
            </div>
            <div className="p-10 rounded-3xl bg-primary text-white flex flex-col gap-6">
              <div className="w-16 h-16 bg-white/10 text-white rounded-2xl flex items-center justify-center">
                <Eye size={32} />
              </div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="text-white/80 leading-relaxed">
                To be an organisation set apart from others in our commitment to
                providing the best possible support so that every participant
                can live their best, most independent, meaningful and fulfilling
                life
              </p>
            </div>
            <div className="p-10 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col gap-6">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                <img src="/ndis_logo-removebg.png" alt="logo" width={102} height={102} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Our Logo</h2>
              <p className="text-slate-600 leading-relaxed">
                Shows the process of step-by-step growth, which is the key to achieving your goals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">
              Our Core Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              What Drives Us Every Day
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col gap-6"
              >
                <div
                  className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center",
                    value.color,
                  )}
                >
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="section-padding bg-white">
        <div className="container">
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">
              Meet Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              The People Behind Australian NDIS Services
            </h2>
            <p className="text-slate-600 max-w-2xl">
              Our team consists of highly qualified and experienced support
              coordinators who are passionate about making a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Jenkins",
                role: "Principal Support Coordinator",
                image: "https://picsum.photos/seed/sarah/400/500",
              },
              {
                name: "Michael Chen",
                role: "Psychosocial Recovery Coach",
                image: "https://picsum.photos/seed/michael/400/500",
              },
              {
                name: "Emma Thompson",
                role: "Specialist Support Coordinator",
                image: "https://picsum.photos/seed/emma/400/500",
              },
              {
                name: "David Wilson",
                role: "Support Coordinator",
                image: "https://picsum.photos/seed/david/400/500",
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col gap-4"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-white border border-slate-100 shadow-xl flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
            <div className="flex flex-col gap-4 flex-grow">
              <h2 className="text-3xl font-bold text-slate-900">
                Want to join our team?
              </h2>
              <p className="text-slate-600">
                We are always looking for passionate and experienced individuals
                to join our growing team of support coordinators.
              </p>
            </div>
            <Link to="/contact" className="btn-primary px-8 py-4 shrink-0">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}
