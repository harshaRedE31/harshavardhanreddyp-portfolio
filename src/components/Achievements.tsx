import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Shield, Cloud, Brain, Lock, Cpu } from 'lucide-react';

const Achievements = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      icon: Cloud,
      date: "2024",
      status: "Certified",
      description: "Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.",
      skills: ["Cloud Fundamentals", "AWS Services", "Security", "Billing & Pricing"]
    },
    {
      title: "DevOps on AWS",
      issuer: "Amazon Web Services",
      icon: Cloud,
      date: "2024",
      status: "Completed",
      description: "Comprehensive training on DevOps practices and tools within the AWS ecosystem.",
      skills: ["CI/CD", "Infrastructure as Code", "Monitoring", "Automation"]
    },
    {
      title: "Fundamentals of Machine Learning & AI",
      issuer: "Amazon Web Services",
      icon: Brain,
      date: "2024",
      status: "Completed",
      description: "Understanding of ML concepts, AWS AI/ML services, and practical applications.",
      skills: ["Machine Learning", "AI Services", "Data Analysis", "Model Deployment"]
    },
    {
      title: "Azure Foundations",
      issuer: "Infosys",
      icon: Cloud,
      date: "2024",
      status: "Completed",
      description: "Core Azure cloud services and fundamental concepts for cloud computing.",
      skills: ["Azure Services", "Cloud Computing", "Virtual Machines", "Storage"]
    },
    {
      title: "Cybersecurity Level 1",
      issuer: "Ethical Byte",
      icon: Shield,
      date: "2023",
      status: "Certified",
      description: "Fundamental cybersecurity concepts, threat analysis, and security best practices.",
      skills: ["Security Fundamentals", "Threat Analysis", "Risk Management", "Compliance"]
    },
    {
      title: "Sensor Application Development",
      issuer: "RVCE",
      icon: Cpu,
      date: "2022",
      status: "Completed",
      description: "IoT sensor integration, data collection, and application development.",
      skills: ["IoT", "Sensor Integration", "Data Collection", "Embedded Systems"]
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-text-gradient bg-clip-text text-transparent">
            Achievements & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in cloud technologies and cybersecurity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title}
              className="bg-card-gradient border-border hover:shadow-card-hover transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                    <cert.icon className="w-8 h-8 text-primary" />
                  </div>
                  <Badge 
                    variant={cert.status === 'Certified' ? 'default' : 'secondary'}
                    className={cert.status === 'Certified' ? 'bg-primary text-primary-foreground' : ''}
                  >
                    {cert.status}
                  </Badge>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                <p className="text-sm text-primary font-medium mb-4">{cert.date}</p>
                
                <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Skills Covered:</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "6+", label: "Certifications", icon: Award },
            { number: "5+", label: "Internships", icon: Award },
            { number: "4+", label: "Major Projects", icon: Award },
            { number: "3+", label: "Cloud Platforms", icon: Cloud }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-6 bg-card-gradient rounded-lg border border-border hover:shadow-card-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;