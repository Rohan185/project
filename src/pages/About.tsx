import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import Card from '../components/Card';
import { Users, Target, Lightbulb, TrendUp } from '@phosphor-icons/react';

const About = () => {
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
              About <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Dyoma Labs</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              We're pioneering the future of artificial intelligence through groundbreaking research, innovative solutions, and responsible AI development that benefits humanity.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mb-20">
            <Card>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-light tracking-tight mb-6">Our Story</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Founded in 2024 by a team of AI researchers and technology visionaries, Dyoma Labs was born from a simple belief: 
                    artificial intelligence should be developed responsibly and used to solve humanity's greatest challenges.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    We set out to advance the field of AI research while ensuring that the benefits of these technologies are accessible 
                    to organizations and communities worldwide, creating positive impact at scale.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 text-center">
                  <Lightbulb size={80} weight="light" className="text-blue-400 mx-auto mb-4" />
                  <p className="text-slate-400">Advancing AI Research</p>
                </div>
              </div>
            </Card>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                  <Target size={32} weight="light" className="text-blue-400" />
                </div>
                <h3 className="text-xl font-light tracking-tight mb-4">Our Mission</h3>
                <p className="text-slate-400 leading-relaxed">
                  To advance artificial intelligence research and create innovative solutions that solve real-world problems responsibly.
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
                  <Lightbulb size={32} weight="light" className="text-purple-400" />
                </div>
                <h3 className="text-xl font-light tracking-tight mb-4">Our Vision</h3>
                <p className="text-slate-400 leading-relaxed">
                  A future where AI technology is developed ethically and benefits all of humanity through innovative applications.
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                  <Users size={32} weight="light" className="text-pink-400" />
                </div>
                <h3 className="text-xl font-light tracking-tight mb-4">Our Values</h3>
                <p className="text-slate-400 leading-relaxed">
                  Innovation, ethics, and social impact guide every research project and solution we develop.
                </p>
              </div>
            </Card>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <h2 className="text-4xl font-light tracking-tight mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Dr. Alex Chen', role: 'CEO & Co-Founder', background: 'Former MIT AI Lab Director' },
                { name: 'Dr. Sarah Kim', role: 'CTO & Co-Founder', background: 'Ex-DeepMind Research Scientist' },
                { name: 'Prof. Michael Torres', role: 'Head of Research', background: 'Former Stanford AI Professor' }
              ].map((member, index) => (
                <Card key={member.name}>
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center">
                      <Users size={32} weight="light" className="text-slate-400" />
                    </div>
                    <h3 className="text-lg font-light tracking-tight mb-2">{member.name}</h3>
                    <p className="text-blue-400 text-sm mb-2">{member.role}</p>
                    <p className="text-slate-400 text-sm">{member.background}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </motion.div>
  );
};

export default About;