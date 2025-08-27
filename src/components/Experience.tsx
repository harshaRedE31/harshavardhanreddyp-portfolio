import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Cloud/DevOps Intern",
      company: "Meghgen Technologies Pvt Ltd",
      location: "Remote",
      period: "Jul 2025 – Present",
      status: "Current",
      description: "Deploying applications on AWS & GCP, implementing Dockerization for microservices, building CI/CD pipelines, and automating infrastructure provisioning.",
      technologies: ["AWS", "GCP", "Docker", "CI/CD", "Infrastructure Automation"],
      highlights: [
        "Deployed scalable applications on cloud platforms",
        "Implemented containerization strategies",
        "Built automated deployment pipelines",
        "Optimized infrastructure costs"
      ]
    },
    {
      title: "AWS DevOps Intern",
      company: "Internship Studio",
      location: "Remote",
      period: "Feb 2025 – Jun 2025",
      status: "Completed",
      description: "Focused on AWS cloud services, DevOps practices, and infrastructure automation using modern tools and methodologies.",
      technologies: ["AWS", "DevOps", "Terraform", "Jenkins", "CloudFormation"],
      highlights: [
        "Mastered AWS core services and architecture",
        "Implemented Infrastructure as Code practices",
        "Automated deployment workflows",
        "Gained hands-on experience with cloud security"
      ]
    },
    {
      title: "React.js Developer Intern",
      company: "Dyashin Technosoft",
      location: "Remote",
      period: "Jan 2025 – May 2025",
      status: "Completed",
      description: "Developed responsive web applications using React.js, focusing on modern frontend development practices and user experience optimization.",
      technologies: ["React.js", "JavaScript", "HTML", "CSS", "Git"],
      highlights: [
        "Built responsive web applications",
        "Implemented modern React patterns",
        "Optimized application performance",
        "Collaborated with design teams"
      ]
    },
    {
      title: "Full-Stack Intern",
      company: "Lumin AI System",
      location: "Remote",
      period: "May 2023 – Aug 2023",
      status: "Completed",
      description: "Worked on full-stack development projects, gaining experience in both frontend and backend technologies.",
      technologies: ["React.js", "Spring Boot", "Java", "MySQL", "REST APIs"],
      highlights: [
        "Developed end-to-end web applications",
        "Created RESTful API services",
        "Designed database schemas",
        "Implemented authentication systems"
      ]
    },
    {
      title: "IoT & Robotics Intern",
      company: "Nexsys Controls",
      location: "Bangalore, India",
      period: "Jun 2022 – Aug 2022",
      status: "Completed",
      description: "Explored IoT technologies and robotics applications, working on sensor integration and automation projects.",
      technologies: ["IoT", "Arduino", "Python", "Sensors", "Automation"],
      highlights: [
        "Developed IoT sensor applications",
        "Programmed automation systems",
        "Worked with embedded systems",
        "Created monitoring dashboards"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-text-gradient bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey through various roles, gaining expertise in cloud technologies, DevOps, and full-stack development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>

            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-12 animate-fade-in ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="bg-card-gradient border-border hover:shadow-card-hover transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
                          <div className="flex items-center text-muted-foreground text-sm mb-2">
                            <Building className="w-4 h-4 mr-1" />
                            {exp.company}
                          </div>
                        </div>
                        <Badge 
                          variant={exp.status === 'Current' ? 'default' : 'secondary'}
                          className={exp.status === 'Current' ? 'bg-primary text-primary-foreground' : ''}
                        >
                          {exp.status}
                        </Badge>
                      </div>

                      <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">{exp.description}</p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="text-sm text-muted-foreground flex items-start">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;