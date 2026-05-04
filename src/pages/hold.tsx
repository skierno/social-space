
/* =============================================
   GALLERY SECTION (Placeholder)
   =============================================
   INSTRUCTIONS FOR ADDING IMAGES:
   1. Add your images to the public/gallery/ folder
   2. Update the galleryItems array below with:
      - src: "/gallery/your-image.jpg"
      - title: "Your Title"
      - category: "Social Media" | "Photography" | "Design" | "Website"
   ============================================= */
function Gallery() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Social Media", "Photography", "Design", "Website"];

  // PLACEHOLDER: Replace these with your actual images
  const galleryItems = [
    { src: "", title: "Instagram Campaign", category: "Social Media" },
    { src: "", title: "TikTok Viral Video", category: "Social Media" },
    { src: "", title: "Graduation Session", category: "Photography" },
    { src: "", title: "Senior Portraits", category: "Photography" },
    { src: "", title: "Brand Logo Design", category: "Design" },
    { src: "", title: "Social Media Graphics", category: "Design" },
    { src: "", title: "Business Website", category: "Website" },
    { src: "", title: "E-commerce Store", category: "Website" },
  ];

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-[#61adc2]/15 text-[#25567d] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Image size={16} />
            Portfolio
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-[#464646] mb-4">
            Our <span className="text-[#25567d]">Work</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[#464646]/70 max-w-2xl mx-auto text-lg">
            Browse our portfolio of successful campaigns, stunning photography, and creative designs.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-[#25567d] text-white shadow-md"
                  : "bg-[#f0f7fa] text-[#464646] hover:bg-[#61adc2]/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item, i) => (
            <motion.div
              key={i}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="group relative aspect-square rounded-xl overflow-hidden bg-[#f0f7fa] border border-[#61adc2]/10"
            >
              {item.src ? (
                <>
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#25567d]/0 group-hover:bg-[#25567d]/70 transition-all duration-300 flex items-end">
                    <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-semibold">{item.title}</p>
                      <p className="text-white/80 text-sm">{item.category}</p>
                    </div>
                  </div>
                </>
              ) : (
                /* Placeholder - shows when no image is set */
                <div className="w-full h-full flex flex-col items-center justify-center text-[#61adc2]/40">
                  <Image size={48} />
                  <p className="mt-2 text-sm font-medium">{item.title}</p>
                  <p className="text-xs">Add image: public/gallery/</p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Instructions for adding images */}
        <div className="mt-12 bg-[#f0f7fa] rounded-xl p-6 border border-[#61adc2]/20">
          <h4 className="font-bold text-[#25567d] mb-2 flex items-center gap-2">
            <Megaphone size={18} />
            How to Add Your Gallery Images
          </h4>
          <ol className="text-sm text-[#464646]/70 space-y-1 list-decimal list-inside">
            <li>Create a folder named <code className="bg-white px-1 py-0.5 rounded text-[#25567d] font-mono">gallery</code> inside the <code className="bg-white px-1 py-0.5 rounded text-[#25567d] font-mono">public</code> folder</li>
            <li>Add your images to that folder (e.g., <code className="bg-white px-1 py-0.5 rounded text-[#25567d] font-mono">public/gallery/photo1.jpg</code>)</li>
            <li>Open <code className="bg-white px-1 py-0.5 rounded text-[#25567d] font-mono">src/pages/Home.tsx</code> and find the <code className="bg-white px-1 py-0.5 rounded text-[#25567d] font-mono">galleryItems</code> array</li>
            <li>Replace the empty <code className="bg-white px-1 py-0.5 rounded text-[#25567d] font-mono">src: ""</code> with your image path like <code className="bg-white px-1 py-0.5 rounded text-[#25567d] font-mono">src: "/gallery/photo1.jpg"</code></li>
          </ol>
        </div>
      </div>
    </section>
  );
}


