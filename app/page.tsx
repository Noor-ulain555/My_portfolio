'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Code2, 
  Smartphone, 
  Briefcase, 
  GraduationCap,
  Wrench,
  Bot,
  Send,
  Menu,
  X,
  User,
  MessageSquare
} from 'lucide-react';

// Custom SVG Github Component
const Github = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// ==========================================
// HEADER NAVIGATION COMPONENT
// ==========================================
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Expertise', href: '#expertise', icon: Code2 },
    { name: 'Projects', href: '#projects', icon: Smartphone },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Contact', href: '#contact', icon: Send },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 transition-all">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* BRAND / LOGO */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-600 flex items-center justify-center text-slate-950 font-black text-lg shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform">
              N
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-base tracking-tight leading-none group-hover:text-teal-400 transition-colors">
                Noor Ul Ain
              </span>
              <span className="text-[10px] text-teal-400 font-medium tracking-wide">
                Mobile & Full-Stack Eng.
              </span>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all flex items-center gap-1.5"
              >
                <link.icon className="w-3.5 h-3.5 text-teal-400" />
                {link.name}
              </a>
            ))}
          </nav>

          {/* EXTERNAL ACTION LINKS */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://github.com/Noor-ulain555"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-teal-300 hover:bg-slate-800 rounded-lg transition-colors"
              title="GitHub Profile"
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.fiverr.com/s/7Y4vZDE"
              target="_blank"
              rel="noreferrer"
              className="text-xs bg-slate-900 hover:bg-slate-800 text-teal-300 border border-slate-700/80 px-3 py-1.5 rounded-lg transition-colors font-medium"
            >
              Fiverr
            </a>

            <a
              href="https://wa.me/923020662510?text=Hi%20Noor,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
              target="_blank"
              rel="noreferrer"
              className="text-xs bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded-lg transition-colors font-semibold flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-6 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-teal-300 hover:bg-slate-900 rounded-lg flex items-center gap-2 transition-colors"
              >
                <link.icon className="w-4 h-4 text-teal-400" />
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2">
            <a
              href="https://github.com/Noor-ulain555"
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-2 text-center text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-800 rounded-lg"
            >
              GitHub
            </a>
            <a
              href="https://www.fiverr.com/s/7Y4vZDE"
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-2 text-center text-xs font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/30 rounded-lg"
            >
              Fiverr
            </a>
            <a
              href="https://wa.me/923020662510"
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-2 text-center text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-lg"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// ==========================================
// DATA STRUCTURES & DATA
// ==========================================
interface Project {
  id: string;
  title: string;
  category: 'mobile' | 'backend';
  tech: string;
  description: string;
  badge: string;
  tags: string[];
  link?: string;
}

const projectsData: Project[] = [
  {
    id: 'hidden-device-finder',
    title: 'Hidden Device Finder (CMP)',
    category: 'mobile',
    tech: 'Kotlin Multiplatform / Jetpack Compose',
    description: 'Cross-platform detection system built using Kotlin Multiplatform & Compose Multiplatform with real sensor integrations (camera/glint detection, Bluetooth, WiFi, magnetometer), confidence scoring, intensity levels, and full CRUD scan history.',
    badge: 'Play Store & App Store',
    tags: ['KMP', 'Compose', 'Kotlin', 'Sensors', 'ClientProject']
  },
  {
    id: 'namaz-status',
    title: 'Namaz Status App',
    category: 'mobile',
    tech: 'Compose Multiplatform (CMP) / Kotlin',
    description: 'Islamic prayer tracking & notification app built using Compose Multiplatform (CMP) with cross-platform architecture and real-time prayer schedule notifications.',
    badge: 'Play Store Deployed',
    tags: ['CMP', 'ComposeMultiplatform', 'Kotlin', 'PrayerTracker'],
    link: 'https://play.google.com/store/apps/details?id=org.lumincluster.namazreminder'
  },
  {
    id: 'noorani-qaida',
    title: 'Noorani Qaida - Vocabulary',
    category: 'mobile',
    tech: 'Flutter / Dart / Google AdMob',
    description: 'Interactive Islamic learning app designed for children with custom audio player integration, daily quiz challenges, mistake review tracking, and AdMob monetization.',
    badge: '5K+ Downloads • Play Store',
    tags: ['Flutter', 'Dart', 'AdMob', 'AudioPlayer', 'QuizSystem'],
    link: 'https://play.google.com/store/apps/details?id=com.lumencluster.nooraniqaida'
  },
  {
    id: 'sakina-app',
    title: 'Sakina: Islamic Habit Tracker',
    category: 'mobile',
    tech: 'Flutter / Dart / Firebase',
    description: 'First personal production app designed for daily spiritual tracking, daily Azkar & Duas, journal intentions, and habits tracking with Firebase integration.',
    badge: 'Play Store Deployed',
    tags: ['Flutter', 'Dart', 'Firebase', 'HabitTracker', 'PersonalProject'],
    link: 'https://play.google.com/store/apps/details?id=com.codavix.solution.sakina'
  },
  {
    id: 'emoji-sudoku',
    title: 'Emoji Sudoku: Classic Puzzle',
    category: 'mobile',
    tech: 'Flutter / Dart / Google AdMob',
    description: 'Fun puzzle game featuring customizable emoji themes, multiple difficulty levels, daily challenges, intelligent hint engine, and Google AdMob monetization.',
    badge: 'Play Store Deployed',
    tags: ['Flutter', 'Dart', 'AdMob', 'GameDev', 'PuzzleEngine'],
    link: 'https://play.google.com/store/apps/details?id=com.lumenCluster.emoji_sudoku'
  },
  {
    id: 'tic-tac-arena',
    title: 'Tic Tac Arena',
    category: 'mobile',
    tech: 'Flutter / Dart',
    description: 'Multiplayer game app featuring Player vs AI and Player vs Player modes, custom character selections, responsive layouts, and stateful game tracking logic.',
    badge: 'Play Store Deployed',
    tags: ['Flutter', 'Dart', 'GameLogic', 'StateManagement'],
    link: 'https://play.google.com/store/apps/details?id=com.lumenCluster.tictac_arena'
  },
  {
    id: 'ktor-backend-api',
    title: 'Ktor RESTful Backend API',
    category: 'backend',
    tech: 'Ktor / Kotlin / PostgreSQL / Docker',
    description: 'Engineered scalable RESTful APIs using Ktor in Kotlin with structured routing, real-time features, notifications, and content filtering. Containerized with Docker and deployed on Render cloud platform.',
    badge: 'Cloud Deployed',
    tags: ['Kotlin', 'Ktor', 'Docker', 'PostgreSQL', 'Render']
  }
];

// ==========================================
// REUSABLE COMPONENTS
// ==========================================
function SkillBadge({ label }: { label: string }) {
  return (
    <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/50 hover:border-teal-500/50 transition-colors">
      {label}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="bg-slate-900/60 border border-slate-800 hover:border-teal-500/50 transition-colors rounded-xl p-6 flex flex-col justify-between backdrop-blur-sm"
    >
      <div>
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">{project.tech}</span>
          <span className="text-[10px] bg-teal-500/10 text-teal-300 px-2 py-0.5 rounded border border-teal-500/20">{project.badge}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">
          {project.title}
        </h3>
        <p className="text-sm text-slate-400 mb-6 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/50">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[11px] bg-slate-800/60 text-slate-400 px-2 py-0.5 rounded">
              #{tag}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-teal-400 hover:text-teal-300 transition-colors hover:underline mt-3"
          >
            View on Google Play ↗
          </a>
        )}
      </div>
    </motion.div>
  );
}

