/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  History, 
  Map as MapIcon, 
  Scroll, 
  Lightbulb, 
  Award, 
  ChevronRight, 
  X, 
  ExternalLink,
  Target,
  Menu,
  ChevronDown,
  Sparkles,
  Compass,
  Zap
} from 'lucide-react';
import { EXHIBITS, TIMELINE, QUIZ_QUESTIONS } from './constants';
import { Exhibit } from './types';

export default function App() {
  const [selectedExhibit, setSelectedExhibit] = useState<Exhibit | null>(null);
  const [activeQuizIndex, setActiveQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnswer = (index: number) => {
    if (isAnswered) return;

    setIsAnswered(true);
    setSelectedAnswer(index);
    const correctIndex = QUIZ_QUESTIONS[activeQuizIndex].correctIndex;
    
    if (index === correctIndex) {
      setQuizScore(s => s + 1);
    }
    
    setTimeout(() => {
      if (activeQuizIndex + 1 < QUIZ_QUESTIONS.length) {
        setActiveQuizIndex(i => i + 1);
        setIsAnswered(false);
        setSelectedAnswer(null);
      } else {
        setShowScore(true);
      }
    }, 1500);
  };

  const bubbleVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-sky-200 selection:text-sky-900">
      {/* Playful Bubbly Navbar */}
      <nav className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-2xl flex items-center px-6 ${
        isScrolled ? 'bg-white/80 backdrop-blur-xl h-16 shadow-lg border border-white' : 'bg-white/40 backdrop-blur-sm h-20'
      }`}>
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-sky-200 group-hover:rotate-12 transition-transform">
                <Sparkles size={20} />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-sky-600">Echoes</span>
            </div>

            <div className="hidden md:flex items-center gap-6">
              {['Exhibits', 'Timeline', 'Quiz', 'Visit'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-semibold text-slate-500 hover:text-sky-600 transition-colors px-4 py-2 rounded-full hover:bg-sky-50"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <button className="bg-sky-600 text-white px-6 py-2.5 text-sm font-bold rounded-full shadow-lg shadow-sky-200 hover:bg-sky-700 hover:scale-105 active:scale-95 transition-all">
            Join the Tour
          </button>
        </div>
      </nav>

      <main>
        {/* Bubbly & Bright Hero Section */}
        <section className="relative min-h-[90vh] pt-32 pb-20 px-6 flex flex-col justify-center overflow-hidden">
          {/* Animated Background Blobs */}
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-sky-200/50 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-violet-200/50 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
                <Compass size={14} />
                Explore Our Past
              </div>
              <h1 className="font-serif text-6xl md:text-8xl font-bold text-slate-900 leading-[1.1] mb-8">
                History, <br/> <span className="text-sky-500">Unbounded.</span>
              </h1>
              <p className="max-w-lg text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                Dive into a colorful celebration of human achievement. From ancient wonders to outer space, history has never looked this bright.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#exhibits" className="bg-sky-600 text-white px-8 py-4 rounded-full text-sm font-bold shadow-xl shadow-sky-100 hover:bg-sky-700 transition-all hover:translate-y-[-2px]">
                  Start Exploring
                </a>
                <button className="bg-white text-slate-700 px-8 py-4 rounded-full text-sm font-bold shadow-md border border-slate-100 hover:bg-slate-50 transition-all">
                  Watch Story
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-sky-100 rounded-[60px] rotate-6" />
              <div className="absolute inset-0 bg-violet-100 rounded-[60px] -rotate-3" />
              <div className="relative h-full w-full bg-white rounded-[50px] shadow-2xl overflow-hidden border-8 border-white p-4">
                <img 
                  src="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200" 
                  className="w-full h-full object-cover rounded-[35px]"
                  alt="Museum Life"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bubbly Exhibits Section */}
        <section id="exhibits" className="max-w-7xl mx-auto px-6 py-32">
          <header className="mb-16 text-center space-y-4">
            <h2 className="font-serif text-5xl md:text-6xl text-slate-900 font-bold">The Magic Vault</h2>
            <p className="text-slate-500 font-medium text-lg">Click a bubble to reveal the story within.</p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {EXHIBITS.map((exhibit, idx) => (
              <motion.div 
                key={exhibit.id}
                variants={bubbleVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true }}
                onClick={() => setSelectedExhibit(exhibit)}
                className="group cursor-pointer bg-white p-4 rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col h-full"
              >
                <div className="aspect-[4/3] rounded-[30px] overflow-hidden mb-6 relative">
                  <img 
                    src={exhibit.image} 
                    alt={exhibit.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-sky-600 shadow-sm uppercase tracking-wider">
                    {exhibit.category}
                  </div>
                </div>
                <div className="px-2 pb-2 space-y-3">
                  <span className="text-sky-500 text-xs font-bold uppercase tracking-widest">{exhibit.era}</span>
                  <h3 className="text-xl font-serif font-bold text-slate-900 leading-tight group-hover:text-sky-600 transition-colors">{exhibit.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Playful Timeline */}
        <section id="timeline" className="bg-sky-50 py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <header className="mb-24 text-center">
              <h2 className="font-serif text-5xl text-slate-900 font-bold mb-4">Journey Map</h2>
              <p className="text-sky-600 font-bold uppercase tracking-widest text-xs">Steps through time</p>
            </header>

            <div className="relative">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1.5 bg-white rounded-full" />
              
              <div className="space-y-20 relative">
                {TIMELINE.map((event, idx) => (
                  <motion.div 
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                  >
                    <div className="flex-1 w-full text-center md:text-left space-y-4">
                      <div className={`flex items-center gap-4 justify-center ${idx % 2 === 1 ? 'md:justify-start' : 'md:justify-end'}`}>
                        <span className="text-sky-600 text-4xl font-serif font-bold">{event.year}</span>
                        <div className="px-3 py-1 bg-white rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest shadow-sm">
                          {event.category}
                        </div>
                      </div>
                      <div className="bg-white p-8 rounded-[40px] shadow-xl shadow-sky-100 border border-white">
                        <h4 className="text-xl text-slate-900 font-serif font-bold mb-3">{event.title}</h4>
                        <p className="text-slate-500 font-medium text-sm leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                    
                    <div className="w-6 h-6 rounded-full bg-sky-500 border-4 border-white shadow-lg z-10 shrink-0" />
                    
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Fun Quiz Section */}
        <section id="quiz" className="py-32 px-6">
          <div className="max-w-4xl mx-auto bg-violet-600 rounded-[60px] p-10 md:p-20 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 text-center space-y-12">
              {!showScore && (
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap size={32} />
                  </div>
                  <h2 className="font-serif text-5xl font-bold">Pop Quiz!</h2>
                  <p className="text-violet-100 font-bold uppercase tracking-widest text-xs">Ready for the challenge?</p>
                </div>
              )}
              
              <div className="bg-white rounded-[40px] p-8 md:p-12 text-slate-900 shadow-2xl">
                {showScore ? (
                  <div className="space-y-10">
                    <div className="w-24 h-24 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <Award size={48} />
                    </div>
                    <div className="space-y-2">
                      <h2 className="font-serif text-4xl font-bold">Great Job!</h2>
                      <p className="text-sky-600 tracking-widest text-sm uppercase font-black">Your Score: {quizScore} / {QUIZ_QUESTIONS.length}</p>
                    </div>
                    <button 
                      onClick={() => { setShowScore(false); setActiveQuizIndex(0); setQuizScore(0); }}
                      className="bg-violet-600 text-white px-10 py-5 rounded-full text-sm font-bold shadow-lg hover:bg-violet-700 transition-all hover:scale-105 active:scale-95"
                    >
                      Play Again
                    </button>
                  </div>
                ) : (
                  <div className="space-y-10">
                    <div className="space-y-6">
                      <div className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                        Question {activeQuizIndex + 1}
                      </div>
                      <h3 className="font-serif text-2xl md:text-4xl font-bold text-slate-900 leading-tight">
                        {QUIZ_QUESTIONS[activeQuizIndex].question}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 gap-4 max-w-xl mx-auto">
                      {QUIZ_QUESTIONS[activeQuizIndex].options.map((opt, i) => {
                        const isCorrect = i === QUIZ_QUESTIONS[activeQuizIndex].correctIndex;
                        const isSelected = selectedAnswer === i;
                        
                        let bgColor = "bg-slate-50";
                        let borderColor = "border-slate-100";
                        let textColor = "text-slate-600";

                        if (isAnswered) {
                          if (isCorrect) {
                            bgColor = "bg-green-100";
                            borderColor = "border-green-500";
                            textColor = "text-green-700";
                          } else if (isSelected && !isCorrect) {
                            bgColor = "bg-red-100";
                            borderColor = "border-red-500";
                            textColor = "text-red-700";
                          }
                        }

                        return (
                          <div key={i} className="space-y-4">
                            <button 
                              disabled={isAnswered}
                              onClick={() => handleAnswer(i)}
                              className={`group w-full px-8 py-5 text-center border-2 rounded-2xl font-bold transition-all ${bgColor} ${borderColor} ${textColor} ${!isAnswered ? 'hover:border-sky-500 hover:bg-sky-50 hover:text-sky-700 active:scale-98' : ''}`}
                            >
                              <div className="flex items-center justify-center gap-3">
                                {opt}
                                {isAnswered && isCorrect && <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-[10px]">✓</div>}
                                {isAnswered && isSelected && !isCorrect && <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px]">✕</div>}
                              </div>
                            </button>
                            {isAnswered && (isCorrect || isSelected) && (
                              <motion.p 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`text-xs font-medium px-4 leading-relaxed ${isCorrect ? 'text-green-600' : 'text-slate-500'}`}
                              >
                                {isCorrect ? 'Correct! ' : 'Keep learning! '}
                                {QUIZ_QUESTIONS[activeQuizIndex].explanation}
                              </motion.p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Booking Info Modal */}
        <AnimatePresence>
          {isBookingModalOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[110] flex items-center justify-center p-6"
            >
              <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsBookingModalOpen(false)} />
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="relative bg-white rounded-[40px] p-10 md:p-16 max-w-lg w-full text-center shadow-2xl border-8 border-sky-100"
              >
                <button 
                  onClick={() => setIsBookingModalOpen(false)}
                  className="absolute top-6 right-6 text-slate-400 hover:text-sky-600 transition-colors"
                >
                  <X size={24} />
                </button>
                <div className="w-20 h-20 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                  <MapIcon size={32} />
                </div>
                <h3 className="font-serif text-4xl font-bold text-slate-900 mb-2">Booking Information</h3>
                <p className="text-sky-600 font-bold uppercase tracking-widest text-xs mb-6">By Zakaria Moghnie</p>
                
                <div className="bg-sky-50 p-8 rounded-3xl border border-sky-100 space-y-6 mb-8 text-left">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Administrator</span>
                    <p className="text-slate-900 font-bold">Zakaria Moghnie</p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Museum Hours</span>
                    <p className="text-slate-900 font-medium text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-slate-900 font-medium text-sm">Sat - Sun: 10:00 AM - 4:00 PM</p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Contact Email</span>
                    <div className="bg-white p-3 rounded-xl border border-sky-100 shadow-sm">
                      <p className="text-sky-700 font-bold text-sm select-all">j17551@students.eischools.ae</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-500 text-xs leading-relaxed">Please reach out for private virtual tours and educational group sessions.</p>
                </div>
                <button 
                  onClick={() => setIsBookingModalOpen(false)}
                  className="w-full py-4 bg-sky-600 text-white rounded-full font-bold shadow-lg hover:bg-sky-700 transition-all"
                >
                  Got it!
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Welcoming Visit Section */}
        <section id="visit" className="bg-white py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-sky-50 rounded-[60px] p-12 lg:p-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                <div className="space-y-4">
                  <h2 className="font-serif text-5xl md:text-7xl text-slate-900 font-bold leading-tight">Come Say <br/> <span className="text-sky-500 underline decoration-sky-200 decoration-8 underline-offset-4">Hello!</span></h2>
                  <p className="text-slate-600 text-lg font-medium tracking-wide max-w-md">Our virtual doors are always open. Explore your heritage from the comfort of your couch.</p>
                </div>

                <div className="flex gap-6">
                  <div className="bg-white p-6 rounded-[30px] shadow-sm flex-1">
                    <span className="block text-[10px] font-black text-sky-500 uppercase tracking-widest mb-2">Access</span>
                    <p className="text-slate-900 font-bold">24/7 Always</p>
                  </div>
                  <div className="bg-white p-6 rounded-[30px] shadow-sm flex-1">
                    <span className="block text-[10px] font-black text-sky-500 uppercase tracking-widest mb-2">Price</span>
                    <p className="text-slate-900 font-bold">100% Free</p>
                  </div>
                </div>

                <button 
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-sky-600 text-white px-12 py-5 rounded-full text-sm font-bold shadow-xl shadow-sky-200 hover:bg-sky-700 transition-all hover:scale-105 active:scale-95"
                >
                  Book a Virtual Guide
                </button>
              </div>

              <div className="relative lg:scale-110">
                <div className="absolute inset-0 bg-sky-200 rounded-full blur-[100px] opacity-50" />
                <div className="relative aspect-square rounded-full border-[16px] border-white shadow-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=1200" 
                    alt="Museum Interior" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 py-20 px-8 rounded-t-[60px]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="font-serif text-3xl font-bold text-white tracking-tight">Echoes.</span>
            <p className="text-slate-400 text-xs font-bold tracking-widest uppercase">The Joy of History • 2025</p>
          </div>
          
          <div className="flex gap-10 text-xs tracking-widest text-slate-400 uppercase font-black">
            <a href="#" className="hover:text-sky-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-sky-400 transition-colors">Archive</a>
            <a href="#" className="hover:text-sky-400 transition-colors">Legal</a>
          </div>
          
          <div className="text-center md:text-right">
            <div className="flex items-center gap-2 justify-center md:justify-end text-sky-400 mb-2">
              <Sparkles size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Stay Curious</span>
            </div>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Designed for discovery</p>
          </div>
        </div>
      </footer>

      {/* Bubbly Detail Overlay */}
      <AnimatePresence>
        {selectedExhibit && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            <div className="absolute inset-0 bg-sky-900/40 backdrop-blur-md" onClick={() => setSelectedExhibit(null)} />
            
            <motion.div 
              layoutId={selectedExhibit.id}
              className="relative w-full max-w-5xl h-full md:h-[85vh] bg-white rounded-[50px] shadow-2xl overflow-hidden flex flex-col md:flex-row border-8 border-white"
            >
              <button 
                onClick={() => setSelectedExhibit(null)}
                className="absolute top-6 right-6 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-400 hover:text-sky-600 transition-all hover:scale-110 active:scale-90"
              >
                <X size={24} />
              </button>

              <div className="md:w-5/12 relative min-h-[300px] md:min-h-0">
                <img 
                  src={selectedExhibit.image} 
                  alt={selectedExhibit.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 to-transparent" />
                <div className="absolute inset-x-8 bottom-10">
                  <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3 inline-block shadow-lg">
                    {selectedExhibit.era}
                  </span>
                  <h2 className="text-white font-serif text-5xl font-bold leading-none">{selectedExhibit.title}</h2>
                </div>
              </div>

              <div className="md:w-7/12 p-10 md:p-16 overflow-y-auto bg-[#FDFEFE]">
                <div className="space-y-12">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-600">
                        <History size={20} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-600">{selectedExhibit.category} Archive</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-lg font-medium">
                      {selectedExhibit.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    <div className="p-6 bg-sky-50 rounded-[30px] border border-sky-100 space-y-3">
                      <div className="flex items-center gap-3 text-sky-600">
                        <Lightbulb size={18} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Cool Fact</span>
                      </div>
                      <p className="text-sm text-slate-700 font-bold leading-relaxed">{selectedExhibit.fact}</p>
                    </div>

                    <div className="p-6 bg-violet-50 rounded-[30px] border border-violet-100 space-y-3">
                      <div className="flex items-center gap-3 text-violet-600">
                        <Target size={18} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Why it Matters</span>
                      </div>
                      <p className="text-sm text-slate-700 font-bold leading-relaxed">{selectedExhibit.matters}</p>
                    </div>
                  </div>

                  {selectedExhibit.artifact && (
                    <div className="space-y-8 bg-sky-50/50 p-8 rounded-[40px] border border-sky-100 shadow-sm">
                      <div className="inline-flex items-center gap-2 bg-sky-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        <MapIcon size={12} />
                        Featured Artifact
                      </div>
                      
                      <div className="aspect-video w-full rounded-[30px] overflow-hidden shadow-md border-4 border-white">
                        <img 
                          src={selectedExhibit.artifact.image} 
                          alt={selectedExhibit.artifact.title}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-serif text-3xl font-bold text-slate-900">{selectedExhibit.artifact.title}</h4>
                        <p className="text-slate-600 font-medium leading-relaxed italic">
                          {selectedExhibit.artifact.description}
                        </p>
                        <a 
                          href={selectedExhibit.artifact.originLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sky-600 font-bold text-xs hover:underline decoration-2 underline-offset-4"
                        >
                          Find Origin Information
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="space-y-6">
                    <h4 className="font-serif text-2xl font-bold text-slate-900">Key Highlights</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {selectedExhibit.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:border-sky-300 transition-colors">
                          <div className="w-6 h-6 bg-sky-500 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">
                            {i+1}
                          </div>
                          <span className="text-sm text-slate-600 font-bold">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a 
                    href={selectedExhibit.externalLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full py-5 bg-sky-600 text-white rounded-full text-sm font-bold shadow-xl shadow-sky-100 hover:bg-sky-700 transition-all hover:scale-[1.02] active:scale-98 text-center"
                  >
                    View Full Documentation
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
