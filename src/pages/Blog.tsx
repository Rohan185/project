import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import Card from '../components/Card';
import { Calendar, User, ArrowRight } from '@phosphor-icons/react';

const blogPosts = [
  {
    slug: 'future-of-ai-research',
    title: 'The Future of AI Research and Development',
    excerpt: 'Exploring the cutting-edge frontiers of artificial intelligence research and the breakthrough technologies that will shape tomorrow.',
    author: 'Dr. Alex Chen',
    date: '2025-01-15',
    category: 'AI Research',
    readTime: '5 min read'
  },
  {
    slug: 'ethical-ai-development',
    title: 'Ethical AI Development: Principles and Practices',
    excerpt: 'Understanding the importance of ethical considerations in AI development and how to build responsible AI systems.',
    author: 'Dr. Sarah Kim',
    date: '2025-01-10',
    category: 'AI Ethics',
    readTime: '7 min read'
  },
  {
    slug: 'machine-learning-breakthroughs',
    title: 'Recent Breakthroughs in Machine Learning',
    excerpt: 'Examining the latest advances in machine learning algorithms and their potential applications across various industries.',
    author: 'Prof. Michael Torres',
    date: '2025-01-05',
    category: 'Machine Learning',
    readTime: '6 min read'
  },
  {
    slug: 'ai-for-social-good',
    title: 'AI for Social Good: Making a Positive Impact',
    excerpt: 'How artificial intelligence can be leveraged to address global challenges and create positive social impact.',
    author: 'Dr. Emily Watson',
    date: '2025-01-01',
    category: 'Social Impact',
    readTime: '8 min read'
  }
];

const Blog = () => {
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
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Dyoma Labs</span> Research
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Insights, discoveries, and updates from the forefront of artificial intelligence research and development.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={index * 0.1}>
              <Card className="h-full">
                <Link to={`/blog/${post.slug}`} className="block h-full">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-light text-blue-300 mb-4">
                        {post.category}
                      </div>
                      <h2 className="text-xl font-light tracking-tight mb-3 hover:text-blue-400 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-slate-400 leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User size={16} weight="light" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar size={16} weight="light" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <div className="flex items-center text-blue-400 mt-4 text-sm font-light">
                        Read More <ArrowRight size={16} weight="light" className="ml-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Blog;