// ==========================================
// MAIN PORTFOLIO PAGE
// ==========================================
export default function Portfolio() {
  const [filter, setFilter] = useState<'all' | 'mobile' | 'backend'>('all');

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-950">
      
      {/* STICKY HEADER */}
      <Header />

      {/* Decorative Accent Gradients */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* CONTAINER */}
      <main className="max-w-5xl mx-auto px-6 py-12 relative z-10">
        
        {/* HERO SECTION */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold mb-4">
            Mobile & Full-Stack Developer
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">
            Noor Ul Ain
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-6">
            Android, Flutter, and Ktor Backend Developer with <strong className="text-teal-300">3+ years of experience</strong> building production cross-platform apps, integrating modern AI toolsets, and architecting scalable cloud APIs.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 p-4 bg-slate-900/40 border border-slate-800 rounded-xl max-w-xl">
            <div>
              <div className="text-2xl font-bold text-white">3+ Years</div>
              <div className="text-xs text-slate-400">Professional Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">6+ Apps</div>
              <div className="text-xs text-slate-400">Published & Deployed</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-2xl font-bold text-white">5K+</div>
              <div className="text-xs text-slate-400">Play Store Downloads</div>
            </div>
          </div>

          {/* Contact Links Bar */}
          <div className="flex flex-wrap gap-3 text-sm text-slate-300 pt-2">
            <a href="https://github.com/Noor-ulain555" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-teal-400 transition-colors bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              <Github className="w-4 h-4 text-teal-400" /> GitHub
            </a>
            <a href="mailto:noorulain9590@gmail.com" className="flex items-center gap-2 hover:text-teal-400 transition-colors bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              <Mail className="w-4 h-4 text-teal-400" /> noorulain9590@gmail.com
            </a>
            <span className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              <Phone className="w-4 h-4 text-teal-400" /> 03020662510
            </span>
            <span className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              <MapPin className="w-4 h-4 text-teal-400" /> Punjab, Pakistan
            </span>
          </div>
        </motion.header>

        {/* SKILLS & TOOLING SECTION */}
        <section id="expertise" className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Code2 className="text-teal-400" /> Technical Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-teal-300 mb-4">Mobile Development</h3>
              <div className="flex flex-wrap gap-2">
                {['Kotlin', 'Jetpack Compose', 'Android SDK', 'Flutter', 'Dart', 'KMP'].map((s) => (
                  <SkillBadge key={s} label={s} />
                ))}
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-teal-300 mb-4">Backend & Web</h3>
              <div className="flex flex-wrap gap-2">
                {['Ktor', 'RESTful APIs', 'PostgreSQL', 'SQLite', 'Room DB', 'Docker', 'WordPress'].map((s) => (
                  <SkillBadge key={s} label={s} />
                ))}
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-teal-300 mb-4">Architecture & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['MVVM', 'Clean Architecture', 'Android Studio', 'IntelliJ IDEA', 'VS Code', 'Git / GitHub', 'Postman'].map((s) => (
                  <SkillBadge key={s} label={s} />
                ))}
              </div>
            </div>
          </div>

          {/* AI WORKFLOW SECTION */}
          <div className="bg-slate-900/40 border border-teal-500/20 rounded-xl p-6">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Bot className="w-5 h-5 text-teal-400" /> AI-Assisted Development & Workflows
            </h3>
            <p className="text-sm text-slate-400 mb-3">
              Hands-on experience leveraging modern AI assistants and copilots to accelerate development, optimize code quality, and solve complex cross-platform architecture problems:
            </p>
            <div className="flex flex-wrap gap-2">
              {['Claude Code', 'Google Gemini', 'ChatGPT', 'AI Coding Assistants'].map((ai) => (
                <span key={ai} className="text-xs bg-teal-500/10 text-teal-300 border border-teal-500/20 px-3 py-1 rounded-full">
                  {ai}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Smartphone className="text-teal-400" /> Featured Projects
            </h2>

            <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800 self-start sm:self-auto">
              {(['all', 'mobile', 'backend'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-4 py-1.5 text-xs font-medium rounded-md capitalize transition-all ${
                    filter === tab
                      ? 'bg-teal-500 text-slate-950 font-bold shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Briefcase className="text-teal-400" /> Professional Experience
          </h2>

          <div className="space-y-10">
            {/* Flutter & Backend Mobile Developer */}
            <div className="relative pl-6 border-l-2 border-teal-500/30 space-y-2">
              <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-teal-400" />
              <div className="flex flex-wrap justify-between items-baseline">
                <h3 className="text-lg font-bold text-white">Mobile & Ktor Backend Engineer</h3>
                <span className="text-xs text-slate-400">2023 – Present</span>
              </div>
              <p className="text-sm text-teal-400 font-medium">Production & Cross-Platform Development</p>
              <ul className="list-disc list-inside text-sm text-slate-400 space-y-1.5 pt-1">
                <li>Engineered cross-platform Flutter applications utilizing Provider/Riverpod state management and asynchronous reactive UI streams.</li>
                <li>Applied full widget lifecycle management (<code className="text-xs text-teal-300">initState</code>, <code className="text-xs text-teal-300">dispose</code>) for memory cleanup and network controllers.</li>
                <li>Architected custom Ktor RESTful APIs with Docker, PostgreSQL database integrations, and deployment on Render cloud platforms.</li>
              </ul>
            </div>

            {/* Hazel Mobile Company */}
            <div className="relative pl-6 border-l-2 border-teal-500/30 space-y-2">
              <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-teal-400" />
              <div className="flex flex-wrap justify-between items-baseline">
                <h3 className="text-lg font-bold text-white">Android Developer Intern</h3>
                <span className="text-xs text-slate-400">Sep 2023 – Oct 2023</span>
              </div>
              <p className="text-sm text-teal-400 font-medium">Hazel Mobile Company</p>
              <ul className="list-disc list-inside text-sm text-slate-400 space-y-1.5 pt-1">
                <li>Collaborated with the development team to design and implement features using MVVM architecture, ensuring separation of concerns and maintainability.</li>
                <li>Integrated RESTful APIs using Volley and Retrofit for reliable data retrieval, JSON parsing, and background processing.</li>
                <li>Demonstrated expertise in clean coding practices and adherence to production Android standards.</li>
              </ul>
            </div>

            {/* Freelance & WordPress Custom Development */}
            <div className="relative pl-6 border-l-2 border-teal-500/30 space-y-2">
              <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-teal-400" />
              <div className="flex flex-wrap justify-between items-baseline">
                <h3 className="text-lg font-bold text-white">Freelance Full-Stack & WordPress Developer</h3>
                <span className="text-xs text-slate-400">Fiverr & Client Solutions</span>
              </div>
              <p className="text-sm text-teal-400 font-medium">Freelance / Client Projects</p>
              <ul className="list-disc list-inside text-sm text-slate-400 space-y-1.5 pt-1">
                <li>Selected among 20+ competing candidates for technical evaluation by Zaan, successfully architecting and delivering a bespoke PHP custom WordPress theme tailored to company specifications.</li>
                <li>Delivered custom WordPress websites, custom themes, and bespoke PHP plugin solutions for global clients on Fiverr.</li>
                <li>Designed tailored admin panels with HTML, CSS, JavaScript, and custom backend hooks for efficient content management.</li>
              </ul>
            </div>
          </div>

          {/* GITHUB PROJECTS NOTE */}
          <div className="mt-8 bg-slate-900/50 border border-slate-800 rounded-xl p-5 backdrop-blur-sm">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Github className="w-4 h-4 text-teal-400" /> Open Source & GitHub Repositories
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Maintainer of <strong className="text-teal-300">17+ public projects</strong> across Native Android (Java / XML), Kotlin Multiplatform, Flutter, and WordPress/PHP plugins.
                </p>
              </div>
              <a
                href="https://github.com/Noor-ulain555"
                target="_blank"
                rel="noreferrer"
                className="text-xs bg-slate-800 hover:bg-slate-700 text-teal-300 border border-slate-700 px-3 py-1.5 rounded-lg transition-colors"
              >
                Explore GitHub ↗
              </a>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-3 pt-3 border-t border-slate-800/60 mt-3">
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  🌐 Freelance & Custom Web Services
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Available for custom WordPress theme & plugin development on Fiverr.
                </p>
              </div>
              <a
                href="https://www.fiverr.com/s/7Y4vZDE"
                target="_blank"
                rel="noreferrer"
                className="text-xs bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border border-teal-500/30 px-3 py-1.5 rounded-lg transition-colors"
              >
                Visit Fiverr Gig ↗
              </a>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <GraduationCap className="text-teal-400" /> Education
          </h2>
          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-white">Bachelor's Degree in Computer Science</h3>
              <p className="text-sm text-slate-400">University of Sargodha</p>
            </div>
          </div>
        </section>

        {/* CONTACT US SECTION */}
        <section id="contact" className="mb-20">
          <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-teal-950/40 border border-teal-500/30 rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-xl mx-auto space-y-4">
              <h2 className="text-3xl font-extrabold text-white">
                Let’s Build Something Great
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                I'm currently open to new mobile and full-stack engineering opportunities. Whether you have a project idea, a position to fill, or just want to connect, feel free to reach out!
              </p>

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap justify-center items-center gap-3 pt-4">
                {/* Primary CTA: WhatsApp */}
                <a
                  href="https://wa.me/923020662510?text=Hi%20Noor,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-emerald-500/20 text-sm"
                >
                  <Send className="w-4 h-4" /> Get In Touch (WhatsApp)
                </a>

                {/* Direct Email */}
                <a
                  href="mailto:noorulain9590@gmail.com"
                  className="inline-flex items-center gap-2 bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold px-4 py-3 rounded-xl transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-teal-400" /> noorulain9590@gmail.com
                </a>

                {/* Direct Phone Call */}
                <a
                  href="tel:03020662510"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 px-4 py-3 rounded-xl transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-teal-400" /> +92 302 0662510
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          © 2026 Noor Ul Ain • Mobile Software Engineer
        </footer>
      </main>
    </div>
  );
}


//old code 
// 'use client';

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Mail, 
//   Phone, 
//   MapPin, 
//   Code2, 
//   Smartphone, 
//   Briefcase, 
//   GraduationCap,
//   Wrench,
//   Bot,
//   Send,
//   Menu,
//   X,
//   User,
//   MessageSquare
  
// } from 'lucide-react';

// // Custom SVG Github Component
// const Github = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={className}
//   >
//     <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
//     <path d="M9 18c-4.51 2-5-2-7-2" />
//   </svg>
// );
// // ==========================================
// // HEADER NAVIGATION COMPONENT
// // ==========================================
// function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const navLinks = [
//     { name: 'Expertise', href: '#expertise', icon: Code2 },
//     { name: 'Projects', href: '#projects', icon: Smartphone },
//     { name: 'Experience', href: '#experience', icon: Briefcase },
//     { name: 'Education', href: '#education', icon: GraduationCap },
//     { name: 'Contact', href: '#contact', icon: Send },
//   ];

//   return (
//     <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 transition-all">
//       <div className="max-w-5xl mx-auto px-6">
//         <div className="flex items-center justify-between h-16">
          
//           {/* BRAND / LOGO */}
//           <a href="#" className="flex items-center gap-2 group">
//             <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-600 flex items-center justify-center text-slate-950 font-black text-lg shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform">
//               N
//             </div>
//             <div className="flex flex-col">
//               <span className="text-white font-bold text-base tracking-tight leading-none group-hover:text-teal-400 transition-colors">
//                 Noor Ul Ain
//               </span>
//               <span className="text-[10px] text-teal-400 font-medium tracking-wide">
//                 Mobile & Full-Stack Eng.
//               </span>
//             </div>
//           </a>

//           {/* DESKTOP NAVIGATION */}
//           <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all flex items-center gap-1.5"
//               >
//                 <link.icon className="w-3.5 h-3.5 text-teal-400" />
//                 {link.name}
//               </a>
//             ))}
//           </nav>

//           {/* EXTERNAL ACTION LINKS */}
//           <div className="hidden md:flex items-center gap-2">
//             <a
//               href="https://github.com/Noor-ulain555"
//               target="_blank"
//               rel="noreferrer"
//               className="p-2 text-slate-400 hover:text-teal-300 hover:bg-slate-800 rounded-lg transition-colors"
//               title="GitHub Profile"
//             >
//               <Github size={18} />
//             </a>

//             <a
//               href="https://www.fiverr.com/s/7Y4vZDE"
//               target="_blank"
//               rel="noreferrer"
//               className="text-xs bg-slate-900 hover:bg-slate-800 text-teal-300 border border-slate-700/80 px-3 py-1.5 rounded-lg transition-colors font-medium"
//             >
//               Fiverr
//             </a>

//             <a
//               href="https://wa.me/923020662510?text=Hi%20Noor,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
//               target="_blank"
//               rel="noreferrer"
//               className="text-xs bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded-lg transition-colors font-semibold flex items-center gap-1.5"
//             >
//               <MessageSquare className="w-3.5 h-3.5" />
//               WhatsApp
//             </a>
//           </div>

//           {/* MOBILE MENU BUTTON */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800 focus:outline-none"
//             >
//               {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* MOBILE MENU DROPDOWN */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-6 pt-3 pb-6 space-y-3">
//           <nav className="flex flex-col space-y-1">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-teal-300 hover:bg-slate-900 rounded-lg flex items-center gap-2 transition-colors"
//               >
//                 <link.icon className="w-4 h-4 text-teal-400" />
//                 {link.name}
//               </a>
//             ))}
//           </nav>

//           <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2">
//             <a
//               href="https://github.com/Noor-ulain555"
//               target="_blank"
//               rel="noreferrer"
//               className="flex-1 py-2 text-center text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-800 rounded-lg"
//             >
//               GitHub
//             </a>
//             <a
//               href="https://www.fiverr.com/s/7Y4vZDE"
//               target="_blank"
//               rel="noreferrer"
//               className="flex-1 py-2 text-center text-xs font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/30 rounded-lg"
//             >
//               Fiverr
//             </a>
//             <a
//               href="https://wa.me/923020662510"
//               target="_blank"
//               rel="noreferrer"
//               className="flex-1 py-2 text-center text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-lg"
//             >
//               WhatsApp
//             </a>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }





// // ==========================================
// // 1. DATA STRUCTURES & DATA
// // ==========================================
// interface Project {
//   id: string;
//   title: string;
//   category: 'mobile' | 'backend';
//   tech: string;
//   description: string;
//   badge: string;
//   tags: string[];
//   link?: string;
// }

// const projectsData: Project[] = [
//   {
//     id: 'hidden-device-finder',
//     title: 'Hidden Device Finder (CMP)',
//     category: 'mobile',
//     tech: 'Kotlin Multiplatform / Jetpack Compose',
//     description: 'Cross-platform detection system built using Kotlin Multiplatform & Compose Multiplatform with real sensor integrations (camera/glint detection, Bluetooth, WiFi, magnetometer), confidence scoring, intensity levels, and full CRUD scan history.',
//     badge: 'Play Store & App Store',
//     tags: ['KMP', 'Compose', 'Kotlin', 'Sensors', 'ClientProject']
//   },
//   {
//     id: 'namaz-status',
//     title: 'Namaz Status App',
//     category: 'mobile',
//     tech: 'Compose Multiplatform (CMP) / Kotlin',
//     description: 'Islamic prayer tracking & notification app built using Compose Multiplatform (CMP) with cross-platform architecture and real-time prayer schedule notifications.',
//     badge: 'Play Store Deployed',
//     tags: ['CMP', 'ComposeMultiplatform', 'Kotlin', 'PrayerTracker'],
//     link: 'https://play.google.com/store/apps/details?id=org.lumincluster.namazreminder'
//   },
//   {
//     id: 'noorani-qaida',
//     title: 'Noorani Qaida - Vocabulary',
//     category: 'mobile',
//     tech: 'Flutter / Dart / Google AdMob',
//     description: 'Interactive Islamic learning app designed for children with custom audio player integration, daily quiz challenges, mistake review tracking, and AdMob monetization.',
//     badge: '5K+ Downloads • Play Store',
//     tags: ['Flutter', 'Dart', 'AdMob', 'AudioPlayer', 'QuizSystem'],
//     link: 'https://play.google.com/store/apps/details?id=com.lumencluster.nooraniqaida'
//   },
//   {
//     id: 'sakina-app',
//     title: 'Sakina: Islamic Habit Tracker',
//     category: 'mobile',
//     tech: 'Flutter / Dart / Firebase',
//     description: 'First personal production app designed for daily spiritual tracking, daily Azkar & Duas, journal intentions, and habits tracking with Firebase integration.',
//     badge: 'Play Store Deployed',
//     tags: ['Flutter', 'Dart', 'Firebase', 'HabitTracker', 'PersonalProject'],
//     link: 'https://play.google.com/store/apps/details?id=com.codavix.solution.sakina'
//   },
//   {
//     id: 'emoji-sudoku',
//     title: 'Emoji Sudoku: Classic Puzzle',
//     category: 'mobile',
//     tech: 'Flutter / Dart / Google AdMob',
//     description: 'Fun puzzle game featuring customizable emoji themes, multiple difficulty levels, daily challenges, intelligent hint engine, and Google AdMob monetization.',
//     badge: 'Play Store Deployed',
//     tags: ['Flutter', 'Dart', 'AdMob', 'GameDev', 'PuzzleEngine'],
//     link: 'https://play.google.com/store/apps/details?id=com.lumenCluster.emoji_sudoku'
//   },
//   {
//     id: 'tic-tac-arena',
//     title: 'Tic Tac Arena',
//     category: 'mobile',
//     tech: 'Flutter / Dart',
//     description: 'Multiplayer game app featuring Player vs AI and Player vs Player modes, custom character selections, responsive layouts, and stateful game tracking logic.',
//     badge: 'Play Store Deployed',
//     tags: ['Flutter', 'Dart', 'GameLogic', 'StateManagement'],
//     link: 'https://play.google.com/store/apps/details?id=com.lumenCluster.tictac_arena'
//   },
//   {
//     id: 'ktor-backend-api',
//     title: 'Ktor RESTful Backend API',
//     category: 'backend',
//     tech: 'Ktor / Kotlin / PostgreSQL / Docker',
//     description: 'Engineered scalable RESTful APIs using Ktor in Kotlin with structured routing, real-time features, notifications, and content filtering. Containerized with Docker and deployed on Render cloud platform.',
//     badge: 'Cloud Deployed',
//     tags: ['Kotlin', 'Ktor', 'Docker', 'PostgreSQL', 'Render']
//   }
// ];

// // ==========================================
// // 2. REUSABLE COMPONENTS
// // ==========================================
// function SkillBadge({ label }: { label: string }) {
//   return (
//     <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/50 hover:border-teal-500/50 transition-colors">
//       {label}
//     </span>
//   );
// }

// function ProjectCard({ project }: { project: Project }) {
//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, scale: 0.95 }}
//       transition={{ duration: 0.3 }}
//       whileHover={{ y: -5 }}
//       className="bg-slate-900/60 border border-slate-800 hover:border-teal-500/50 transition-colors rounded-xl p-6 flex flex-col justify-between backdrop-blur-sm"
//     >
//       <div>
//         <div className="flex justify-between items-start mb-2">
//           <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">{project.tech}</span>
//           <span className="text-[10px] bg-teal-500/10 text-teal-300 px-2 py-0.5 rounded border border-teal-500/20">{project.badge}</span>
//         </div>
//         <h3 className="text-xl font-bold text-white mb-3">
//           {project.title}
//         </h3>
//         <p className="text-sm text-slate-400 mb-6 leading-relaxed">
//           {project.description}
//         </p>
//       </div>

//       <div>
//         <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/50">
//           {project.tags.map((tag) => (
//             <span key={tag} className="text-[11px] bg-slate-800/60 text-slate-400 px-2 py-0.5 rounded">
//               #{tag}
//             </span>
//           ))}
//         </div>

//         {project.link && (
//           <a
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-1 text-xs text-teal-400 hover:text-teal-300 transition-colors hover:underline mt-3"
//           >
//             View on Google Play ↗
//           </a>
//         )}
//       </div>
//     </motion.div>
//   );
// }

// // ==========================================
// // 3. MAIN PORTFOLIO PAGE
// // ==========================================
// export default function Portfolio() {
//   const [filter, setFilter] = useState<'all' | 'mobile' | 'backend'>('all');

//   const filteredProjects = projectsData.filter((project) => {
//     if (filter === 'all') return true;
//     return project.category === filter;
//   });

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-950">
//       {/* Decorative Accent Gradients */}
//       <div className="fixed top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
//       <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

//       {/* CONTAINER */}
//       <main className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        
//         {/* HERO SECTION */}
//         <motion.header 
//           initial={{ opacity: 0, y: -20 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.5 }}
//           className="mb-16"
//         >
//           <div className="inline-block px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold mb-4">
//             Mobile & Full-Stack Developer
//           </div>
//           <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">
//             Noor Ul Ain
//           </h1>
//           <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-6">
//             Android, Flutter, and Ktor Backend Developer with <strong className="text-teal-300">3+ years of experience</strong> building production cross-platform apps, integrating modern AI toolsets, and architecting scalable cloud APIs.
//           </p>

//           {/* Quick Metrics Bar */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 p-4 bg-slate-900/40 border border-slate-800 rounded-xl max-w-xl">
//             <div>
//               <div className="text-2xl font-bold text-white">3+ Years</div>
//               <div className="text-xs text-slate-400">Professional Experience</div>
//             </div>
//             <div>
//               <div className="text-2xl font-bold text-white">6+ Apps</div>
//               <div className="text-xs text-slate-400">Published & Deployed</div>
//             </div>
//             <div className="col-span-2 sm:col-span-1">
//               <div className="text-2xl font-bold text-white">5K+</div>
//               <div className="text-xs text-slate-400">Play Store Downloads</div>
//             </div>
//           </div>

//           {/* Contact Links Bar */}
//           <div className="flex flex-wrap gap-3 text-sm text-slate-300 pt-2">
//             <a href="https://github.com/Noor-ulain555" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-teal-400 transition-colors bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
//               <Github className="w-4 h-4 text-teal-400" /> GitHub
//             </a>
//             <a href="mailto:noorulain9590@gmail.com" className="flex items-center gap-2 hover:text-teal-400 transition-colors bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
//               <Mail className="w-4 h-4 text-teal-400" /> noorulain9590@gmail.com
//             </a>
//             <span className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
//               <Phone className="w-4 h-4 text-teal-400" /> 03020662510
//             </span>
//             <span className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
//               <MapPin className="w-4 h-4 text-teal-400" /> Punjab, Pakistan
//             </span>
//           </div>
//         </motion.header>

//         {/* SKILLS & TOOLING SECTION */}
//         <section className="mb-20">
//           <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
//             <Code2 className="text-teal-400" /> Technical Expertise
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//             <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-6 backdrop-blur-sm">
//               <h3 className="text-lg font-semibold text-teal-300 mb-4">Mobile Development</h3>
//               <div className="flex flex-wrap gap-2">
//                 {['Kotlin', 'Jetpack Compose', 'Android SDK', 'Flutter', 'Dart', 'KMP'].map((s) => (
//                   <SkillBadge key={s} label={s} />
//                 ))}
//               </div>
//             </div>

//             <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-6 backdrop-blur-sm">
//               <h3 className="text-lg font-semibold text-teal-300 mb-4">Backend & Web</h3>
//               <div className="flex flex-wrap gap-2">
//                 {['Ktor', 'RESTful APIs', 'PostgreSQL', 'SQLite', 'Room DB', 'Docker', 'WordPress'].map((s) => (
//                   <SkillBadge key={s} label={s} />
//                 ))}
//               </div>
//             </div>

//             <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-6 backdrop-blur-sm">
//               <h3 className="text-lg font-semibold text-teal-300 mb-4">Architecture & Tools</h3>
//               <div className="flex flex-wrap gap-2">
//                 {['MVVM', 'Clean Architecture', 'Android Studio', 'IntelliJ IDEA', 'VS Code', 'Git / GitHub', 'Postman'].map((s) => (
//                   <SkillBadge key={s} label={s} />
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* AI WORKFLOW SECTION */}
//           <div className="bg-slate-900/40 border border-teal-500/20 rounded-xl p-6">
//             <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
//               <Bot className="w-5 h-5 text-teal-400" /> AI-Assisted Development & Workflows
//             </h3>
//             <p className="text-sm text-slate-400 mb-3">
//               Hands-on experience leveraging modern AI assistants and copilots to accelerate development, optimize code quality, and solve complex cross-platform architecture problems:
//             </p>
//             <div className="flex flex-wrap gap-2">
//               {['Claude Code', 'Google Gemini', 'ChatGPT', 'AI Coding Assistants'].map((ai) => (
//                 <span key={ai} className="text-xs bg-teal-500/10 text-teal-300 border border-teal-500/20 px-3 py-1 rounded-full">
//                   {ai}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* PROJECTS SECTION */}
//         <section className="mb-20">
//           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
//             <h2 className="text-2xl font-bold text-white flex items-center gap-3">
//               <Smartphone className="text-teal-400" /> Featured Projects
//             </h2>

//             <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800 self-start sm:self-auto">
//               {(['all', 'mobile', 'backend'] as const).map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setFilter(tab)}
//                   className={`px-4 py-1.5 text-xs font-medium rounded-md capitalize transition-all ${
//                     filter === tab
//                       ? 'bg-teal-500 text-slate-950 font-bold shadow'
//                       : 'text-slate-400 hover:text-white'
//                   }`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <AnimatePresence>
//               {filteredProjects.map((project) => (
//                 <ProjectCard key={project.id} project={project} />
//               ))}
//             </AnimatePresence>
//           </motion.div>
//         </section>
// {/* EXPERIENCE SECTION */}
// <section className="mb-20">
//   <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
//     <Briefcase className="text-teal-400" /> Professional Experience
//   </h2>

//   <div className="space-y-10">
//       {/* Flutter & Backend Mobile Developer */}
//       <div className="relative pl-6 border-l-2 border-teal-500/30 space-y-2">
//       <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-teal-400" />
//       <div className="flex flex-wrap justify-between items-baseline">
//         <h3 className="text-lg font-bold text-white">Mobile & Ktor Backend Engineer</h3>
//         <span className="text-xs text-slate-400">2023 – Present</span>
//       </div>
//       <p className="text-sm text-teal-400 font-medium">Production & Cross-Platform Development</p>
//       <ul className="list-disc list-inside text-sm text-slate-400 space-y-1.5 pt-1">
//         <li>Engineered cross-platform Flutter applications utilizing Provider/Riverpod state management and asynchronous reactive UI streams.</li>
//         <li>Applied full widget lifecycle management (<code className="text-xs text-teal-300">initState</code>, <code className="text-xs text-teal-300">dispose</code>) for memory cleanup and network controllers.</li>
//         <li>Architected custom Ktor RESTful APIs with Docker, PostgreSQL database integrations, and deployment on Render cloud platforms.</li>
//       </ul>
//     </div>
//     {/* Hazel Mobile Company */}
//     <div className="relative pl-6 border-l-2 border-teal-500/30 space-y-2">
//       <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-teal-400" />
//       <div className="flex flex-wrap justify-between items-baseline">
//         <h3 className="text-lg font-bold text-white">Android Developer Intern</h3>
//         <span className="text-xs text-slate-400">Sep 2023 – Oct 2023</span>
//       </div>
//       <p className="text-sm text-teal-400 font-medium">Hazel Mobile Company</p>
//       <ul className="list-disc list-inside text-sm text-slate-400 space-y-1.5 pt-1">
//         <li>Collaborated with the development team to design and implement features using MVVM architecture, ensuring separation of concerns and maintainability.</li>
//         <li>Integrated RESTful APIs using Volley and Retrofit for reliable data retrieval, JSON parsing, and background processing.</li>
//         <li>Demonstrated expertise in clean coding practices and adherence to production Android standards.</li>
//       </ul>
//     </div>

  

//     {/* Freelance & WordPress Custom Development */}
//     <div className="relative pl-6 border-l-2 border-teal-500/30 space-y-2">
//       <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-teal-400" />
//       <div className="flex flex-wrap justify-between items-baseline">
//         <h3 className="text-lg font-bold text-white">Freelance Full-Stack & WordPress Developer</h3>
//         <span className="text-xs text-slate-400">Fiverr & Client Solutions</span>
//       </div>
//       <p className="text-sm text-teal-400 font-medium">Freelance / Client Projects</p>
//       <ul className="list-disc list-inside text-sm text-slate-400 space-y-1.5 pt-1">
//         <li>Selected among 20+ competing candidates for technical evaluation by Zaan, successfully architecting and delivering a bespoke PHP custom WordPress theme tailored to company specifications.</li>
//         <li>Delivered custom WordPress websites, custom themes, and bespoke PHP plugin solutions for global clients on Fiverr.</li>
//         <li>Designed tailored admin panels with HTML, CSS, JavaScript, and custom backend hooks for efficient content management.</li>
//       </ul>
//     </div>

//   </div>

//   {/* GITHUB PROJECTS NOTE */}
//   <div className="mt-8 bg-slate-900/50 border border-slate-800 rounded-xl p-5 backdrop-blur-sm">
//     <div className="flex items-center justify-between flex-wrap gap-3">
//       <div>
//         <h4 className="text-sm font-bold text-white flex items-center gap-2">
//           <Github className="w-4 h-4 text-teal-400" /> Open Source & GitHub Repositories
//         </h4>
//         <p className="text-xs text-slate-400 mt-1">
//           Maintainer of <strong className="text-teal-300">17+ public projects</strong> across Native Android (Java / XML), Kotlin Multiplatform, Flutter, and WordPress/PHP plugins.
//         </p>
//       </div>
//       <a
//         href="https://github.com/Noor-ulain555"
//         target="_blank"
//         rel="noreferrer"
//         className="text-xs bg-slate-800 hover:bg-slate-700 text-teal-300 border border-slate-700 px-3 py-1.5 rounded-lg transition-colors"
//       >
//         Explore GitHub ↗
//       </a>
//     </div>
//     <div className="flex items-center justify-between flex-wrap gap-3 pt-1">
//       <div>
//         <h4 className="text-sm font-bold text-white flex items-center gap-2">
//           🌐 Freelance & Custom Web Services
//         </h4>
//         <p className="text-xs text-slate-400 mt-1">
//           Available for custom WordPress theme & plugin development on Fiverr.
//         </p>
//       </div>
//       <a
//         href="https://www.fiverr.com/s/7Y4vZDE"
//         target="_blank"
//         rel="noreferrer"
//         className="text-xs bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border border-teal-500/30 px-3 py-1.5 rounded-lg transition-colors"
//       >
//         Visit Fiverr Gig ↗
//       </a>
//     </div>
//   </div>
// </section>
//         {/* EXPERIENCE SECTION
//         <section className="mb-20">
//           <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
//             <Briefcase className="text-teal-400" /> Professional Experience
//           </h2>
//           <div className="space-y-8">
//             <div className="relative pl-6 border-l-2 border-teal-500/30 space-y-2">
//               <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-teal-400" />
//               <div className="flex flex-wrap justify-between items-baseline">
//                 <h3 className="text-lg font-bold text-white">Backend & Flutter Developer</h3>
//                 <span className="text-xs text-slate-400">2025 – Present </span>
//               </div>
//               <p className="text-sm text-teal-400 font-medium">Tech Startup (Stealth)</p>
//               <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
//                 <li>Developed RESTful APIs using Ktor in Kotlin with routing, search, and push notification integrations.</li>
//                 <li>Designed full-stack architecture connecting Flutter mobile apps with Ktor backend APIs.</li>
//                 <li>Deployed backend services on Render using Docker containers and managed WordPress web properties.</li>
//                 <li>Leveraged modern AI tools (Claude, Gemini) to streamline debugging and accelerate cross-platform feature implementations.</li>
//               </ul>
//             </div>
//           </div>
//         </section> */}

//         {/* EDUCATION SECTION */}
//         <section className="mb-16">
//           <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
//             <GraduationCap className="text-teal-400" /> Education
//           </h2>
//           <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 flex justify-between items-center">
//             <div>
//               <h3 className="text-lg font-bold text-white">Bachelor's Degree in Computer Science</h3>
//               <p className="text-sm text-slate-400">University of Sargodha</p>
//             </div>
//           </div>
//         </section>

// {/* CONTACT US SECTION */}
// <section className="mb-20">
//   <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-teal-950/40 border border-teal-500/30 rounded-2xl p-8 text-center relative overflow-hidden">
//     <div className="relative z-10 max-w-xl mx-auto space-y-4">
//       <h2 className="text-3xl font-extrabold text-white">
//         Let’s Build Something Great
//       </h2>
//       <p className="text-sm text-slate-400 leading-relaxed">
//         I'm currently open to new mobile and full-stack engineering opportunities. Whether you have a project idea, a position to fill, or just want to connect, feel free to reach out!
//       </p>

//       {/* ACTION BUTTONS */}
//       <div className="flex flex-wrap justify-center items-center gap-3 pt-4">
//         {/* Primary CTA: WhatsApp */}
//         <a
//         href="https://wa.me/923020662510?text=Hi%20Noor,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
//           // href="https://wa.me/923020662510"
//           target="_blank"
//           rel="noreferrer"
//           className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-emerald-500/20 text-sm"
//         >
//           <Send className="w-4 h-4" /> Get In Touch (WhatsApp)
//         </a>

//         {/* Direct Email */}
//         <a
//           href="mailto:noorulain9590@gmail.com"
//           className="inline-flex items-center gap-2 bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold px-4 py-3 rounded-xl transition-colors text-sm"
//         >
//           <Mail className="w-4 h-4 text-teal-400" /> noorulain9590@gmail.com
//         </a>

//         {/* Direct Phone Call */}
//         <a
//           href="tel:03020662510"
//           className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 px-4 py-3 rounded-xl transition-colors text-sm"
//         >
//           <Phone className="w-4 h-4 text-teal-400" /> +92 302 0662510
//         </a>
//       </div>
//     </div>
//   </div>
// </section>
// {/* CONTACT US SECTION
//             <section className="mb-20">
//           <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-teal-950/40 border border-teal-500/30 rounded-2xl p-8 text-center relative overflow-hidden">
//             <div className="relative z-10 max-w-xl mx-auto space-y-4">
//               <h2 className="text-3xl font-extrabold text-white">
//                 Let’s Build Something Great
//               </h2>
//               <p className="text-sm text-slate-400 leading-relaxed">
//                 I'm currently open to new mobile and full-stack engineering opportunities. Whether you have a project idea, a question, or just want to connect, feel free to reach out!
//               </p>

//               <div className="flex flex-wrap justify-center gap-4 pt-4">
//                 <a
//                   href="mailto:noorulain9590@gmail.com"
//                   className="inline-flex items-center gap-2 bg-teal-500 text-slate-950 font-bold px-6 py-3 rounded-xl hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/20 text-sm"
//                 >
//                   < Send className="w-4 h-4" /> Get In Touch
//                 </a>
//                 <a
//                   href="tel:03020662510"
//                   className="inline-flex items-center gap-2 bg-slate-800/80 text-slate-200 border border-slate-700 font-semibold px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors text-sm"
//                 >
//                   <Phone className="w-4 h-4 text-teal-400" /> +92 302 0662510
//                 </a>
//                 <a href="mailto:noorulain9590@gmail.com" className="flex items-center gap-2 hover:text-teal-400 transition-colors bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
//               <Mail className="w-4 h-4 text-teal-400" /> noorulain9590@gmail.com
//             </a>
//             <a
//   href="https://wa.me/923020662510"
//   target="_blank"
//   rel="noreferrer"
//   className="text-xs bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded-lg transition-colors"
// >
//   WhatsApp ↗
// </a>
//               </div>
//             </div>
//           </div>
//         </section> */}

//         {/* FOOTER */}
//         <footer className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
//         © 2026 Noor Ul Ain • Mobile Software Engineer        </footer>
//       </main>
//     </div>
//   );
// }











// 'use client'; // Required in Next.js when using State and Hooks

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Mail, 
//   Phone, 
//   MapPin, 
//   Code2, 
//   Smartphone, 
//   Briefcase, 
//   GraduationCap 
// } from 'lucide-react';

// const Github = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={className}
//   >
//     <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
//     <path d="M9 18c-4.51 2-5-2-7-2" />
//   </svg>
// );
// // ==========================================
// // 1. DATA STRUCTURES
// // ==========================================
// interface Project {
//   id: string;
//   title: string;
//   category: 'mobile' | 'backend';
//   tech: string;
//   description: string;
//   badge: string;
//   tags: string[];
//   link?: string;
// }
// const projectsData: Project[] = [
//   {
//     id: 'namaz-status',
//     title: 'Namaz Status App',
//     category: 'mobile',
//     tech: 'Compose Multiplatform (CMP) / Kotlin',
//     description: 'Islamic prayer tracking & notification app built using Compose Multiplatform (CMP) with cross-platform architecture and real-time prayer schedule notifications.',
//     badge: 'Play Store Deployed',
//     tags: ['CMP', 'ComposeMultiplatform', 'kotlin', 'PrayerTracker'],
//     link: 'https://play.google.com/store/apps/details?id=org.lumincluster.namazreminder'
//   },
//   {
//     id: 'noorani-qaida',
//     title: 'Noorani Qaida - Vocabulary',
//     category: 'mobile',
//     tech: 'Flutter / Dart / Google AdMob',
//     description: 'Interactive Islamic learning app designed for children with custom audio player integration, daily quiz challenges, mistake review tracking, and AdMob integration.',
//     badge: '5K+ Downloads • Play Store',
//     tags: ['Flutter', 'Dart', 'AdMob', 'AudioPlayer', 'QuizSystem'],
//     link: 'https://play.google.com/store/apps/details?id=com.lumencluster.nooraniqaida'
//   },
//   {
//     id: 'sakina-app',
//     title: 'Sakina: Islamic Habit Tracker',
//     category: 'mobile',
//     tech: 'Flutter / Dart',
//     description: 'First personal production app designed for daily spiritual tracking, daily Azkar & Duas, journal intentions, and habits tracking with Firebase integration.',
//     badge: 'Play Store Deployed',
//     tags: ['Flutter', 'Dart', 'Firebase', 'HabitTracker', 'PersonalProject'],
//     link: 'https://play.google.com/store/apps/details?id=com.codavix.solution.sakina'
//   },
//   {
//     id: 'emoji-sudoku',
//     title: 'Emoji Sudoku: Classic Puzzle',
//     category: 'mobile',
//     tech: 'Flutter / Dart / Google AdMob',
//     description: 'Fun puzzle game featuring customizable emoji themes, multiple difficulty levels, daily challenges, intelligent hint engine, and Google AdMob monetization.',
//     badge: 'Play Store Deployed',
//     tags: ['Flutter', 'Dart', 'AdMob', 'GameDev', 'PuzzleEngine'],
//     link: 'https://play.google.com/store/apps/details?id=com.lumenCluster.emoji_sudoku'
//   },
//   {
//     id: 'tic-tac-arena',
//     title: 'Tic Tac Arena',
//     category: 'mobile',
//     tech: 'Flutter / Dart / Firebase',
//     description: 'Multiplayer game app featuring Player vs AI and Player vs Player modes, custom character selections, responsive layouts, and stateful game tracking logic.',
//     badge: 'Play Store Deployed',
//     tags: ['Flutter', 'Dart', 'GameLogic', 'StateManagement'],
//     link: 'https://play.google.com/store/apps/details?id=com.lumenCluster.tictac_arena'
//   },
//   {
//     id: 'hidden-device-finder',
//     title: 'Hidden Device Finder (CMP)',
//     category: 'mobile',
//     tech: 'Kotlin Multiplatform / Jetpack Compose',
//     description: 'Client project focused on cross-platform signal detection system built using KMP & Compose Multiplatform with real sensor integrations (Bluetooth, Wi-Fi, Magnetometer) and scan history.',
//     badge: 'Client Project',
//     tags: ['KMP', 'Compose', 'Kotlin', 'Sensors', 'ClientProject']
//   },
//   {
//     id: 'ktor-backend-api',
//     title: 'Ktor RESTful Backend API',
//     category: 'backend',
//     tech: 'Ktor / Kotlin / PostgreSQL / Docker',
//     description: 'Scalable REST APIs built using Ktor in Kotlin, integrated with PostgreSQL/SQLite databases, containerized with Docker, and deployed on Render cloud platform.',
//     badge: 'Cloud Deployed',
//     tags: ['Kotlin', 'Ktor', 'Docker', 'PostgreSQL', 'Render']
//   }
// ];
// // const projectsData: Project[] = [
// //   {
// //     id: '1',
// //     title: 'Hidden Device Finder (CMP)',
// //     category: 'mobile',
// //     tech: 'Kotlin Multiplatform',
// //     description: 'Cross-platform detection system built using KMP & Compose Multiplatform with real sensor integrations (Bluetooth, WiFi, Magnetometer) and scan history.',
// //     badge: 'Play Store & App Store',
// //     tags: ['KMP', 'Compose', 'Kotlin', 'Sensors']
// //   },
// //   {
// //     id: '2',
// //     title: 'Noorani Qaida App',
// //     category: 'mobile',
// //     tech: 'Flutter',
// //     description: 'Interactive Islamic learning app designed for children with responsive layout, custom audio player integration, and smooth UI flow.',
// //     badge: 'Play Store & App Store',
// //     tags: ['Flutter', 'Dart', 'State Management']
// //   },
// //   {
// //     id: '3',
// //     title: 'Tic Tac Game',
// //     category: 'mobile',
// //     tech: 'Flutter',
// //     description: 'Multiplayer game app built with Flutter with responsive layouts and stateful game tracking logic.',
// //     badge: 'Play Store & App Store',
// //     tags: ['Flutter', 'Dart', 'Game Logic']
// //   },
// //   {
// //     id: '4',
// //     title: 'Ktor RESTful Backend API',
// //     category: 'backend',
// //     tech: 'Ktor Framework',
// //     description: 'Scalable REST APIs built using Ktor in Kotlin, integrated with PostgreSQL/SQLite, containerized with Docker, and deployed on Render cloud platform.',
// //     badge: 'Cloud Deployed',
// //     tags: ['Kotlin', 'Ktor', 'Docker', 'PostgreSQL']
// //   }
// // ];

// // ==========================================
// // 2. REUSABLE COMPONENTS & PROPS
// // ==========================================

// // --- COMPONENT: SkillBadge ---
// // Takes 'label' as a Prop
// function SkillBadge({ label }: { label: string }) {
//   return (
//     <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/50 hover:border-teal-500/50 transition-colors">
//       {label}
//     </span>
//   );
// }

// // --- COMPONENT: ProjectCard ---
// // Takes 'project' object as a Prop, includes Framer Motion ANIMATIONS
// function ProjectCard({ project }: { project: Project }) {
//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, scale: 0.95 }}
//       transition={{ duration: 0.3 }}
//       whileHover={{ y: -5 }} // Smooth hover animation
//       className="bg-slate-900/60 border border-slate-800 hover:border-teal-500/50 transition-colors rounded-xl p-6 flex flex-col justify-between backdrop-blur-sm"
//     >
//       <div>
//         <div className="flex justify-between items-start mb-2">
//           <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">{project.tech}</span>
//           <span className="text-[10px] bg-teal-500/10 text-teal-300 px-2 py-0.5 rounded border border-teal-500/20">{project.badge}</span>
//         </div>
//         <h3 className="text-xl font-bold text-white mb-3">
//           {project.title}
//         </h3>
//         <p className="text-sm text-slate-400 mb-6 leading-relaxed">
//           {project.description}
//         </p>
//       </div>
//       <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/50">
//         {project.tags.map((tag) => (
//           <span key={tag} className="text-[11px] bg-slate-800/60 text-slate-400 px-2 py-0.5 rounded">
//             #{tag}
//           </span>
//         ))}
//         </div>
//         <div>
//         {/* 🚀 ADD IT HERE */}
//         {project.link && (
//           <a
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-1 text-xs text-teal-400 hover:text-teal-300 transition-colors hover:underline mt-3"
//           >
//             View on Google Play ↗
//           </a>
//         )}
//       </div>
//     </motion.div>
//   );
// }

// // ==========================================
// // 3. MAIN PORTFOLIO LAYOUT PAGE
// // ==========================================
// export default function Portfolio() {
//   // HOOK & STATE: Filter functionality ('all', 'mobile', 'backend')
//   const [filter, setFilter] = useState<'all' | 'mobile' | 'backend'>('all');

//   // Derived state based on selected filter state
//   const filteredProjects = projectsData.filter((project) => {
//     if (filter === 'all') return true;
//     return project.category === filter;
//   });

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-950">
//       {/* Decorative Accent Gradients */}
//       <div className="fixed top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
//       <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

//       {/* RESPONSIVE LAYOUT CONTAINER */}
//       <main className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        
//         {/* HERO SECTION WITH ANIMATION */}
//         <motion.header 
//           initial={{ opacity: 0, y: -20 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.5 }}
//           className="mb-20"
//         >
//           <div className="inline-block px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold mb-4">
//             Mobile & Full-Stack Developer
//           </div>
//           <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">
//             Noor Ul Ain
//           </h1>
//           <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-6">
//             Android, Flutter, and Ktor Backend Developer with production experience building cross-platform apps and scalable cloud APIs.
//           </p>

//           {/* Contact Links Bar */}
//           <div className="flex flex-wrap gap-4 text-sm text-slate-300 pt-2">
//             <a href="https://github.com/Noor-ulain555" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-teal-400 transition-colors bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
//               <Github className="w-4 h-4 text-teal-400" /> GitHub
//             </a>
//             <a href="mailto:noorulain9590@gmail.com" className="flex items-center gap-2 hover:text-teal-400 transition-colors bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
//               <Mail className="w-4 h-4 text-teal-400" /> noorulain9590@gmail.com
//             </a>
//             <span className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
//               <Phone className="w-4 h-4 text-teal-400" /> 03020662510
//             </span>
//             <span className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
//               <MapPin className="w-4 h-4 text-teal-400" /> Punjab, Pakistan
//             </span>
//           </div>
//         </motion.header>

//         {/* SKILLS SECTION */}
//         <section className="mb-20">
//           <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
//             <Code2 className="text-teal-400" /> Technical Expertise
//           </h2>
          
//           {/* RESPONSIVE GRID LAYOUT: 1 column on mobile, 3 columns on desktop */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-6 backdrop-blur-sm">
//               <h3 className="text-lg font-semibold text-teal-300 mb-4">Mobile Development</h3>
//               <div className="flex flex-wrap gap-2">
//                 {['Kotlin', 'Jetpack Compose', 'Android SDK', 'Flutter', 'Dart', 'KMP'].map((s) => (
//                   <SkillBadge key={s} label={s} />
//                 ))}
//               </div>
//             </div>

//             <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-6 backdrop-blur-sm">
//               <h3 className="text-lg font-semibold text-teal-300 mb-4">Backend & DB</h3>
//               <div className="flex flex-wrap gap-2">
//                 {['Ktor', 'RESTful APIs', 'PostgreSQL', 'SQLite', 'Room DB', 'Docker'].map((s) => (
//                   <SkillBadge key={s} label={s} />
//                 ))}
//               </div>
//             </div>

//             <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-6 backdrop-blur-sm">
//               <h3 className="text-lg font-semibold text-teal-300 mb-4">Architecture & Tools</h3>
//               <div className="flex flex-wrap gap-2">
//                 {['MVVM', 'Clean Architecture', 'Git', 'GitHub', 'VS Code', 'Postman'].map((s) => (
//                   <SkillBadge key={s} label={s} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* PROJECTS SECTION WITH INTERACTIVE STATE FILTERING */}
//         <section className="mb-20">
//           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
//             <h2 className="text-2xl font-bold text-white flex items-center gap-3">
//               <Smartphone className="text-teal-400" /> Featured Projects
//             </h2>

//             {/* STATE FILTER BUTTONS */}
//             <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800 self-start sm:self-auto">
//               {(['all', 'mobile', 'backend'] as const).map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setFilter(tab)}
//                   className={`px-4 py-1.5 text-xs font-medium rounded-md capitalize transition-all ${
//                     filter === tab
//                       ? 'bg-teal-500 text-slate-950 font-bold shadow'
//                       : 'text-slate-400 hover:text-white'
//                   }`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* ANIMATED RESPONSIVE GRID */}
//           <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <AnimatePresence>
//               {filteredProjects.map((project) => (
//                 <ProjectCard key={project.id} project={project} />
//               ))}
//             </AnimatePresence>
//           </motion.div>
//         </section>

//         {/* EXPERIENCE SECTION */}
//         <section className="mb-20">
//           <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
//             <Briefcase className="text-teal-400" /> Professional Experience
//           </h2>
//           <div className="space-y-8">
//             <div className="relative pl-6 border-l-2 border-teal-500/30 space-y-2">
//               <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-teal-400" />
//               <div className="flex flex-wrap justify-between items-baseline">
//                 <h3 className="text-lg font-bold text-white">Backend & Flutter Developer</h3>
//                 <span className="text-xs text-slate-400">2025 – Present</span>
//               </div>
//               <p className="text-sm text-teal-400 font-medium">Tech Startup (Stealth)</p>
//               <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
//                 <li>Developed RESTful APIs using Ktor in Kotlin with routing, search, and push notification integrations.</li>
//                 <li>Designed full-stack architecture connecting Flutter mobile apps with Ktor backend APIs.</li>
//                 <li>Deployed backend services on Render using Docker containers</li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         {/* EDUCATION SECTION */}
//         <section className="mb-16">
//           <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
//             <GraduationCap className="text-teal-400" /> Education
//           </h2>
//           <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 flex justify-between items-center">
//             <div>
//               <h3 className="text-lg font-bold text-white">Bachelor's Degree in Computer Science</h3>
//               <p className="text-sm text-slate-400">University of Sargodha</p>
//             </div>
//             {/* <span className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700">
//               2017 – 2021[cite: 1]
//             </span> */}
//           </div>
//         </section>

//         {/* FOOTER */}
//         <footer className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
//           Built with React, Next.js & Tailwind CSS • Deployed on Vercel
//         </footer>
//       </main>
//     </div>
//   );
// }