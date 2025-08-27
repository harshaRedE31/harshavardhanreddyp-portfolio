import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Cloud, 
  Code, 
  Workflow, 
  Container, 
  Server, 
  Zap,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Design and deploy scalable cloud infrastructure on AWS and GCP with best practices for security, performance, and cost optimization.",
      features: [
        "Cloud architecture design",
        "Infrastructure as Code (Terraform)",
        "Multi-cloud deployment strategies",
        "Cost optimization analysis"
      ],
      color: "primary"
    },
    {
      icon: Container,
      title: "DevOps & Automation", 
      description: "Streamline your development workflow with CI/CD pipelines, containerization, and Kubernetes orchestration.",
      features: [
        "CI/CD pipeline setup",
        "Docker containerization",
        "Kubernetes orchestration",
        "Infrastructure automation"
      ],
      color: "secondary"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Build modern web applications with React.js frontends and robust Spring Boot backends, ensuring seamless user experiences.",
      features: [
        "React.js applications",
        "Spring Boot APIs",
        "Database design & optimization",
        "RESTful web services"
      ],
      color: "accent"
    },
    {
      icon: Zap,
      title: "Automation & Scripting",
      description: "Create custom Python scripts and automation solutions to optimize workflows and reduce manual processes.",
      features: [
        "Python automation scripts",
        "Process optimization",
        "Data processing pipelines",
        "Monitoring & alerting"
      ],
      color: "primary"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-text-gradient bg-clip-text text-transparent">
            Services I Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for modern cloud infrastructure and application development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="bg-card-gradient border-border hover:shadow-card-hover transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-${service.color}/10 group-hover:scale-110 transition-transform`}>
                    <service.icon className={`w-8 h-8 text-${service.color}`} />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  onClick={scrollToContact}
                  className="w-full border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-card-gradient rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Ready to Transform Your Infrastructure?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss your project requirements and build something amazing together. 
            I'm here to help you leverage the power of cloud technologies.
          </p>
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 shadow-glow-primary"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;