import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import Card from '../components/Card';
import Button from '../components/Button';
import { Envelope, MapPin, Phone, Chat } from '@phosphor-icons/react';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="pt-24 pb-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-8">
              Get in <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Have questions about Dyoma Labs? We're here to help you explore AI research opportunities and innovative solutions.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal delay={0.2}>
            <div>
              <h2 className="text-3xl font-light tracking-tight mb-8">Send us a message</h2>
              <Card>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-light text-slate-300 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:border-blue-500/50 focus:outline-none transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-light text-slate-300 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:border-blue-500/50 focus:outline-none transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-light text-slate-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:border-blue-500/50 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-slate-300 mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:border-blue-500/50 focus:outline-none transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-slate-300 mb-2">Message</label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:border-blue-500/50 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your question or feedback..."
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </Card>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div>
              <h2 className="text-3xl font-light tracking-tight mb-8">Contact Information</h2>
              <div className="space-y-6">
                <Card hover={false}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                      <Envelope size={24} weight="light" className="text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-light text-white mb-1">Email</h3>
                      <p className="text-slate-400">research@dyoma.ai</p>
                    </div>
                  </div>
                </Card>

                <Card hover={false}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                      <Phone size={24} weight="light" className="text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-light text-white mb-1">Phone</h3>
                      <p className="text-slate-400">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </Card>

                <Card hover={false}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                      <MapPin size={24} weight="light" className="text-pink-400" />
                    </div>
                    <div>
                      <h3 className="font-light text-white mb-1">Office</h3>
                      <p className="text-slate-400">AI Research Center<br />Palo Alto, CA 94301</p>
                    </div>
                  </div>
                </Card>

                <Card hover={false}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-xl flex items-center justify-center">
                      <Chat size={24} weight="light" className="text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-light text-white mb-1">Live Chat</h3>
                      <p className="text-slate-400">Available 24/7</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-light tracking-tight mb-4">Business Hours</h3>
                <Card hover={false}>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Monday - Friday</span>
                      <span className="text-white">9:00 AM - 6:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Saturday</span>
                      <span className="text-white">10:00 AM - 4:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Sunday</span>
                      <span className="text-white">Closed</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;