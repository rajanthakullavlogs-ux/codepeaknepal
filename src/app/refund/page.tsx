import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LEGAL_CONTENT } from "@/data/content";

export default function Refund() {
  return (
    <main className="min-h-screen pt-20 bg-offwhite">
      <Navbar />
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">Refund Policy</h1>
          <p className="text-lg text-gray-500 mb-8">We are committed to customer satisfaction. Please review our refund policy below.</p>
          <div className="space-y-12">
            {LEGAL_CONTENT.refund.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold text-navy mb-4">{section.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">{section.content.replace(/\. /g, '.\n\n')}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-8 bg-offwhite rounded-2xl">
            <h4 className="font-bold text-navy mb-2">Contact for Refunds</h4>
            <p className="text-gray-600">Email: info@codepeaknepal.com</p>
            <p className="text-gray-600">Phone: +977 9743568595</p>
          </div>
          <p className="mt-8 text-sm text-gray-400">Last Updated: February 2026</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
