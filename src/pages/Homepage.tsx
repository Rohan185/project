import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { BlurText } from '@/components/ui/animated-blur-text';
import ScrollReveal from '../components/ScrollReveal';
import Card from '../components/Card';
import { GlareCard } from '@/components/ui/glare-card';
import { GetStartedButton } from '@/components/ui/get-started-button';
import {
  Lightbulb,
  Shield,
  Lightning,
  Star,
  Globe,
  Brain,
} from '@phosphor-icons/react';

const Homepage = () => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const [headingWidth, setHeadingWidth] = useState<number | null>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const update = () => setHeadingWidth(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener('resize', update);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative"
    >
      {/* Hero Section (uses global background) */}
      <section id="home" className="relative z-0 min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="mx-auto text-center pointer-events-none">
          {/* Spline iframe embed above heading; width matches heading via measured value */}
          <motion.div
            className="mx-auto -mt-2 md:-mt-3 mb-8 pointer-events-none"
            style={{ width: headingWidth ?? undefined }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            <div className="relative overflow-hidden w-full h-32 md:h-40 lg:h-48">
              <iframe
                src="https://my.spline.design/3dfusionmotion-RsqCNlKmsFRATvaZxURBWrN8/"
                frameBorder={0}
                className="absolute top-0 left-0 h-full transform-gpu bg-transparent pointer-events-none 
                           w-[calc(100%+420px)] -translate-x-[210px] -translate-y-[8px] scale-[1.20]
                           md:w-[calc(100%+520px)] md:-translate-x-[260px] md:-translate-y-[10px] md:scale-[1.28]
                           lg:w-[calc(100%+620px)] lg:-translate-x-[310px] lg:-translate-y-[12px] lg:scale-[1.35]"
                style={{ backgroundColor: 'transparent' }}
                allowFullScreen
              />
            </div>
          </motion.div>
          <motion.h1
            ref={headingRef}
            className="text-5xl md:text-7xl font-light tracking-tight mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-violet-300 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(59,130,246,0.25)] saturate-125">
              Advanced AI
            </span>
            <br />
            <BlurText
              as="span"
              text="Research & Development"
              animateBy="words"
              direction="top"
              delay={140}
              animationFrom={{ filter: 'blur(14px)', opacity: 0, y: -80 }}
              animationTo={[ { filter: 'blur(6px)', opacity: 0.6, y: 12 }, { filter: 'blur(0px)', opacity: 1, y: 0 } ]}
              stepDuration={0.55}
              easing={(t) => t < 0.5 ? 2*t*t : -1 + (4 - 2*t)*t}
              className=""
            />
          </motion.h1>
        
          <motion.p
            className="text-xl md:text-2xl font-light text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Pioneering the future of artificial intelligence through cutting-edge research, innovative solutions, and transformative technology development
          </motion.p>

        </div>
      </section>

      {/* Featured In Section */}
      <ScrollReveal>
        <section className="relative z-50 py-20 px-6" id="featured">
          <div className="max-w-6xl mx-auto relative z-50 pointer-events-auto">
            <h2 className="text-3xl font-light tracking-tight text-center mb-16 text-slate-300">
              Recognized By
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              {[
                { name: 'Warmth.AI', href: 'https://warmth-ai.vercel.app/' },
                { name: 'Replin.AI', href: 'https://www.replinai.com/' },
                { name: 'Founders Suite', href: 'https://www.founders-suite.com/' },
                { name: 'MahaSahayak', href: undefined },
                { name: 'Devkstra', href: 'https://devkstra-web.vercel.app/' },
              ].map((brand) => (
                <div
                  key={brand.name}
                  className="group relative text-center text-xl font-light text-slate-400 opacity-60 transition duration-300 ease-out select-none transform hover:opacity-100 hover:-translate-y-[6px] hover:scale-[1.16] hover:text-slate-100 hover:drop-shadow-[0_6px_26px_rgba(59,130,246,0.35)] cursor-default pointer-events-auto"
                >
                  {brand.href ? (
                    <a
                      href={brand.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 inline-block px-5 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 rounded"
                    >
                      {brand.name}
                    </a>
                  ) : (
                    <span className="relative z-10 inline-block px-5 py-2">{brand.name}</span>
                  )}
                  <span className="pointer-events-none absolute left-6 right-6 -bottom-1 h-0.5 opacity-0 blur-[1px] bg-gradient-to-r from-cyan-400/0 via-cyan-400/70 to-violet-400/0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* How It Works Section */}
      <ScrollReveal>
        <section className="py-20 px-6" id="how-it-works">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
              {/* Left: Text + Interactive list */}
              <div>
                <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 leading-[1.1]">
                  We bring AI,
                  <br className="hidden md:block" />
                  engineering & content
                  <br className="hidden md:block" />
                  expertise
                </h2>
                <p className="text-slate-300/90 text-lg md:text-xl leading-relaxed mb-8">
                  Each problem is looked at from a fresh lens to provide you with a solution
                  that solves your specific requirements and integrates with your existing
                  infrastructure.
                </p>

                <ul className="space-y-4">
                  {[
                    'GenAI Marketing & Content',
                    'Custom LLM Deployments',
                    'Workflow Automation',
                    'Vision Applications',
                  ].map((item, i) => (
                    <li
                      key={item}
                      className="group relative flex items-center justify-between gap-4 rounded-xl px-4 py-3 cursor-default
                                 transition-colors duration-300 hover:bg-white/5"
                    >
                      <span className="text-xl font-light text-slate-100 tracking-tight">
                        {item}
                      </span>
                      <span className="h-[2px] w-24 md:w-36 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full opacity-40 group-hover:opacity-100 transition-opacity" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Featured media card with overlay text */}
              <GlareCard
                containerClassName="w-full"
                className="relative overflow-hidden rounded-3xl min-h-[360px] md:min-h-[520px] p-0"
              >
                <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_20%,rgba(99,102,241,0.35),transparent_60%),radial-gradient(1000px_500px_at_20%_80%,rgba(34,211,238,0.28),transparent_60%),linear-gradient(135deg,rgba(15,23,42,0.85),rgba(2,6,23,0.85))]" />
                
                <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                  <h3 className="text-4xl md:text-5xl font-light italic tracking-tight mb-3">
                    Magical customer experiences
                  </h3>
                  <p className="text-slate-200/90 text-lg max-w-2xl">
                    Allow your customers & audience to be part of a movie trailer with their favourite actor or
                    create a custom lullaby for their kids. Create unique marketing experiences & content to
                    maximise reach and engagement. This is a level of user personalisation never seen before.
                  </p>
                </div>
              </GlareCard>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Features Section */}
      <ScrollReveal>
        <section className="py-20 px-6" id="features">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-center mb-16">
              Powerful Features
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Brain,
                  title: 'Machine Learning Excellence',
                  description: 'Advanced ML algorithms and neural networks that push the boundaries of AI capabilities'
                },
                {
                  icon: Lightning,
                  title: 'Rapid Innovation',
                  description: 'Fast-track development cycles that bring AI solutions from concept to reality quickly'
                },
                {
                  icon: Globe,
                  title: 'Global Impact',
                  description: 'AI solutions designed to solve real-world problems and create positive global change'
                },
                {
                  icon: Shield,
                  title: 'Ethical AI',
                  description: 'Responsible AI development with built-in safety measures and ethical considerations'
                }
              ].map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <Card>
                    <div className="flex items-start space-x-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon size={24} weight="light" className="text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-light tracking-tight mb-3">{feature.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials Section */}
      <ScrollReveal>
        <section className="py-20 px-6" id="testimonials">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-center mb-16">
              What Our Users Say
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Dr. Sarah Chen',
                  role: 'AI Research Director',
                  content: 'Dyoma\'s research capabilities have accelerated our AI development by years. Exceptional work.',
                  result: '300% Faster Development'
                },
                {
                  name: 'Prof. Michael Rodriguez',
                  role: 'Machine Learning Expert',
                  content: 'The AI models developed by Dyoma are state-of-the-art and incredibly robust.',
                  result: '95% Model Accuracy'
                },
                {
                  name: 'Dr. Emily Watson',
                  role: 'Tech Innovation Lead',
                  content: 'Dyoma\'s approach to AI ethics and safety sets the gold standard for the industry.',
                  result: '100% Safety Compliance'
                }
              ].map((testimonial, index) => (
                <ScrollReveal key={testimonial.name} delay={index * 0.2}>
                  <Card>
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={20} weight="fill" className="text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-slate-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                      <div className="mb-4">
                        <div className="text-green-400 font-light text-lg mb-2">{testimonial.result}</div>
                        <div className="text-white font-light">{testimonial.name}</div>
                        <div className="text-slate-400 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Mission Section */}
      <ScrollReveal>
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">Our Mission</h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              We believe that artificial intelligence should be developed responsibly and used to solve humanity's greatest challenges. 
              Dyoma is committed to advancing AI research, creating innovative solutions, and ensuring that the benefits of AI 
              technology are accessible to organizations and communities worldwide.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <Lightbulb size={48} weight="light" className="text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-light mb-2">Innovation</h3>
                <p className="text-slate-400 text-sm">Pushing the boundaries of what's possible with AI</p>
              </div>
              <div className="text-center">
                <Shield size={48} weight="light" className="text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-light mb-2">Ethics</h3>
                <p className="text-slate-400 text-sm">Developing AI responsibly with safety and ethics first</p>
              </div>
              <div className="text-center">
                <Globe size={48} weight="light" className="text-pink-400 mx-auto mb-4" />
                <h3 className="text-lg font-light mb-2">Impact</h3>
                <p className="text-slate-400 text-sm">Creating AI solutions that benefit society and humanity</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      

      {/* FAQ Section */}
      {/* CTA Section */}
      <ScrollReveal>
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/70 via-slate-900/40 to-slate-900/70 p-10 text-center">
              <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]">
                <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
                <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
              </div>
              <h3 className="relative z-10 text-2xl md:text-3xl font-light tracking-tight mb-4">
                Ready to build something remarkable?
              </h3>
              <p className="relative z-10 text-slate-300 mb-8 max-w-3xl mx-auto">
                Tell us about your idea and we’ll help you bring it to life with cutting‑edge AI.
              </p>
              <a href="/contact" className="relative z-10 inline-block">
                <GetStartedButton />
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      
      
      <ScrollReveal>
        <section className="py-20 px-6" id="faq">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-center mb-16">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: 'What types of AI research does Dyoma conduct?',
                  answer: 'We focus on machine learning, natural language processing, computer vision, and ethical AI development across various industries and applications.'
                },
                {
                  question: 'How can I collaborate with Dyoma on AI projects?',
                  answer: 'We offer various collaboration models including research partnerships, custom development projects, and consulting services. Contact us to discuss your needs.'
                },
                {
                  question: 'Do you provide AI training and education?',
                  answer: 'Yes, we offer workshops, training programs, and educational resources to help organizations understand and implement AI technologies effectively.'
                },
                {
                  question: 'How do you ensure ethical AI development?',
                  answer: 'We follow strict ethical guidelines, conduct bias testing, implement safety measures, and maintain transparency in our AI development processes.'
                }
              ].map((faq, index) => (
                <ScrollReveal key={faq.question} delay={index * 0.1}>
                  <Card hover={false}>
                    <h3 className="text-lg font-light tracking-tight mb-3">{faq.question}</h3>
                    <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-light tracking-tight mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Dyoma
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Advancing artificial intelligence research for a better tomorrow.
              </p>
            </div>
            <div>
              <h4 className="font-light mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">Research</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-light mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-light mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800/50 text-center text-slate-400 text-sm">
            © 2025 Dyoma. All rights reserved.
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Homepage;