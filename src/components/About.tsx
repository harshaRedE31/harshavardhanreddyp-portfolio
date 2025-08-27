import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science & Engineering",
      institution: "Visvesvaraya Technological University, Bangalore, India",
      period: "2021 – 2025",
      grade: "CGPA: 8.6/10",
      icon: GraduationCap
    },
    {
      degree: "PUC (Pre-University Course)",
      institution: "Karnataka Pre-University Board",
      period: "2019 – 2021",
      grade: "86.66%",
      icon: Award
    },
    {
      degree: "S.S.L.C (Secondary School Leaving Certificate)",
      institution: "ICSE Board",
      period: "2018 – 2019",
      grade: "81.33%",
      icon: Award
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-text-gradient bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about cloud technologies and automation, I love building scalable solutions that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story Section */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My passion for technology began during my undergraduate studies in Computer Science Engineering. 
                What started as curiosity about how systems work evolved into a deep fascination with cloud computing 
                and infrastructure automation.
              </p>
              <p>
                Through hands-on projects and internships, I've developed expertise in cloud platforms like AWS and GCP, 
                containerization technologies, and infrastructure as code. I believe in the power of automation to 
                solve complex problems and make systems more reliable and efficient.
              </p>
              <p>
                When I'm not working on cloud architectures or writing code, you'll find me exploring new DevOps tools, 
                contributing to open-source projects, or learning about the latest trends in cloud-native technologies.
              </p>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-card-gradient border-border hover:shadow-card-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <edu.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                        <p className="text-muted-foreground text-sm mb-2">{edu.institution}</p>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-1" />
                            {edu.period}
                          </div>
                          <span className="text-primary font-medium">{edu.grade}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;