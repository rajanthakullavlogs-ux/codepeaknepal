import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

export default function Portfolio() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <section className="py-16 text-center px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-500">Showcase of our recent projects and client success stories</p>
        </div>
      </section>
      <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-white min-h-[400px]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {['All', 'Website', 'E-commerce', 'Mobile App', 'Education'].map((cat) => (
              <button key={cat} className={`px-8 py-3 rounded-full border transition-colors font-medium ${cat === 'All' ? 'bg-navy text-white border-navy' : 'border-gray-200 hover:border-primary hover:text-primary text-gray-600'}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="text-center py-20 bg-offwhite rounded-3xl border border-gray-100">
            <p className="text-gray-400 text-lg">No projects found in this category</p>
          </div>
        </div>
      </section>
      <CTABanner />
      <Footer />
    </main>
  );
}
