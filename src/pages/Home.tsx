import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Instagram,
  Facebook,
  Camera,
  Palette,
  Globe,
  Smartphone,
  TrendingUp,
  Users,
  Eye,
  Zap,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Star,
  ChevronDown,
  MessageSquare,
  BarChart3,
} from "lucide-react";

/* =============================================
   SOCIAL SPACE WEBSITE
   =============================================
   Brand Colors (from new logo):
   - Deep Navy:    #0a1628  (hero, footer, contact bg)
   - Electric Blue:#2563eb  (buttons, primary)
   - Blue Accent:  #60a5fa  (highlights, tags)
   - Dark Text:    #1e293b  (on light sections)
   - Light Bg:     #eff6ff  (alternate sections)

   Easy edits:
   - Update contact info in the Contact section
   - Add gallery images by replacing placeholder divs
   - Adjust package details in the Packages section
   - Add/remove services in the Services section
   ============================================= */

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* =============================================
   NAVBAR
   ============================================= */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Packages", href: "#packages" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a1628]/95 backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" onClick={() => scrollTo("#home")} className="flex items-center gap-3">
            <div className="bg-[#0a1628] rounded-xl p-1.5 border border-[#2563eb]/20">
              <img src="/logo.png" alt="Social Space Logo" className="h-9 w-auto" />
            </div>
            <span className="text-xl font-bold text-white">Social Space</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-white/70 hover:text-white font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="bg-[#2563eb] text-white px-5 py-2.5 rounded-full font-medium hover:bg-[#1d4ed8] transition-colors text-sm"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-[#0a1628] border-t border-white/10 ${isOpen ? "block" : "hidden"}`}>
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="block text-white/70 hover:text-white font-medium py-3 px-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
            className="block text-center bg-[#2563eb] text-white px-5 py-3 rounded-full font-medium hover:bg-[#1d4ed8] transition-colors mt-2"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}

/* =============================================
   HERO SECTION
   ============================================= */
