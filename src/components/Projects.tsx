import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Activity, Cloud, Zap, BarChart3 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Diabetes Prediction Model",
      description: "MLOps project implementing a machine learning pipeline for diabetes prediction with automated model training, validation, and deployment using cloud infrastructure.",
      icon: Activity,
      technologies: ["Python", "MLOps", "AWS", "Docker", "Scikit-learn", "CI/CD"],
      features: [
        "Automated ML pipeline",
        "Model versioning & tracking",
        "Cloud-based deployment",
        "Real-time predictions"
      ],
      github: "https://github.com/harshaRedE31",
      demo: "#",
      color: "primary"
    },
    {
      title: "Three-Tier Architecture on AWS EKS",
      description: "Scalable three-tier web application deployed on Amazon EKS with containerized frontend, backend, and database layers for high availability and performance.",
      icon: Cloud,
      technologies: ["AWS EKS", "Kubernetes", "Docker", "React.js", "Spring Boot", "MySQL"],
      features: [
        "Kubernetes orchestration",
        "Auto-scaling capabilities",
        "High availability setup",
        "Load balancing"
      ],
      github: "https://github.com/harshaRedE31",
      demo: "#",
      color: "secondary"
    },
    {
      title: "AWS Infrastructure Automation",
      description: "Infrastructure as Code project using Terraform to automate AWS resource provisioning, configuration management, and deployment workflows.",
      icon: Zap,
      technologies: ["Terraform", "AWS", "Ansible", "CI/CD", "CloudFormation", "Python"],
      features: [
        "Infrastructure as Code",
        "Multi-environment support",
        "Automated provisioning",
        "Configuration management"
      ],
      github: "https://github.com/harshaRedE31",
      demo: "#",
      color: "accent"
    },
    {
      title: "AWS Cost Optimization with Lambda",
      description: "Serverless solution using AWS Lambda to monitor, analyze, and optimize cloud resource costs with automated reporting and recommendations.",
      icon: BarChart3,
      technologies: ["AWS Lambda", "Python", "CloudWatch", "S3", "SNS", "Cost Explorer API"],
      features: [
        "Automated cost monitoring",
        "Resource optimization",
        "Serverless architecture",
        "Alert notifications"
      ],
      github: "https://github.com/harshaRedE31",
      demo: "#",
      color: "primary"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-text-gradient bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of cloud infrastructure, DevOps automation, and full-stack development projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-card-gradient border-border hover:shadow-card-hover transition-all duration-300 group animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-${project.color}/10 group-hover:scale-110 transition-transform`}>
                      <project.icon className={`w-8 h-8 text-${project.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-6">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button 
                    variant="outline" 
                    size="sm"
                    asChild
                    className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <div className="bg-card-gradient rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Explore More Projects</h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub for more projects, contributions, and open-source work
            </p>
            <Button 
              size="lg" 
              asChild
              className="bg-primary hover:bg-primary/90 shadow-glow-primary"
            >
              <a href="https://github.com/harshaRedE31" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;