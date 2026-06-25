import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

export default function Portfolio() {
  return (
    <main className="min-h-screen pt-20 bg-offwhite dark:bg-[#0B0F19] relative">
      {/* Global subtle grid background for the whole page */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--radial-grid-color) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <Navbar />
      <section className="py-16 text-center px-4 sm:px-6 lg:px-8 bg-transparent relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-500 dark:text-gray-400">Showcase of our recent projects and client success stories</p>
        </div>
      </section>
      <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-transparent relative z-10 min-h-[400px]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {['All', 'Website', 'E-commerce', 'Mobile App', 'Education'].map((cat) => (
              <button 
                key={cat} 
                className={`px-8 py-3 rounded-full border transition-colors font-medium ${
                  cat === 'All' 
                    ? 'bg-navy text-white border-navy dark:bg-white dark:text-[#0B0F19] dark:border-white' 
                    : 'border-gray-200 dark:border-gray-800 hover:border-primary hover:text-primary text-gray-600 dark:text-gray-400 dark:hover:border-primary dark:hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="text-center py-20 bg-white dark:bg-[#151926] rounded-3xl border border-gray-100 dark:border-gray-850">
            <p className="text-gray-400 dark:text-gray-500 text-lg">No projects found in this category</p>
          </div>
        </div>
      </section>
      <CTABanner />
      <Footer />
    </main>
  );
}
