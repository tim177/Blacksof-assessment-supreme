"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
    // Show success message
    alert("Message sent successfully!");
  };

  return (
    <section className="px-32 min-h-screen bg-[#006abc] text-white flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side - Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-8">Get in touch</h2>
            <div className="w-16 h-1 bg-white mb-8"></div>

            <p className="text-xl mb-8">For general enquiries</p>

            <div className="space-y-8">
              <div>
                <p className="font-normal">Address :</p>
                <p>110, 16th Road, Chembur, Mumbai - 400071</p>
              </div>

              <div>
                <p className="font-normal">Phone :</p>
                <p>+91 22 25208822</p>
              </div>

              <div>
                <p className="font-normal">Email :</p>
                <p>info@supremegroup.co.in</p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-12">
              <div>
                <label htmlFor="fullName" className="block ">
                  Full name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/50  px-0 focus:outline-none focus:border-white text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block ">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/50  px-0 focus:outline-none focus:border-white text-white"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/50 px-0 focus:outline-none focus:border-white text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/50  px-0 focus:outline-none focus:border-white text-white resize-none"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-100 transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
