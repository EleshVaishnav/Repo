/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  BookOpen, 
  ArrowRight, 
  TrendingUp, 
  GraduationCap, 
  Medal, 
  Compass, 
  Layers, 
  BarChart2, 
  Settings,
  Globe,
  Mail
} from 'lucide-react';
import { motion } from 'motion/react';

const WordCard = ({ word, phonetic, definition, example, type, typeColor }: { 
  word: string, 
  phonetic: string, 
  definition: string, 
  example: string, 
  type: string,
  typeColor: string 
}) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="bg-surface-container-lowest p-8 md:p-10 rounded-xl ambient-shadow border border-outline-variant/10 relative overflow-hidden group transition-all duration-300"
  >
    <div className="absolute top-0 right-0 p-6">
      <span className={`${typeColor} text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider`}>
        {type}
      </span>
    </div>
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-3xl md:text-4xl font-extrabold text-primary">{word}</h3>
        <p className="text-sm text-on-surface-variant italic">{phonetic}</p>
      </div>
      <p className="text-lg text-on-surface leading-relaxed">
        {definition}
      </p>
      <div className="bg-surface-container-low p-6 rounded-lg border-l-4 border-primary/40">
        <p className="text-on-surface-variant italic">
          "{example}"
        </p>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="glass-header rounded-b-[3rem] shadow-[0_20px_40px_rgba(49,51,51,0.06)]">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full px-6 md:px-8 py-4">
          <div className="flex items-center gap-3">
            <BookOpen className="text-primary w-8 h-8" />
            <span className="text-2xl font-extrabold text-primary tracking-tight font-headline">Word-ledge</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-primary font-bold transition-colors">Explore</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Study</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Community</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <button className="bg-primary text-on-primary px-8 py-2.5 rounded-full font-bold active:scale-95 duration-200 hover:opacity-90 transition-all">
              Login
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-6 pt-12 pb-32 w-full">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-on-surface"
            >
              Expand your <span className="text-primary italic">horizon</span>, one word at a time.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-on-surface-variant max-w-xl leading-relaxed"
            >
              Step into an intellectual sanctuary designed for the curious mind. Master sophisticated vocabulary through an editorial experience that values beauty and clarity.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold text-lg active:scale-95 duration-200 shadow-lg shadow-primary/20">
                Start Learning
              </button>
              <button className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-full font-bold text-lg active:scale-95 duration-200">
                View Decks
              </button>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-tertiary-container/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl -z-10"></div>
            <div className="rounded-xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                alt="Elegant library setting" 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1000" 
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </section>

        {/* Word of the Day Deck */}
        <section className="space-y-12">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-on-surface mb-2">Word of the Day Deck</h2>
              <p className="text-on-surface-variant">Carefully curated selections for today's focus.</p>
            </div>
            <button className="text-primary font-bold flex items-center gap-2 group">
              See full deck
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <WordCard 
              word="Ephemeral"
              phonetic="/əˈfem(ə)rəl/"
              definition="Lasting for a very short time; fleeting or transitory in nature."
              example="The beauty of the sunset was ephemeral, fading into the deep indigo of twilight within minutes."
              type="Noun"
              typeColor="bg-secondary-container text-on-secondary-container"
            />
            <WordCard 
              word="Mellifluous"
              phonetic="/məˈliflo͞oəs/"
              definition="(of a voice or words) sweet or musical; pleasant to hear."
              example="The mellifluous notes of the cello filled the hall, captivating the audience in a soulful embrace."
              type="Adjective"
              typeColor="bg-tertiary-container text-on-tertiary-fixed"
            />
          </div>
        </section>

        {/* Stats Bento Grid */}
        <section className="mt-32 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 bg-primary hero-gradient p-12 rounded-xl text-on-primary flex flex-col justify-between min-h-[300px] shadow-xl">
            <TrendingUp className="w-12 h-12" />
            <div>
              <h4 className="text-4xl font-bold mb-2">2,400+</h4>
              <p className="opacity-90 text-lg">Words mastered by our community this week alone.</p>
            </div>
          </div>
          
          <div className="bg-surface-container-high p-8 rounded-xl flex flex-col justify-center items-center text-center space-y-4 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold">Study Modes</h4>
            <p className="text-sm text-on-surface-variant">Flashcards, quizzes, and etymology deep-dives.</p>
          </div>
          
          <div className="bg-surface-container-high p-8 rounded-xl flex flex-col justify-center items-center text-center space-y-4 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-surface-container-lowest flex items-center justify-center text-tertiary shadow-sm">
              <Medal className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold">Streaks</h4>
            <p className="text-sm text-on-surface-variant">Build your cognitive resilience every day.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low w-full border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <BookOpen className="text-primary w-6 h-6" />
              <span className="text-primary font-bold text-xl">Word-ledge</span>
            </div>
            <p className="text-xs text-on-surface-variant">© 2024 Word-ledge Sanctuary. All rights reserved.</p>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-xs text-on-surface-variant hover:text-primary transition-colors">Etymology</a>
            <a href="#" className="text-xs text-on-surface-variant hover:text-primary transition-colors">Study Methods</a>
            <a href="#" className="text-xs text-on-surface-variant hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="text-xs text-on-surface-variant hover:text-primary transition-colors">Support</a>
          </div>
          
          <div className="flex gap-4">
            <Globe className="text-outline-variant cursor-pointer hover:text-primary transition-colors w-5 h-5" />
            <Mail className="text-outline-variant cursor-pointer hover:text-primary transition-colors w-5 h-5" />
          </div>
        </div>
      </footer>

      {/* Bottom Nav (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 bg-surface/90 backdrop-blur-lg rounded-t-[3rem] pb-safe shadow-[0_-10px_40px_rgba(49,51,51,0.04)] border-t border-outline-variant/10">
        <button className="flex flex-col items-center justify-center bg-secondary-container/30 text-secondary rounded-[2rem] px-5 py-2 active:scale-90 transition-all duration-300">
          <Compass className="w-6 h-6" />
          <span className="text-[10px] font-medium mt-1">Explore</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface-variant px-5 py-2 hover:text-primary active:scale-90 transition-all duration-300">
          <Layers className="w-6 h-6" />
          <span className="text-[10px] font-medium mt-1">Deck</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface-variant px-5 py-2 hover:text-primary active:scale-90 transition-all duration-300">
          <BarChart2 className="w-6 h-6" />
          <span className="text-[10px] font-medium mt-1">Progress</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface-variant px-5 py-2 hover:text-primary active:scale-90 transition-all duration-300">
          <Settings className="w-6 h-6" />
          <span className="text-[10px] font-medium mt-1">Settings</span>
        </button>
      </nav>
    </div>
  );
}
