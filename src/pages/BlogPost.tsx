import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { Calendar, User, ArrowLeft } from '@phosphor-icons/react';

const blogContent = {
  'future-of-ai-research': {
    title: 'The Future of AI Research and Development',
    author: 'Dr. Alex Chen',
    date: '2025-01-15',
    category: 'AI Research',
    readTime: '5 min read',
    content: `
      <p>Artificial Intelligence research is entering an unprecedented era of innovation and discovery. As we advance through 2025, the boundaries of what's possible with AI continue to expand, opening new frontiers in science, technology, and human understanding.</p>
      
      <h2>The Current State of AI Research</h2>
      <p>Today's AI research encompasses everything from fundamental algorithms to practical applications that solve real-world problems. We're seeing breakthroughs in natural language processing, computer vision, robotics, and quantum computing integration.</p>
      
      <h2>Emerging Research Areas</h2>
      <p>The most exciting developments are happening at the intersection of AI and other fields: neuromorphic computing, explainable AI, federated learning, and AI safety research are pushing the boundaries of what we thought possible.</p>
      
      <h2>The Road Ahead</h2>
      <p>The future of AI research promises even more transformative breakthroughs: artificial general intelligence, quantum-AI hybrid systems, and AI that can conduct its own research and make scientific discoveries.</p>
      
      <p>The future belongs to research institutions that can balance innovation with responsibility, ensuring that AI development benefits all of humanity while addressing potential risks and challenges.</p>
    `
  },
  'ethical-ai-development': {
    title: 'Ethical AI Development: Principles and Practices',
    author: 'Dr. Sarah Kim',
    date: '2025-01-10',
    category: 'AI Ethics',
    readTime: '7 min read',
    content: `
      <p>Ethical AI development is the cornerstone of responsible artificial intelligence research. Without proper ethical frameworks, even the most sophisticated AI systems can cause unintended harm or perpetuate existing biases.</p>
      
      <h2>Core Ethical Principles</h2>
      <p>AI systems must be designed with fairness, transparency, accountability, and human dignity at their core. These principles guide every decision from initial research through deployment and ongoing monitoring.</p>
      
      <h2>Bias Detection and Mitigation</h2>
      <p>Identifying and addressing bias in AI systems requires continuous monitoring, diverse datasets, and inclusive development teams. We employ rigorous testing methodologies to ensure fair outcomes across all user groups.</p>
      
      <h2>Transparency and Explainability</h2>
      <p>AI systems should be interpretable and their decision-making processes should be explainable to users. This builds trust and enables proper oversight of AI applications.</p>
      
      <h2>Privacy and Security</h2>
      <p>Protecting user data and ensuring system security are fundamental requirements. We implement privacy-by-design principles and robust security measures in all our AI systems.</p>
      
      <p>Remember, the goal isn't just to build powerful AI systems, but to create technology that serves humanity's best interests while respecting individual rights and societal values.</p>
    `
  },
  'machine-learning-breakthroughs': {
    title: 'Recent Breakthroughs in Machine Learning',
    author: 'Prof. Michael Torres',
    date: '2025-01-05',
    category: 'Machine Learning',
    readTime: '6 min read',
    content: `
      <p>Machine learning continues to evolve at a breathtaking pace, with new breakthroughs emerging regularly that push the boundaries of what's possible in artificial intelligence and data science.</p>
      
      <h2>Transformer Architecture Advances</h2>
      <p>Recent improvements in transformer models have led to more efficient and capable language models, with better understanding of context and more nuanced generation capabilities.</p>
      
      <h2>Multimodal Learning</h2>
      <p>AI systems that can process and understand multiple types of data simultaneously - text, images, audio, and video - are opening new possibilities for comprehensive AI applications.</p>
      
      <h2>Few-Shot and Zero-Shot Learning</h2>
      <p>Advances in few-shot learning allow AI models to learn new tasks with minimal training data, while zero-shot learning enables models to perform tasks they were never explicitly trained on.</p>
      
      <h2>Federated Learning</h2>
      <p>This approach allows AI models to be trained across decentralized data sources while preserving privacy, enabling collaborative learning without compromising sensitive information.</p>
      
      <p>The future of machine learning lies in the continued integration of these breakthrough technologies, creating more capable, efficient, and responsible AI systems.</p>
    `
  },
  'ai-for-social-good': {
    title: 'AI for Social Good: Making a Positive Impact',
    author: 'Dr. Emily Watson',
    date: '2025-01-01',
    category: 'Social Impact',
    readTime: '8 min read',
    content: `
      <p>Artificial intelligence has immense potential to address some of humanity's greatest challenges, from climate change and healthcare to education and social justice.</p>
      
      <h2>Healthcare and Medical Research</h2>
      <p>AI is revolutionizing medical diagnosis, drug discovery, and personalized treatment plans. Machine learning models can analyze medical images, predict disease outcomes, and accelerate the development of new therapies.</p>
      
      <h2>Climate Change and Environmental Protection</h2>
      <p>AI systems are being used to optimize energy consumption, predict climate patterns, and develop sustainable technologies. From smart grids to carbon capture optimization, AI is a powerful tool in the fight against climate change.</p>
      
      <h2>Education and Accessibility</h2>
      <p>AI-powered educational tools can provide personalized learning experiences, making quality education more accessible to underserved communities worldwide. Language translation and accessibility tools break down barriers to information and communication.</p>
      
      <h2>Disaster Response and Humanitarian Aid</h2>
      <p>AI can help predict natural disasters, coordinate emergency responses, and optimize the distribution of humanitarian aid. Satellite imagery analysis and predictive modeling save lives and resources.</p>
      
      <h2>Social Justice and Equality</h2>
      <p>When developed responsibly, AI can help identify and address systemic biases, promote fair hiring practices, and ensure equal access to opportunities and services.</p>
      
      <p>The key to AI for social good is ensuring that these technologies are developed with diverse perspectives, ethical considerations, and a genuine commitment to benefiting all of humanity.</p>
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogContent[slug as keyof typeof blogContent] : null;

  if (!post) {
    return (
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-light mb-8">Post Not Found</h1>
          <Link to="/blog" className="text-blue-400 hover:text-blue-300">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="pt-24 pb-20"
    >
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8"
            >
              <ArrowLeft size={20} weight="light" className="mr-2" />
              Back to Blog
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <header className="mb-12">
            <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-light text-blue-300 mb-6">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center space-x-6 text-slate-400">
              <div className="flex items-center space-x-2">
                <User size={18} weight="light" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={18} weight="light" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <span>{post.readTime}</span>
            </div>
          </header>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <article className="prose prose-invert prose-lg max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="space-y-6 text-slate-300 leading-relaxed"
              style={{
                '& h2': {
                  fontSize: '1.5rem',
                  fontWeight: '300',
                  color: 'white',
                  marginTop: '2rem',
                  marginBottom: '1rem',
                  letterSpacing: '-0.025em'
                },
                '& p': {
                  marginBottom: '1.5rem',
                  lineHeight: '1.7'
                }
              }}
            />
          </article>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-16 pt-8 border-t border-slate-800/50">
            <div className="text-center">
              <h3 className="text-2xl font-light tracking-tight mb-4">Ready to start trading?</h3>
              <p className="text-slate-400 mb-8">Join thousands of traders using Dyoma's AI-powered platform.</p>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-500/30 text-white rounded-2xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </motion.div>
  );
};

export default BlogPost;