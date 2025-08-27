import React, { useState, useRef, useEffect, createContext, useContext } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, ExternalLink } from 'lucide-react';

// Simplified Shadcn/ui components and hooks for a self-contained example
const ToasterContext = createContext(null);
const useToast = () => useContext(ToasterContext);

const Toaster = () => {
  const [toasts, setToasts] = useState([]);
  const addToast = (toast) => {
    setToasts((prev) => [...prev, { ...toast, id: Date.now() }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== toast.id));
    }, 5000);
  };
  return (
    <ToasterContext.Provider value={{ toast: addToast }}>
      <div className="fixed bottom-4 right-4 z-[9999] flex flex-col gap-2">
        {toasts.map((t) => (
          <div key={t.id} className="bg-white text-gray-800 p-4 rounded-lg shadow-lg max-w-sm">
            <h3 className="font-semibold">{t.title}</h3>
            <p className="text-sm mt-1">{t.description}</p>
          </div>
        ))}
      </div>
      {/* This invisible element is needed to pass the context */}
      <span style={{ display: 'none' }} />
    </ToasterContext.Provider>
  );
};

const Card = ({ children, className = '' }) => <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>{children}</div>;
const CardHeader = ({ children }) => <div>{children}</div>;
const CardTitle = ({ children }) => <h2 className="text-xl font-bold mb-4">{children}</h2>;
const CardContent = ({ children }) => <div>{children}</div>;
const Button = ({ children, className = '', disabled = false, type = 'button', onClick }) => (
  <button type={type} onClick={onClick} disabled={disabled} className={`px-4 py-2 rounded-md font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 ${className}`}>
    {children}
  </button>
);
const Input = ({ className = '', ...props }) => <input className={`w-full p-2 border border-gray-300 rounded-md ${className}`} {...props} />;
const Textarea = ({ className = '', ...props }) => <textarea className={`w-full p-2 border border-gray-300 rounded-md resize-none ${className}`} {...props} />;

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Use a useEffect to load the EmailJS script and initialize it
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.async = true;
    script.onload = () => {
      window.emailjs.init('PWEvcOKJ4AIRn9jWo');
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (window.emailjs) {
        try {
            await window.emailjs.sendForm('service_66zy1vs', 'template_2dwka5z', formRef.current);
            toast({
              title: "Message Sent!",
              description: "Thank you for your message. I'll get back to you soon!",
            });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            toast({
              title: "Error",
              description: "Oops! Something went wrong. Please try again later.",
            });
        } finally {
            setIsSubmitting(false);
        }
    } else {
        console.error('EmailJS library not loaded.');
        toast({
            title: "Error",
            description: "Email service is not ready. Please try again in a moment.",
        });
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
      color: "text-gray-800"
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
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together to build something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Let's Connect</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, 
              or help solve complex cloud infrastructure challenges. Feel free to reach out through 
              any of the channels below.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((contact) => (
                <div key={contact.label} className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <contact.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{contact.label}</p>
                    {contact.href && contact.href !== '#' ? (
                      <a 
                        href={contact.href}
                        className="text-gray-800 hover:text-blue-600 transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-gray-800">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Follow Me</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 group"
                  >
                    <social.icon className={`w-5 h-5 ${social.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-gray-800 group-hover:text-blue-600 transition-colors">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="from_name" // Note: EmailJS expects 'from_name' for the sender's name
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your name"
                      className="bg-white border-gray-300 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="from_email" // Note: EmailJS expects 'from_email' for the sender's email
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                      className="bg-white border-gray-300 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-2">
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
                      className="bg-white border-gray-300 focus:border-blue-500"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
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
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Ready to Start Your Project?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you need cloud infrastructure setup, DevOps automation, or full-stack development, 
              I'm here to help bring your ideas to life.
            </p>
            <Button 
              size="lg" 
              asChild
              className="bg-blue-600 hover:bg-blue-700"
            >
              <a href="mailto:harshaoffl31@gmail.com" className="flex items-center justify-center">
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

// Main App component
const App = () => (
    <Toaster>
        <Contact />
    </Toaster>
);

export default App;
