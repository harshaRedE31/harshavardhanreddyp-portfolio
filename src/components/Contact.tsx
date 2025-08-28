import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Twitter,
  Send,
  ExternalLink
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_66zy1vs',
        'template_2dwka5z',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Harsha',
        },
        'PWEvcOKJ4AIRn9jWo'
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "harshaoffl31@gmail.com",
      href: "mailto:harshaoffl31@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8073907348",
      href: "tel:+918073907348"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/harshavardhanreddyp",
      color: "text-blue-500"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/harshaRedE31",
      color: "text-foreground"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/harshax31",
      color: "text-blue-400"
    },
    {
      icon: ExternalLink,
      label: "LeetCode",
      href: "https://leetcode.com/u/harshavardhanreddy_8",
      color: "text-orange-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-text-gradient bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together to build something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Let's Connect</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, 
              or help solve complex cloud infrastructure challenges. Feel free to reach out through 
              any of the channels below.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((contact, index) => (
                <div key={contact.label} className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <contact.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    {contact.href && contact.href !== '#' ? (
                      <a 
                        href={contact.href}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Follow Me</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-card-gradient rounded-lg border border-border hover:shadow-card-hover transition-all duration-300 group"
                  >
                    <social.icon className={`w-5 h-5 ${social.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-foreground group-hover:text-primary transition-colors">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <Card className="bg-card-gradient border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your name"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell me about your project or how I can help..."
                      rows={5}
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 shadow-glow-primary"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-card-gradient rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you need cloud infrastructure setup, DevOps automation, or full-stack development, 
              I'm here to help bring your ideas to life.
            </p>
            <Button 
              size="lg" 
              asChild
              className="bg-primary hover:bg-primary/90 shadow-glow-primary"
            >
              <a href="mailto:harshaoffl31@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Start a Conversation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;