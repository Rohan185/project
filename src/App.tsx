import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { AuroraSiteBackground } from './components/ui/aurora-site-background';
import FloatingConnect from '@/components/ui/floating-connect';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { Home as HomeIcon, FlaskConical, Users, HelpCircle, Mail } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-transparent text-slate-900 dark:text-white overflow-x-hidden">
        <AuroraSiteBackground />
        <NavBar
          items={[
            { name: 'Home', url: '/', icon: HomeIcon },
            { name: 'Research', url: '#features', icon: FlaskConical },
            { name: 'Impact', url: '#testimonials', icon: Users },
            { name: 'Contact', url: '/contact', icon: Mail },
            { name: 'FAQ', url: '#faq', icon: HelpCircle },
          ]}
        />
        {/* Floating "Let's Connect" CTA bottom-right */}
        <FloatingConnect to="/contact" text="LET'S*CONNECT*" />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;