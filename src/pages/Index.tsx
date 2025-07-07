import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Download, Mail, Phone, MapPin, Calendar, Award, Book, User, FileText, Folder, Heart, Sparkles, Star, Stethoscope, Zap, Activity } from "lucide-react";
import { useScrollAnimation, useIntersectionObserver } from "@/hooks/useScrollAnimation";
import ScrollRevealSection from "@/components/ScrollRevealSection";
import ParallaxElement from "@/components/ParallaxElement";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import DotPagination from "@/components/DotPagination";
import ContactButton from "@/components/ContactButton";

const handleClick = () =>  {
  window.location.href = 'mailto:adrieneolaguer@gmail.com';
};

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY, isScrollingDown, scrollDirection, scrollProgress } = useScrollAnimation();
  const visibleElements = useIntersectionObserver();

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    // In a real application, this would download an actual PDF file
    const link = document.createElement('a');
    link.href = 'assets/resume/OLAGUER_CV.pdf'; // You would place your actual resume PDF in the public folder
    link.download = 'OLAGUER_CV.pdf';
    link.click();
  };

  const vetmeh = [
    {
      src: "/assets/vetmeh.jpeg?w=600&h=600&",
      alt: "Beautiful VetMeh",
      title: "Beautiful VetMeh"
    },
    {
      src: "/assets/vetmeh1.jpeg?w=600&h=600&",
      alt: "Beautiful VetMeh",
      title: "Beautiful VetMeh"
    },
  ];

  const animalPhotos = [
    {
      src: "/assets/care/3.jpg?w=600&h=400&fit=crop&crop=center",
      alt: "Cute tabby kitten",
      title: "Small Animal Care"
    },
    {
      src: "/assets/care/5.jpg?w=600&h=400&fit=crop&crop=center",
      alt: "Horses in field",
      title: "Large Animal Studies"
    },
    {
      src: "https://images.unsplash.com/photo-1441057206919-63d19fac2369?w=600&h=400&fit=crop&crop=center",
      alt: "Penguins on rock",
      title: "Wildlife Observation"
    },
    {
      src: "/assets/care/1.jpg?w=600&h=400&fit=crop&crop=center",
      alt: "Orange tabby cat",
      title: "Feline Behavior"
    },
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop&crop=center",
      alt: "Deer in nature",
      title: "Wildlife Studies"
    },
    {
      src: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=600&h=400&fit=crop&crop=center",
      alt: "Monkey with banana",
      title: "Exotic Animal Learning"
    }
  ];

  const experiences = [
    {
      title: "Head, Creatives Committee",
      company: "UP SAVER 33rd Pet Show",
      period: "Feb 2025",
      description: " Head, Creatives Committee of UP SAVER 33rd Pet Show, February 2025 ",
      emoji: "🏥"
    },
    {
      title: "Female Sentinel",
      company: "UP Society for the Advancement of Veterinary Education and Research",
      period: "2024-2025",
      description: "Female Sentinel, UP Society for the Advancement of Veterinary Education and Research (UP SAVER), A.Y. 2024-2025",
      emoji: "🌿"
    },
    {
      title: "Member",
      company: "UP Society for the Advancement of Veterinary Education and Research",
      period: "2023-Present",
      description: "Member, UP Society for the Advancement of Veterinary Education and Research (UPSAVER), 2023 to Present.",
      emoji: "🎓"
    },
    {
      title: "Veterinary Intern",
      company: "Metropolitan Animal Center",
      period: "2017-2018",
      description: "Member, UP Society for the Advancement of Veterinary Education and Research (UPSAVER).",
      emoji: "🎓"
    },
    {
      title: "Organizer",
      company: "FST Welcoming Event",
      period: "2023",
      description: "Organizer, FST Welcoming Event, March 2023.",
      emoji: "🎓"
    },
    {
      title: "Member & Organizer",
      company: "UPLB February Fair 2023 Security Committee",
      period: "Feb 2023",
      description: "Member & Organizer, UPLB February Fair 2023 Security Committee, February 2023.",
      emoji: "🎓"
    },
    {
      title: "Chairperson",
      company: "UP College of Veterinary Medicine Freshman Council",
      period: "2022-2023",
      description: "Chairperson, UP College of Veterinary Medicine Freshman Council.",
      emoji: "🎓"
    }
  ];

  const education = [
    {
      degree: "Doctor of Veterinary Medicine (DVM)",
      institution: "University of the philippines - Los Banos",
      year: "2022 - Present",
      emoji: "🏫💉"
    },
    {
      degree: "ACCOUNTACY, BUSINESS, AND MANAGEMENT STRAND",
      institution: "APEC SCHOOLS - North Fairview (Junior/Senior HighSchool)",
      year: "2016-2022",
      emoji: "🧮"
    }
  ];

  const skills = [
    {
      category: "Veterinary Knowledge",
      skills: [
        { name: "Animal Anatomy", level: 85, icon: "🦴" },
        { name: "Animal Physiology", level: 82, icon: "💓" },
        { name: "Pharmacology", level: 75, icon: "💊" },
        { name: "Pathology", level: 78, icon: "🔬" }
      ],
      color: "from-pink-100 to-rose-100"
    },
    {
      category: "Practical Skills",
      skills: [
        { name: "Animal Handling", level: 88, icon: "🐕" },
        { name: "Clinical Examination", level: 80, icon: "🩺" },
        { name: "Laboratory Techniques", level: 75, icon: "🧪" },
        { name: "Medical Records", level: 85, icon: "📋" }
      ],
      color: "from-green-100 to-emerald-100"
    },
    {
      category: "Academic Skills",
      skills: [
        { name: "Research Methods", level: 82, icon: "📊" },
        { name: "Scientific Writing", level: 85, icon: "📝" },
        { name: "Data Analysis", level: 78, icon: "📈" },
        { name: "Literature Review", level: 88, icon: "📚" }
      ],
      color: "from-blue-100 to-cyan-100"
    },
    {
      category: "Communication & Leadership",
      skills: [
        { name: "Client Communication", level: 80, icon: "💬" },
        { name: "Team Collaboration", level: 85, icon: "👥" },
        { name: "Presentation Skills", level: 75, icon: "🎤" },
        { name: "Problem Solving", level: 82, icon: "🧩" }
      ],
      color: "from-purple-100 to-violet-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Enhanced floating decoration elements with more interactive parallax */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
        <ParallaxElement speed={0.3} direction="diagonal" className="absolute top-20 left-10">
          <Heart className={`w-6 h-6 text-pink-300 opacity-60 transition-all duration-500 ${
            scrollDirection === 'down' ? 'animate-bounce' : 'animate-pulse'
          }`} />
        </ParallaxElement>
        <ParallaxElement speed={0.5} reverse className="absolute top-40 right-20">
          <Sparkles className={`w-8 h-8 text-purple-300 opacity-50 transition-all duration-700 ${
            visibleElements.has('about') ? 'animate-spin' : 'animate-pulse'
          }`} />
        </ParallaxElement>
        <ParallaxElement speed={0.2} direction="horizontal" className="absolute bottom-40 left-20">
          <Star className={`w-5 h-5 text-yellow-300 opacity-70 transition-all duration-300 ${
            visibleElements.has('skills') ? 'animate-bounce' : 'animate-ping'
          }`} />
        </ParallaxElement>
        <ParallaxElement speed={0.4} direction="diagonal" reverse className="absolute top-60 right-10">
          <Heart className={`w-6 h-6 text-blue-300 opacity-60 transition-all duration-500 ${
            scrollY > 500 ? 'animate-bounce' : 'animate-pulse'
          }`} />
        </ParallaxElement>
        <ParallaxElement speed={0.6} className="absolute bottom-20 right-1/4">
          <Sparkles className={`w-4 h-4 text-green-300 opacity-40 transition-all duration-400 ${
            scrollDirection === 'up' ? 'animate-spin' : 'animate-pulse'
          }`} />
        </ParallaxElement>
      </div>

      {/* Enhanced Navigation with more scroll effects */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 50 
          ? 'bg-white/95 backdrop-blur-md border-b border-pink-100 shadow-lg' 
          : 'bg-white/80 backdrop-blur-sm'
      } ${isScrollingDown && scrollY > 200 ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className={`text-2xl font-bold text-pink-600 flex items-center gap-2 transition-all duration-500 ${
              scrollY > 100 ? 'scale-90' : 'scale-100'
            } ${scrollDirection === 'down' ? 'rotate-1' : 'rotate-0'}`}>
              <Heart className={`w-6 h-6 text-pink-500 transition-all duration-300 ${
                scrollY > 200 ? 'animate-pulse' : ''
              }`} />
              Dr. Adriene Margaux B. Olaguer
            </div>
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "animals", "education", "experience"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-500 hover:text-pink-500 hover:scale-110 relative ${
                    visibleElements.has(section) 
                      ? "text-pink-500 font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-pink-500 after:scale-x-100" 
                      : "text-gray-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-pink-500 after:scale-x-0"
                  } after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100`}
                >
                  {section}
                </button>
              ))}
            </div>
            <Button onClick={handleDownloadResume} className={`bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
              scrollY > 100 ? 'scale-90' : 'scale-100'
            } ${scrollDirection === 'up' ? 'animate-pulse' : ''}`}>
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section with enhanced scroll-based animations */}
      <section id="home" className="pt-28 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollRevealSection className="space-y-8" delay={0} direction="scale" duration={800}>
              <div className="space-y-6">
                <h1 className={`text-5xl lg:text-6xl font-bold text-gray-800 leading-tight transition-all duration-1000 ${
                  visibleElements.has('home') ? 'animate-fade-in' : ''
                }`}>
                  Learning to Care,
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 block flex items-center gap-3 mt-4 leading-tight pb-2">
                    Future Veterinarian
                    <Heart className={`w-12 h-12 text-pink-400 transition-all duration-500 ${
                      scrollDirection === 'down' ? 'animate-pulse' : 'animate-bounce'
                    }`} />
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mt-6">
                  Passionate veterinary medicine student in my 4th year, dedicated to learning 
                  compassionate animal care and developing skills in veterinary medicine. 🐾
                </p>
              </div>
              
              <div className="flex flex-wrap gap-6 pt-4">
                <ScrollRevealSection delay={200} direction="right">
                  <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    <span className="font-bold text-2xl text-blue-500">4th</span>
                    <span className="text-gray-600">Year Student</span>
                  </div>
                </ScrollRevealSection>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <ScrollRevealSection delay={500} direction="rotate">
                  <Button 
                    onClick={() => scrollToSection("about")} 
                    size="lg" 
                    className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Learn More About Me
                  </Button>
                </ScrollRevealSection>
                <ScrollRevealSection delay={600} direction="rotate">
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => scrollToSection("experience")}
                    className="border-2 border-pink-300 text-pink-500 hover:bg-pink-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105"
                  >
                    <Star className="w-4 h-4 mr-2" />
                    View My Experience
                  </Button>
                </ScrollRevealSection>
              </div>
            </ScrollRevealSection>

            <ScrollRevealSection className="relative" delay={300} direction="scale" duration={1200}>
              <div className={`aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 transition-all duration-1000 ${
                visibleElements.has('home') ? 'hover:scale-105 animate-scale-in' : ''
              }`}>
                <img 
                  src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=600&fit=crop&crop=center" 
                  alt="Veterinary Student Learning" 
                  className="w-full h-full object-cover mix-blend-overlay"
                />
              </div>
              <ScrollRevealSection delay={800} direction="rotate">
                <div className={`absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl transition-all duration-1000 ${
                  visibleElements.has('home') ? 'hover:shadow-2xl hover:scale-105 animate-fade-in' : ''
                }`}>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-500 flex items-center justify-center gap-2">
                      200+ <Heart className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="text-sm text-gray-600">Hours of Training</div>
                  </div>
                </div>
              </ScrollRevealSection>
            </ScrollRevealSection>
          </div>
        </div>
      </section>

      {/* About Me Section with scroll animations */}
      <section id="about" className="py-16 px-6 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <ScrollRevealSection className="text-center mb-12" direction="scale" duration={800}>
            <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
              <User className="w-8 h-8 text-pink-500" />
              About Me
              <Sparkles className="w-6 h-6 text-purple-400" />
            </h2>
            <p className="text-xl text-gray-600">Passionate about learning veterinary medicine and animal welfare 💕</p>
          </ScrollRevealSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollRevealSection delay={200} direction="left" duration={1000}>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  As a dedicated 4th-year veterinary medicine student, I'm passionate about learning 
                  all aspects of animal care, from basic health examinations to understanding complex 
                  medical conditions. My journey combines academic excellence with hands-on experience. 🌟
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Through volunteer work at local animal hospitals and shelters, I'm gaining practical 
                  experience while developing the compassion and skills needed to become a successful 
                  veterinarian. I'm committed to lifelong learning and making a positive impact. 🌱
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 bg-pink-50 rounded-full px-4 py-3 hover:bg-pink-100 transition-all duration-300">
                    <Mail className="w-5 h-5 text-pink-500" />
                    <span className="text-gray-700">adrieneolaguer@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-purple-50 rounded-full px-4 py-3 hover:bg-purple-100 transition-all duration-300">
                    <Phone className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-700">0977-306-7401</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-blue-50 rounded-full px-4 py-3 hover:bg-blue-100 transition-all duration-300">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">Pasig City, NCR, Philippines</span>
                  </div>
                </div>
              </div>
            </ScrollRevealSection>

            <ScrollRevealSection delay={400} direction="right" duration={1000}>
              <DotPagination images={vetmeh} />
            </ScrollRevealSection>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <ScrollRevealSection className="text-center mb-12" direction="scale" duration={800}>
            <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
              <Stethoscope className="w-8 h-8 text-purple-500" />
              Skills & Knowledge
              <Zap className="w-6 h-6 text-yellow-400" />
            </h2>
            <p className="text-xl text-gray-600">
              Growing expertise in veterinary medicine and animal care 🌟
            </p>
          </ScrollRevealSection>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillCategory, categoryIndex) => (
              <ScrollRevealSection 
                key={categoryIndex} 
                delay={categoryIndex * 200} 
                direction={categoryIndex % 2 === 0 ? 'left' : 'right'} 
                duration={1000}
              >
                <Card className={`transition-all duration-300 hover:shadow-xl hover:scale-[1.02] h-full bg-gradient-to-br ${skillCategory.color} border-0 shadow-lg rounded-2xl`}>
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-800 flex items-center gap-3">
                      <Activity className="w-6 h-6 text-purple-600" />
                      {skillCategory.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {skillCategory.skills.map((skill, skillIndex) => (
                      <ScrollRevealSection key={skillIndex} delay={(categoryIndex * 200) + (skillIndex * 100)} direction="scale" duration={600}>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{skill.icon}</span>
                              <span className="font-medium text-gray-800">{skill.name}</span>
                            </div>
                            <span className="text-sm font-semibold text-purple-600">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-white/60 rounded-full h-2 overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-1000 ease-out"
                              style={{ 
                                width: visibleElements.has('skills') ? `${skill.level}%` : '0%',
                                transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                              }}
                            />
                          </div>
                        </div>
                      </ScrollRevealSection>
                    ))}
                  </CardContent>
                </Card>
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Animals Photo Gallery Section */}
      <section id="animals" className="py-16 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-4xl">
          <ScrollRevealSection className="text-center mb-12" direction="scale" duration={800}>
            <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
              <Heart className="w-8 h-8 text-blue-500" />
              Learning About Animals
              <Sparkles className="w-6 h-6 text-purple-400" />
            </h2>
            <p className="text-xl text-gray-600">
              Exploring the wonderful world of animals through my studies and experiences 🐾
            </p>
          </ScrollRevealSection>

          <ScrollRevealSection delay={300} direction="up" duration={1000}>
            <div className="relative">
              <Carousel className="w-full max-w-3xl mx-auto">
                <CarouselContent>
                  {animalPhotos.map((photo, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <Card className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden ${
                        visibleElements.has('animals') ? 'animate-fade-in' : ''
                      }`} style={{ animationDelay: `${index * 100}ms` }}>
                        <div className="aspect-square overflow-hidden">
                          <img 
                            src={photo.src} 
                            alt={photo.alt}
                            className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold text-center text-gray-800">{photo.title}</h3>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
          </ScrollRevealSection>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto max-w-4xl">
          <ScrollRevealSection className="text-center mb-12" direction="rotate" duration={300}>
            <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
              <Book className="w-8 h-8 text-purple-500" />
              Education
              <Star className="w-6 h-6 text-yellow-400" />
            </h2>
            <p className="text-xl text-gray-600">Academic journey in veterinary medicine 📚</p>
          </ScrollRevealSection>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <ScrollRevealSection key={index} delay={index * 200} direction={index % 2 === 0 ? 'left' : 'right'} duration={300}>
                <Card className="transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{edu.emoji}</span>
                        <div>
                          <CardTitle className="text-xl text-purple-700">{edu.degree}</CardTitle>
                          <CardDescription className="text-lg font-semibold text-gray-600">{edu.institution}</CardDescription>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full px-3 py-1">
                          {edu.year}
                        </Badge>
                        {/* <p className="text-sm text-gray-600 mt-1">GPA: {edu.gpa}</p> */}
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <ScrollRevealSection className="text-center mb-12" direction="scale" duration={300}>
            <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
              <Award className="w-8 h-8 text-pink-500" />
              Experience & Volunteer Work
              <Heart className="w-6 h-6 text-blue-400" />
            </h2>
            <p className="text-xl text-gray-600">Building experience through volunteering and learning opportunities 🏥</p>
          </ScrollRevealSection>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ScrollRevealSection key={index} delay={index * 200} direction={index % 2 === 0 ? 'left' : 'right'} duration={1000}>
                <Card className="transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{exp.emoji}</span>
                        <div>
                          <CardTitle className="text-xl text-pink-700">{exp.title}</CardTitle>
                          <CardDescription className="text-lg font-semibold text-gray-600">{exp.company}</CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 rounded-full px-3 py-1">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{exp.description}</p>
                  </CardContent>
                </Card>
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white py-12 px-6">
        <ScrollRevealSection direction="up" duration={1000}>
          <div className="container mx-auto max-w-4xl text-center">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
              Let's Connect!
              <Heart className="w-6 h-6 text-pink-200 animate-pulse" />
            </h3>
            <p className="text-pink-100 mb-8">
              I'm always eager to learn and connect with fellow animal lovers and veterinary professionals. 🌟
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={handleDownloadResume}
                variant="secondary" 
                size="lg"
                className="bg-white text-purple-600 hover:bg-pink-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <Button 
                onClick={handleClick}
                variant="secondary" 
                size="lg"
                className="border-2 border-white text-purple-600 hover:bg-pink-50 hover:text-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-white/30">
              <p className="text-pink-100 flex items-center justify-center gap-2">
                © 2025 Adriene Margaux B. Olaguer. Passionate about animal health and welfare.
                <Heart className="w-4 h-4" />
              </p>
            </div>
          </div>
        </ScrollRevealSection>
      </footer>
    </div>
  );
};

export default Index;
