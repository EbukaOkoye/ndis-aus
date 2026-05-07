import { Heart, Shield, Sparkles, Users } from "lucide-react";

export const services = [
  {
    title: "Support Coordination",
    description:
      "Expert guidance to help you understand and implement your NDIS plan effectively.",
    icon: Users,
    href: "/services#support-coordination",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Psychosocial Recovery Coaching",
    description:
      "Specialised support for people with psychosocial disabilities to build resilience and hope.",
    icon: Heart,
    href: "/services#recovery-coaching",
    color: "bg-rose-50 text-rose-600",
  },
  {
    title: "Specialist Support Coordination",
    description:
      "Higher level support for complex situations, addressing complex barriers that affect your ability to access the right supports.",
    icon: Shield,
    href: "/services#specialist-coordination",
    color: "bg-amber-50 text-amber-600",
  },
  // {
  //   title: "Individualised Living Options",
  //   description:
  //     "Personalised living arrangements that suit your unique needs and preferences.",
  //   icon: Sparkles,
  //   href: "/services/ilo",
  //   color: "bg-emerald-50 text-emerald-600",
  // },
];

export const faqs = [
  {
    question: "What is NDIS Support Coordination?",
    answer:
      "Support coordination is a service that helps NDIS participants understand and use their funding to build their skills and connect with providers.",
  },
  {
    question: "How do I get Support Coordination in my plan?",
    answer:
      "You can request Support Coordination during your NDIS planning or review meeting if you feel you need help to implement your plan.",
  },
  {
    question: "Why choose Australian NDIS Services for support coordination?",
    answer:
      "We offer experienced coordinators, expert NDIS knowledge, clear communication, and a commitment to your goals.",
  },
  {
    question: "Do you provide services in my area?",
    answer:
      "We primarily serve the Adelaide and surrounding South Australia regions and are able to reach out to you anywhere in Australia, as we offer both in-person and remote support.",
  },
];

export const whyChoose = [
  {
    title: "Qualifications & Experience",
    desc: "All our staff have current NDIS,Police and Working with Children checks, as well as First Aid and CPR.",
  },
  {
    title: "NDIS Expertise",
    desc: "We stay up-to-date with the latest NDIS rules and guidelines to better serve you.",
  },
  {
    title: "Clear Communication",
    desc: "We explain complex NDIS jargon in simple, easy-to-understand language.",
  },
  {
    title: "Accessibility",
    desc: "we are able to come to you…",
  },
]

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Our Services", href: "/services" },
      // { name: "Blog & News", href: "/blog" },
      { name: "Contact Us", href: "/contact" },
      // { name: "Support Us", href: "/donation" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { name: "Support Coordination", href: "/services#support-coordination" },
      { name: "Psychosocial Recovery Coaching", href: "/services#recovery-coaching" },
      { name: "Specialist Support Coordination", href: "/services#specialist-coordination" },
      // { name: "Individualised Living Options", href: "/services/ilo" },
    ],
  },
];

export const coreValues = [
  {
    title: "Integrity",
    description:
      "We are honest, transparent, and ethical in everything we do, ensuring you can trust our guidance.",
    icon: Shield,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Empowerment",
    description:
      "We focus on building your skills and confidence so you can take control of your own journey.",
    icon: Sparkles,
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Compassion",
    description:
      "We approach every participant with empathy and understanding, recognising your unique situation.",
    icon: Heart,
    color: "bg-rose-50 text-rose-600",
  },
]

export const servicesServicesPage = [
  {
    id: "support-coordination",
    title: "Support Coordination",
    description:
      "When your NDIS plan is approved, you might receive funded support coordination to help you to use your plan to achieve your goals. Getting this type of funded support in your plan depends on your individual needs and circumstances, such as your disability or your personal situation. We can help you with:",
    icon: Users,
    img: "/about-small.png",
    href: "https://ndis.gov.au/participants/using-your-plan/who-can-help-start-your-plan/support-coordination",
    color: "bg-blue-50 text-blue-600",
    features: ["Understand and use your NDIS plan", "Build your ability to become more independent", "Access community and mainstream services", "Make the most of your funded supports"],
  },
  {
    id: "recovery-coaching",
    title: "Psychosocial Recovery Coaching",
    description:
      "Specialised support for people with psychosocial disabilities to build resilience and hope. We focus on your strengths and help you navigate the mental health system with:",
    icon: Heart,
    img: "/hands-together.jpeg",
    href: "https://www.ndis.gov.au/understanding/how-ndis-works/psychosocial-disability/psychosocial-disability-supports",
    pdfHref: "https://www.ndis.gov.au/media/6964/download?attachment",
    color: "bg-rose-50 text-rose-600",
    features: ["Resilience Building", "Mental Health Support", "Goal Setting", "Crisis Planning"],
  },
  {
    id: "specialist-coordination",
    title: "Specialist Support Coordination",
    description:
      "Specialist Support Coordination is a higher level of support coordination. It is for people whose situations are more complex and who need specialist support such as:",
    icon: Shield,
    img: "/wheelchair-play.jpeg",
    href: "https://www.ndis.gov.au/understanding/how-ndis-works/psychosocial-disability/psychosocial-disability-supports",
    color: "bg-amber-50 text-amber-600",
    features: ["Complex Case Management", "connect with people in your life to help you achieve your goals", "Specialist Liaison", "Crisis Intervention"],
  },
  // {
  //   id: "ilo",
  //   title: "Individualised Living Options",
  //   description: "Personalised living arrangements that suit your unique needs and preferences. We help you design and implement a living arrangement that works for you.",
  //   icon: Sparkles,
  //   href: "/services/ilo",
  //   color: "bg-emerald-50 text-emerald-600",
  //   features: ["Living Arrangement Design", "Personalised Support", "Independence Building", "Ongoing Monitoring"],
  // },
];

// https://ndis.gov.au/understanding