function Hero() {
  const stats = [
    { icon: Users, value: "10K+", label: "Followers Grown" },
    { icon: Eye, value: "100K+", label: "Video Views" },
    { icon: Zap, value: "1M+", label: "Top Video Views" },
    { icon: TrendingUp, value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #060f23 0%, #0a1628 50%, #0f1f3d 100%)",
      }}
    >
      {/* Decorative shapes */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#2563eb]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#60a5fa]/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563eb]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center lg:text-left"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-[#2563eb]/20 text-[#60a5fa] border border-[#2563eb]/30 px-4 py-2 rounded-full text-sm font-medium mb-3 lg:mb-6">
              <Star size={16} fill="#60a5fa" />
              Full-Service Digital Agency
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3 lg:mb-6"
            >
              Elevate Your{" "}
              <span className="text-[#60a5fa]">Brand</span> in the{" "}
              <span className="bg-gradient-to-r from-[#60a5fa] to-[#2563eb] bg-clip-text text-transparent">Digital Space</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base lg:text-lg text-white/60 mb-4 lg:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              We help businesses grow through powerful social media marketing, stunning photography,
              professional design, and custom websites. We don't just do Social Media. Need pictures for an event? We got you covered.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6 lg:mb-12">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#2563eb] text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full font-semibold hover:bg-[#1d4ed8] transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-[#2563eb]/30"
              >
                Start Your Project <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 border-white/20 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center"
              >
                Our Services
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#2563eb]/20 text-[#60a5fa] mb-2">
                    <stat.icon size={20} />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Logo / Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#2563eb]/20 rounded-full blur-3xl scale-110" />
              <img
                src="/logo.png"
                alt="Social Space"
                className="relative w-full max-w-[220px] lg:max-w-md h-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* =============================================
   SERVICES SECTION
   ============================================= */
function Services() {
  const services = [
    {
      icon: Smartphone,
      title: "Social Media Marketing",
      description:
        "Full-service social media management across Instagram, Facebook, and TikTok. We handle content strategy, posting schedules, engagement, and growth tactics to build your audience.",
      features: ["Content Strategy", "Reels & Video Content", "Post Creation", "Audience Growth", "Analytics & Reporting"],
      color: "#2563eb",
    },
    {
      icon: Camera,
      title: "Photography",
      description:
        "Professional photography for events, graduations, senior photos, and special occasions. Capture your most important moments with stunning, high-quality images.",
      features: ["Event Photography", "Graduation Photos", "Senior Portraits", "Product Photography", "Lifestyle Shoots"],
      color: "#60a5fa",
    },
    {
      icon: Palette,
      title: "Logo & Graphic Design",
      description:
        "Custom logo creation and graphic design that makes your brand stand out. From business cards to social media graphics, we create visuals that tell your story.",
      features: ["Custom Logo Design", "Brand Identity", "Social Media Graphics", "Business Cards", "Marketing Materials"],
      color: "#2563eb",
    },
    {
      icon: Globe,
      title: "Website Creation & Setup",
      description:
        "Beautiful, responsive websites designed to convert visitors into customers. We handle everything from design to deployment, making your online presence shine.",
      features: ["Custom Web Design", "Responsive Development", "E-commerce Setup", "SEO Optimization", "Domain & Hosting Setup"],
      color: "#60a5fa",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-[#2563eb]/10 text-[#2563eb] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap size={16} />
            What We Do
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
            Services Built to <span className="text-[#2563eb]">Grow Your Business</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[#1e293b]/60 max-w-2xl mx-auto text-lg">
            From social media dominance to stunning visuals and powerful websites — we provide everything you need to succeed online.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative bg-[#eff6ff] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-[#2563eb]/10 overflow-hidden"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2 transition-transform group-hover:scale-150"
                style={{ backgroundColor: service.color }}
              />
              <div className="relative">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6"
                  style={{ backgroundColor: service.color }}
                >
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#1e293b] mb-3">{service.title}</h3>
                <p className="text-[#1e293b]/60 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm text-[#1e293b]/70">
                      <CheckCircle2 size={16} style={{ color: service.color }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =============================================
   PACKAGES SECTION
   ============================================= */
function Packages() {
  const packages = [
    {
      name: "Starter Content",
      price: "Contact for Price",
      description: "Perfect for small businesses starting their social journey",
      features: [
        "4 Reels (Instagram/Facebook/TikTok)",
        "8 Static Posts",
        "Full Content Strategy & Calendar",
        "Full Content Creation & Editing",
        "Analytics Reports",
        "Ads Management",
      ],
      highlighted: false,
    },
    {
      name: "Growth Engine",
      price: "Contact for Price",
      description: "Our most popular package for serious growth",
      features: [
        "8 Reels (Instagram/Facebook/TikTok)",
        "12 Static Posts",
        "Full Content Strategy & Calendar",
        "Full Content Creation & Editing",
        "Hashtag Research & Optimization",
        "Ads Management",
        "Revisions if needed",
        "Analytics Reports",
        "Engagement Management",
        "Influencer Outreach",
      ],
      highlighted: true,
    },
    {
      name: "Total Domination",
      price: "Contact for Price",
      description: "Complete social media takeover for maximum impact",
      features: [
        "12 Reels (Instagram/Facebook/TikTok)",
        "16 Static Posts",
        "Full Content Strategy & Calendar",
        "Full Content Creation & Editing",
        "Hashtag Research & Optimization",
        "Advanced Analytics & Insights",
        "Ads Management",
        "Revisions if needed",
        "Engagement Management",
        "Influencer Outreach",
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="packages" className="py-24 bg-[#eff6ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-[#2563eb]/10 text-[#2563eb] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BarChart3 size={16} />
            Pricing
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
            Social Media <span className="text-[#2563eb]">Packages</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[#1e293b]/60 max-w-2xl mx-auto text-lg">
            Choose a package that fits your goals. All packages include our proven strategies that have generated millions of views.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:shadow-xl ${
                pkg.highlighted
                  ? "bg-[#0a1628] text-white shadow-2xl shadow-[#2563eb]/20 scale-105 md:scale-110 z-10 border border-[#2563eb]/30"
                  : "bg-white border border-[#2563eb]/10"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2563eb] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <h3 className={`text-xl font-bold mb-2 ${pkg.highlighted ? "text-white" : "text-[#1e293b]"}`}>
                {pkg.name}
              </h3>
              <p className={`text-sm mb-4 ${pkg.highlighted ? "text-white/70" : "text-[#1e293b]/50"}`}>
                {pkg.description}
              </p>
              <div className="mb-6">
                <span className={`text-3xl font-bold ${pkg.highlighted ? "text-white" : "text-[#2563eb]"}`}>
                  {pkg.price}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-sm">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#60a5fa]"
                    />
                    <span className={pkg.highlighted ? "text-white/80" : "text-[#1e293b]/70"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`block text-center py-3 rounded-full font-semibold transition-all ${
                  pkg.highlighted
                    ? "bg-[#2563eb] text-white hover:bg-[#1d4ed8]"
                    : "bg-[#0a1628] text-white hover:bg-[#0f1f3d]"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =============================================
   CONTACT SECTION
   ============================================= */
function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    if (!endpoint) { setStatus("error"); return; }
    setStatus("loading");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "331-203-4179",
      href: "tel:3312034179",
    },
    {
      icon: Mail,
      label: "Email",
      value: "socialspace.us@gmail.com",
      href: "mailto:socialspace.us@gmail.com",
    },
    {
      icon: MapPin,
      label: "Service Area",
      value: "Chicagoland Area",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24" style={{ background: "linear-gradient(135deg, #060f23 0%, #0a1628 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-white/10 text-[#60a5fa] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MessageSquare size={16} />
            Get In Touch
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let's Create Something <span className="text-[#60a5fa]">Amazing</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-white/60 max-w-2xl mx-auto text-lg">
            Ready to grow your brand? Reach out and let's discuss how we can help you dominate the digital space.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <a
                  key={i}
                  href={info.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group border border-white/5"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#2563eb]/20 flex items-center justify-center text-[#60a5fa] group-hover:bg-[#2563eb] group-hover:text-white transition-all">
                    <info.icon size={22} />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">{info.label}</p>
                    <p className="text-white font-semibold">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="mt-10 p-6 rounded-xl bg-white/5 border border-white/5">
              <h4 className="text-white font-bold mb-4">Why Work With Us?</h4>
              <ul className="space-y-3">
                {[
                  "Proven track record with 10K+ follower pages",
                  "Videos reaching 1M+ views",
                  "Full-service from strategy to execution",
                  "Personalized approach for every client",
                  "Not just for Social Media, we do photography, design, and websites",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                    <CheckCircle2 size={16} className="text-[#60a5fa] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#1e293b] mb-2">Message Sent!</h3>
                <p className="text-[#1e293b]/60">We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm text-[#2563eb] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-[#1e293b] mb-2">Send a Message</h3>
                {status === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
                    Something went wrong. Please try again or email us directly at{" "}
                    <a href="mailto:socialspace.us@gmail.com" className="underline font-medium">
                      socialspace.us@gmail.com
                    </a>
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-[#1e293b] mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[#2563eb]/20 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all text-[#1e293b]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1e293b] mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[#2563eb]/20 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all text-[#1e293b]"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1e293b] mb-1">Service Interest</label>
                  <select
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[#2563eb]/20 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all text-[#1e293b] bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="social-media">Social Media Marketing</option>
                    <option value="photography">Photography</option>
                    <option value="design">Logo & Graphic Design</option>
                    <option value="website">Website Creation</option>
                    <option value="other">Something Else</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1e293b] mb-1">Message</label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[#2563eb]/20 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all text-[#1e293b] resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#2563eb] text-white py-4 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>Send Message <ArrowRight size={18} /></>
                  )}
                </button>
                <p className="text-xs text-[#1e293b]/40 text-center">
                  You can also reach us directly at{" "}
                  <a href="tel:3312034179" className="text-[#2563eb] hover:underline">
                    331-203-4179
                  </a>{" "}
                  or{" "}
                  <a href="mailto:socialspace.us@gmail.com" className="text-[#2563eb] hover:underline">
                    socialspace.us@gmail.com
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =============================================
   FOOTER
   ============================================= */
function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050d1a] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#0a1628] rounded-xl p-1.5 border border-[#2563eb]/20">
                <img src="/logo.png" alt="Social Space" className="h-8 w-auto" />
              </div>
              <span className="text-xl font-bold">Social Space</span>
            </div>
            <p className="text-white/50 max-w-sm leading-relaxed">
              Your full-service digital partner. We build brands that stand out, create content that converts,
              and design experiences that people remember.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-[#60a5fa]">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "Packages", href: "#packages" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-[#60a5fa]">Services</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>Social Media Marketing</li>
              <li>Photography</li>
              <li>Logo & Graphic Design</li>
              <li>Website Creation</li>
              <li>Content Strategy</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Social Space. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/socialspace.us"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#60a5fa] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61589301147463"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#60a5fa] transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =============================================
   MAIN HOME PAGE
   ============================================= */
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      <Navbar />
      <Hero />
      <Services />
      <Packages />
      <Contact />
      <Footer />
    </div>
  );
}
