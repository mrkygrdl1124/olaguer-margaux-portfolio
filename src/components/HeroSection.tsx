
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Heart, Sparkles, Star } from "lucide-react";
import { useScrollAnimation, useIntersectionObserver } from "@/hooks/useScrollAnimation";
import ScrollRevealSection from "@/components/ScrollRevealSection";

interface HeroSectionProps {
  visibleElements: Set<string>;
  scrollToSection: (sectionId: string) => void;
  handleDownloadResume: () => void;
}

const HeroSection = ({ visibleElements, scrollToSection, handleDownloadResume }: HeroSectionProps) => {
  const { scrollY, scrollDirection } = useScrollAnimation();

  return (
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
                Passionate veterinary medicine student in my 3rd year, dedicated to learning 
                compassionate animal care and developing skills in veterinary medicine. 🐾
              </p>
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
  );
};

export default HeroSection;
