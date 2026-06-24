"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, ArrowRight, MessageSquare, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    { icon: <Phone className="w-6 h-6" />, title: "Phone", desc: "Mon-Fri from 9am to 6pm.", value: "+977 9743568595" },
    { icon: <Mail className="w-6 h-6" />, title: "Email", desc: "We'll respond within 24 hours.", value: "info@codepeaknepal.com" },
    { icon: <MessageCircle className="w-6 h-6" />, title: "WhatsApp", desc: "Chat instantly with our team.", value: "+977 9743568595" },
    { icon: <MapPin className="w-6 h-6" />, title: "Our Location", desc: "Based in the heart of Kathmandu's tech hub.", value: "Kathmandu, Nepal" },
  ];

  return (
    <section className="py-20 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary font-semibold text-xs uppercase tracking-widest mb-6"
          >
            Get in Touch
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-navy tracking-tight mb-6"
          >
            Ready to start your digital journey?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 font-medium"
          >
            We'd love to hear about your project. Get a free consultation from our team today!
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Contact Info Cards */}
          <div className="lg:w-1/3 w-full space-y-6">
            {contactMethods.map((method, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex items-start gap-5"
              >
                <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-1">{method.title}</h3>
                  <p className="text-gray-500 text-sm font-medium mb-2">{method.desc}</p>
                  <p className="text-navy font-semibold">{method.value}</p>
                </div>
              </motion.div>
            ))}


          </div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:w-2/3 w-full bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-navy">Send us a Message</h2>
                <p className="text-gray-500 font-medium">We'll respond within 24 hours.</p>
              </div>
            </div>

            {success ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50/80 backdrop-blur-sm border border-green-200 text-green-800 p-8 rounded-[2rem] text-center"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
                <p className="text-green-700 font-medium mb-6">Thank you for reaching out. Our team will contact you shortly.</p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-700 font-bold rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 text-red-700 p-4 rounded-xl text-sm border border-red-200 font-medium">
                    {error}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy ml-1">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-navy placeholder:text-gray-400" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy ml-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-navy placeholder:text-gray-400" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+977 98XXXXXXXX" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-navy placeholder:text-gray-400" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy ml-1">Project Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help?" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-navy placeholder:text-gray-400" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy ml-1">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project..." 
                    rows={5} 
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none resize-none transition-all font-medium text-navy placeholder:text-gray-400"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-white font-bold py-5 rounded-2xl hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1 transition-all text-lg disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {loading ? 'Sending Message...' : 'Send Message'}
                  {!loading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
