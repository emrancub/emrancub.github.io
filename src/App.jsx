import './App.css'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Download,
  BookOpen,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Brain,
  Database,
  Globe,
  ChevronRight,
  Star
} from 'lucide-react'

// Import images
import profileImage from './assets/profile.png'
import researchImage1 from './assets/SvNJHiRP8MQr.jpg'
import researchImage2 from './assets/x6GnqoKfPdRL.jpg'
import researchImage3 from './assets/h4wGsiRl89OB.png'
import techBg from './assets/cn7TemDSMkXh.jpg'
import mlVisualization from './assets/INhJUCqbigIM.gif'
import neuralNetwork from './assets/TfdvlfZW83jb.jpg'
import bioinformatics from './assets/cAhlSma41ogZ.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Research', href: '#research' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Awards', href: '#awards' },
    { name: 'Contact', href: '#contact' }
  ]

  const publications = [
    {
      title: "Predicting substance use behaviors among students taking university entrance test: a cross-sectional study with machine learning techniques",
      journal: "Current Psychology",
      year: "2024",
      authors: "Hasan, Md Emran, Mohammed A. Mamun, et al."
    },
    {
      title: "Applications of Artificial Intelligence for Health Informatics: A Systematic Review",
      journal: "Journal of Artificial Intelligence for Medical Sciences",
      year: "2023",
      authors: "Hasan, Md Emran, Md Jahidul Islam, et al."
    },
    {
      title: "Association of risk factors with mental illness in a rural community: insights from machine learning models",
      journal: "BJPsych Open",
      year: "2025",
      authors: "Al-Mamun, Firoj, Mohammed A. Mamun, Md Emran Hasan, et al."
    }
  ]

  const experiences = [
    {
      title: "PhD Researcher",
      company: "Nanjing University of Science and Technology",
      period: "2024 - Present",
      location: "China",
      description: "Conducting research on bioinformatics and early prediction of COPD disease under Professor Dong-Jun Yu."
    },
    {
      title: "Graduate Researcher",
      company: "Northeastern University",
      period: "2022 - 2024",
      location: "China",
      description: "Research on enhancing diabetic retinopathy identification with data mining techniques under Professor Chen Dongming."
    },
    {
      title: "Junior Software Developer",
      company: "Syftet Limited",
      period: "2021 - 2022",
      location: "Bangladesh",
      description: "Full-stack web development using Ruby on Rails, JavaScript, and various database technologies."
    },
    {
      title: "ICT Lecturer",
      company: "Exceptional Educare",
      period: "2017 - 2020",
      location: "Bangladesh",
      description: "Developed and delivered comprehensive ICT curriculum for HSC students."
    }
  ]

  const projects = [
    {
      title: "Neusoft Cloud HIS Hospital Management System",
      description: "Comprehensive hospital management system using Java Spring Boot, Vue.js, and MySQL for patient records, appointments, and EMR.",
      technologies: ["Java", "Spring Boot", "Vue.js", "MySQL"]
    },
    {
      title: "Image Classification using Deep Learning",
      description: "Novel deep-learning model for image classification with impressive accuracy on test datasets.",
      technologies: ["Python", "PyTorch", "OpenCV", "Deep Learning"]
    },
    {
      title: "Web-Based Employee Management System",
      description: "Full-stack employee management system with robust database backend and modern web interface.",
      technologies: ["Ruby", "Ruby on Rails", "JavaScript", "Bootstrap", "SQL"]
    },
    {
      title: "Mess Management System",
      description: "User-friendly web-based system for mess management with efficient database connectivity.",
      technologies: ["Java", "Spring Framework", "SQL"]
    }
  ]

  const skills = [
    { category: "Programming", items: ["Python", "Ruby", "C", "JavaScript", "Vue.js", "Spring Boot", "HTML", "CSS"] },
    { category: "Databases", items: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "Microsoft Access", "Oracle"] },
    { category: "ML/AI", items: ["PyTorch", "TensorFlow", "OpenCV", "Scikit-learn", "Data Mining", "Statistical Learning"] },
    { category: "Tools", items: ["Google Colab", "Jupyter Notebook", "Kaggle", "VS Code", "Git", "Linux"] },
    { category: "Languages", items: ["English (Professional)", "Chinese (Basic)", "Bengali (Native)"] }
  ]

  const awards = [
    {
      title: "Excellent Papers Prize",
      organization: "1st NJUST Academic Forum for International Postgraduate Students",
      year: "2024"
    },
    {
      title: "Chinese Government Scholarship",
      organization: "Chinese Scholarship Council (CSC)",
      year: "2020"
    },
    {
      title: "Merit Scholarship",
      organization: "City University Bangladesh",
      year: "2016-2019"
    },
    {
      title: "Best Volunteer Award",
      organization: "Bangladesh Innovation Forum",
      year: "2019"
    },
    {
      title: "First Prize",
      organization: "Intra-University Programming Contest",
      year: "2017"
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(nav => nav.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-bold text-xl text-slate-800"
            >
              Md Emran Hasan
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-slate-600 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
                Advancing
                <span className="text-blue-600"> Research</span> in
                <span className="text-blue-600"> AI</span> &
                <span className="text-blue-600"> Bioinformatics</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                PhD candidate at NJUST specializing in machine learning applications for healthcare, 
                data mining, and pattern recognition. Passionate about bridging technology and societal needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('#research')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  View Research <ChevronRight size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                >
                  Download CV <Download size={20} />
                </motion.button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">11+</div>
                  <div className="text-sm text-slate-600">Publications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">5+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">4+</div>
                  <div className="text-sm text-slate-600">Major Projects</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src={profileImage}
                  alt="Md Emran Hasan"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-3xl opacity-20 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A passionate researcher dedicated to advancing knowledge in computer science and bioinformatics
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={researchImage1}
                alt="Research Environment"
                className="w-full rounded-2xl shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-slate-700 leading-relaxed">
                Greetings! I am MD Emran Hasan, a passionate researcher and educator dedicated to advancing 
                knowledge in computer science and bioinformatics. My academic journey has taken me from 
                Bangladesh to China, where I am currently pursuing a PhD in Computer Science and Technology 
                at Nanjing University of Science and Technology.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                With a strong commitment to fostering innovation and collaboration, I aim to bridge the gap 
                between technology and societal needs. My research focuses on utilizing data mining and machine 
                learning techniques to tackle pressing health issues, particularly in mental health and diabetes.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                I believe that technology can be a powerful tool for positive change, and I strive to explore 
                its potential in addressing real-world challenges through impactful research, engaging teaching, 
                and active community involvement.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-600" size={20} />
                  <span className="text-slate-700">Nanjing, China</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-600" size={20} />
                  <span className="text-slate-700">writetoemran@outlook.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-blue-600" size={20} />
                  <span className="text-slate-700">PhD Candidate</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="text-blue-600" size={20} />
                  <span className="text-slate-700">Bangladesh Origin</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Research & Publications</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Exploring the intersection of AI, machine learning, and healthcare through innovative research
            </p>
          </motion.div>

          {/* Research Areas */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Brain className="text-blue-600" size={32} />,
                title: "Bioinformatics",
                description: "Exploring intersections of biology and data science for healthcare breakthroughs",
                image: bioinformatics
              },
              {
                icon: <Database className="text-blue-600" size={32} />,
                title: "Machine Learning",
                description: "Applying advanced algorithms to analyze patterns and predict outcomes",
                image: neuralNetwork
              },
              {
                icon: <BookOpen className="text-blue-600" size={32} />,
                title: "Data Mining",
                description: "Extracting valuable insights from large datasets in health informatics",
                image: mlVisualization
              }
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 mb-4 rounded-lg overflow-hidden">
                  <img src={area.image} alt={area.title} className="w-full h-full object-cover" />
                </div>
                <div className="mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{area.title}</h3>
                <p className="text-slate-600">{area.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Publications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Recent Publications</h3>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-blue-600 pl-6 py-4 hover:bg-slate-50 transition-colors"
                >
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">{pub.title}</h4>
                  <p className="text-blue-600 font-medium mb-1">{pub.journal} ({pub.year})</p>
                  <p className="text-slate-600 text-sm">{pub.authors}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center gap-2 mx-auto">
                View All Publications <ExternalLink size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Experience</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A journey through academia, research, and industry
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-8"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <div className="flex-1 bg-slate-50 rounded-2xl p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-800">{exp.title}</h3>
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-slate-600 font-medium">{exp.period}</p>
                        <p className="text-slate-500 text-sm">{exp.location}</p>
                      </div>
                    </div>
                    <p className="text-slate-700">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Projects</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Innovative solutions combining technology and real-world applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Code className="text-blue-600" size={24} />
                  <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                </div>
                <p className="text-slate-600 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Technical proficiencies spanning multiple domains
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-4">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-2 text-slate-700"
                    >
                      <Star className="text-blue-600" size={16} />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Awards & Recognition</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Achievements and honors throughout my academic and professional journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-yellow-500" size={24} />
                  <span className="text-yellow-600 font-bold text-lg">{award.year}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{award.title}</h3>
                <p className="text-slate-600">{award.organization}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Let's Connect</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Interested in collaboration or have questions? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Email</h3>
                  <p className="text-slate-600">writetoemran@outlook.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Phone</h3>
                  <p className="text-slate-600">(+86) 17372775494</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Location</h3>
                  <p className="text-slate-600">Nanjing, China</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-blue-100 transition-colors"
                >
                  <Github className="text-slate-600 hover:text-blue-600" size={24} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-blue-100 transition-colors"
                >
                  <Linkedin className="text-slate-600 hover:text-blue-600" size={24} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-blue-100 transition-colors"
                >
                  <BookOpen className="text-slate-600 hover:text-blue-600" size={24} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8"
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Md Emran Hasan</h3>
            <p className="text-slate-400 mb-6">
              PhD Candidate in Computer Science and Technology | AI & Bioinformatics Researcher
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <BookOpen size={24} />
              </a>
            </div>
            <p className="text-slate-500 text-sm">
              © 2024 Md Emran Hasan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

