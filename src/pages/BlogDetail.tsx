import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { Calendar, User, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin, MessageSquare } from "lucide-react";

const blogPosts = [
  {
    id: "ndis-plan-review-tips",
    title: "Top 5 Tips for Your Next NDIS Plan Review",
    content: `
      <p>Preparing for an NDIS plan review can be stressful. Whether it's your first review or your fifth, it's important to go in prepared to ensure you get the best outcome for your goals. Here are our top tips to help you navigate the process with confidence.</p>
      
      <h2>1. Review Your Current Goals</h2>
      <p>Before your review meeting, take some time to look at your current goals. Have you achieved them? Are they still relevant? If your circumstances have changed, your goals might need to change too. Be clear about what you want to achieve in the next 12 to 24 months.</p>
      
      <h2>2. Gather Your Evidence</h2>
      <p>Evidence is key in the NDIS. Make sure you have up-to-date reports from your therapists, doctors, and other support providers. These reports should clearly state how the support helps you achieve your goals and why it is reasonable and necessary.</p>
      
      <h2>3. Think About Your Future Needs</h2>
      <p>Don't just think about what you need now; think about what you might need in the future. Are you planning to start a new course? Do you want to move into more independent living? Your plan should reflect your long-term aspirations as well as your immediate needs.</p>
      
      <h2>4. Bring a Support Person</h2>
      <p>You don't have to go to your review meeting alone. You can bring a family member, a friend, or your support coordinator. Having someone there to take notes and provide support can make the process much less daunting.</p>
      
      <h2>5. Be Clear and Specific</h2>
      <p>When talking about your needs, be as clear and specific as possible. Use examples of how your disability impacts your daily life and how specific supports can help you overcome those challenges. The more information the planner has, the better they can tailor your plan to your needs.</p>
      
      <p>At My Support Connection, we're here to help you prepare for your plan review. Our expert coordinators can help you gather evidence, refine your goals, and provide support during the meeting itself. Contact us today to find out how we can help.</p>
    `,
    image: "https://picsum.photos/seed/blog1/1200/600",
    date: "March 15, 2026",
    author: "Sarah Jenkins",
    category: "NDIS Tips",
    tags: ["NDIS", "Plan Review", "Support Coordination", "Goals"],
  },
  // ... other posts would be here
];

export default function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id) || blogPosts[0]; // Fallback to first post for demo

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24 flex items-center">
        {/* Background Image with Professional Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/ndis-care-detail/1920/1080"
            alt="NDIS Care Insights"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Multi-layered overlay for depth and readability */}
          <div className="absolute inset-0 bg-white/80 md:bg-white/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent" />
        </div>

        <div className="container relative z-10 max-w-4xl">
          <div className="flex flex-col gap-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-xs text-slate-500 font-medium uppercase tracking-widest">
                <span className="px-3 py-1 rounded-full bg-primary text-white font-bold">
                  {post.category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar size={14} className="text-primary" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User size={14} className="text-primary" />
                  <span>{post.author}</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="container max-w-4xl">
          <div className="flex flex-col gap-12">
            <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-xl border-8 border-white">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Social Share Sidebar */}
              <aside className="lg:col-span-1 flex lg:flex-col items-center gap-4 lg:sticky lg:top-32 h-fit">
                <span className="text-[10px] uppercase font-bold text-slate-400 lg:rotate-90 lg:mb-8 whitespace-nowrap">Share This</span>
                <button className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all">
                  <Facebook size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all">
                  <Twitter size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all">
                  <Linkedin size={18} />
                </button>
              </aside>

              {/* Main Content */}
              <div className="lg:col-span-11 prose prose-slate prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                
                <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap gap-2">
                  <span className="text-sm font-bold text-slate-900 mr-2 flex items-center gap-1">
                    <Tag size={16} className="text-primary" />
                    Tags:
                  </span>
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Author Bio */}
                <div className="mt-16 p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row items-center gap-8">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-lg">
                    <img src={`https://picsum.photos/seed/${post.author}/200/200`} alt={post.author} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex flex-col gap-2 text-center sm:text-left">
                    <h3 className="text-xl font-bold text-slate-900">{post.author}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Sarah is the Principal Support Coordinator at MYSC with over 10 years of experience in the disability sector. She is passionate about helping participants navigate the NDIS and achieve their goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Related Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col gap-4 p-4">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <img src={`https://picsum.photos/seed/related${i}/400/300`} alt="Related" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex flex-col gap-2 p-2">
                  <span className="text-[10px] uppercase font-bold text-primary tracking-widest">NDIS Guides</span>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight hover:text-primary transition-colors cursor-pointer">
                    How to Prepare for Your First NDIS Planning Meeting
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
