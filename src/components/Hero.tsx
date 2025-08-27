import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-floating"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-floating" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-glow-primary">
               <img 
                src={`${profileImage}?t=${Date.now()}`} 
                alt="Harshavardhan Reddy P - Cloud & DevOps Engineer" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-lg animate-glow-pulse"></div>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-text-gradient bg-clip-text text-transparent">
            Harshavardhan Reddy P
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Cloud & DevOps Engineer | Full-Stack Developer | Automation Enthusiast
          </p>

          {/* Bio */}
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Motivated Engineering graduate with a strong focus on Cloud Engineering. Skilled in building and deploying 
            cloud-native solutions, developing full-stack applications, and creating automation scripts using Python. 
            Eager to contribute to challenging roles in Cloud and DevOps while continuously developing expertise in AWS, Azure, and GCP.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-primary hover:bg-primary/90 shadow-glow-primary"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
            >
              Get in Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Github, href: "https://github.com/harshaRedE31", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/harshavardhanreddyp", label: "LinkedIn" },
              { icon: Mail, href: "mailto:harshaoffl31@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card rounded-full hover:bg-primary/10 transition-all transform hover:scale-110 hover:shadow-glow-primary"
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-foreground" />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Scroll to About section"
            >
              <ArrowDown className="w-6 h-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;