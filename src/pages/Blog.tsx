import { motion } from "motion/react";
import { ArrowRight, Calendar, User, Tag, Search, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: "ndis-plan-review-tips",
    title: "Top 5 Tips for Your Next NDIS Plan Review",
    excerpt: "Preparing for an NDIS plan review can be stressful. Here are our top tips to help you get the best outcome for your goals.",
    image: "https://picsum.photos/seed/blog1/800/600",
    date: "March 15, 2026",
    author: "Sarah Jenkins",
    category: "NDIS Tips",
  },
  {
    id: "understanding-support-coordination",
    title: "What is Support Coordination and Why Do You Need It?",
    excerpt: "Support coordination is a key service in many NDIS plans. Learn how it can help you make the most of your funding.",
    image: "https://picsum.photos/seed/blog2/800/600",
    date: "March 10, 2026",
    author: "Michael Chen",
    category: "Guides",
  },
  {
    id: "psychosocial-recovery-coaching-explained",
    title: "Psychosocial Recovery Coaching: A Strengths-Based Approach",
    excerpt: "Discover how recovery coaching can support your mental health journey and build resilience through a strengths-based approach.",
    image: "https://picsum.photos/seed/blog3/800/600",
    date: "March 5, 2026",
    author: "Emma Thompson",
    category: "Mental Health",
  },
  {
    id: "ilo-living-options",
    title: "Individualised Living Options (ILO): Designing Your Home Life",
    excerpt: "Learn about the different ways ILO can help you design a living arrangement that suits your unique needs and preferences.",
    image: "https://picsum.photos/seed/blog4/800/600",
    date: "February 28, 2026",
    author: "David Wilson",
    category: "Living Options",
  },
  {
    id: "navigating-ndis-jargon",
    title: "A Beginner's Guide to Navigating NDIS Jargon",
    excerpt: "The NDIS can be full of complex terms. We break down the most common jargon to help you understand your plan better.",
    image: "https://picsum.photos/seed/blog5/800/600",
    date: "February 20, 2026",
    author: "Sarah Jenkins",
    category: "Guides",
  },
  {
    id: "community-participation-benefits",
    title: "The Benefits of Increased Community Participation",
    excerpt: "Engaging with your community can have a positive impact on your well-being. Here's how to get involved with your NDIS plan.",
    image: "https://picsum.photos/seed/blog6/800/600",
    date: "February 15, 2026",
    author: "Michael Chen",
    category: "Well-being",
  },
];

const categories = ["All", "NDIS Tips", "Guides", "Mental Health", "Living Options", "Well-being"];

export default function Blog() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-40 flex items-center">
        {/* Background Image with Professional Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/ndis-community-news/1920/1080"
            alt="NDIS Community News"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Multi-layered overlay for depth and readability */}
          <div className="absolute inset-0 bg-white/80 md:bg-white/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mx-auto">
              <Calendar size={14} />
              <span>Blog & News</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1]">
              Insights, Tips, and <span className="text-primary">NDIS Updates</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Stay informed with the latest news, expert tips, and helpful guides to help you navigate your NDIS journey with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-4 flex flex-col gap-10">
              {/* Search */}
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col gap-6">
                <h3 className="text-lg font-bold text-slate-900">Search Articles</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              {/* Categories */}
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col gap-6">
                <h3 className="text-lg font-bold text-slate-900">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="p-8 rounded-2xl bg-primary text-white flex flex-col gap-6">
                <h3 className="text-lg font-bold">Subscribe to our Newsletter</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Get the latest NDIS updates and expert tips delivered straight to your inbox.
                </p>
                <form className="flex flex-col gap-3">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:bg-white/20"
                  />
                  <button className="w-full py-3 rounded-lg bg-white text-primary font-bold hover:bg-slate-100 transition-colors">
                    Subscribe Now
                  </button>
                </form>
              </div>
            </aside>

            {/* Posts Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    <Link to={`/blog/${post.id}`} className="aspect-[16/9] overflow-hidden relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-wider">
                          {post.category}
                        </span>
                      </div>
                    </Link>
                    <div className="p-8 flex flex-col gap-4">
                      <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} className="text-primary" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User size={14} className="text-primary" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <Link to={`/blog/${post.id}`} className="text-xl font-bold text-slate-900 hover:text-primary transition-colors leading-tight">
                        {post.title}
                      </Link>
                      <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all mt-2">
                        Read More <ArrowRight size={16} />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-16 flex justify-center items-center gap-2">
                <button className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all">
                  <ChevronRight size={20} className="rotate-180" />
                </button>
                <button className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center font-bold">1</button>
                <button className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all font-bold">2</button>
                <button className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all font-bold">3</button>
                <button className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
