import { Card, CardContent } from '@/components/ui/card';
import { 
  Cloud, 
  Server, 
  Code, 
  Database, 
  Container, 
  GitBranch,
  Workflow,
  Monitor,
  Terminal,
  Globe
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS", icon: Cloud },
        { name: "GCP", icon: Cloud },
        { name: "Terraform", icon: Code },
        { name: "Ansible", icon: Server },
        { name: "Docker", icon: Container },
        { name: "Kubernetes", icon: Container },
        { name: "Jenkins", icon: Workflow }
      ]
    },
    {
      title: "Development",
      icon: Code,
      skills: [
        { name: "React.js", icon: Globe },
        { name: "Spring Boot", icon: Server },
        { name: "Python", icon: Terminal },
        { name: "Java", icon: Code },
        { name: "SQL", icon: Database },
        { name: "HTML", icon: Globe },
        { name: "CSS", icon: Globe }
      ]
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: [
        { name: "MySQL", icon: Database },
        { name: "Git", icon: GitBranch },
        { name: "CI/CD", icon: Workflow },
        { name: "Linux", icon: Terminal },
        { name: "Monitoring", icon: Monitor }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-text-gradient bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable cloud solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="bg-card-gradient border-border hover:shadow-card-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center p-3 bg-background/50 rounded-lg hover:bg-primary/5 transition-all duration-300 transform hover:scale-105 group"
                      style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                    >
                      <skill.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors mb-2" />
                      <span className="text-sm font-medium text-foreground text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Progress Visualization */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">Proficiency Overview</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { skill: "AWS", level: 85 },
              { skill: "Docker/K8s", level: 80 },
              { skill: "React.js", level: 75 },
              { skill: "Python", level: 82 }
            ].map((item, index) => (
              <div key={item.skill} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="transform -rotate-90 w-24 h-24">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="hsl(var(--border))"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="hsl(var(--primary))"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - item.level / 100)}`}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-semibold text-primary">{item.level}%</span>
                  </div>
                </div>
                <p className="font-medium text-foreground">{item.skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;