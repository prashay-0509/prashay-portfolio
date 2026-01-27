import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  Send,
  Linkedin,
  Twitter,
  Instagram,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/actions/sendEmail";

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("senderEmail", formData.email);
    formDataObj.append("message", formData.message);

    const { data, error } = await sendEmail(formDataObj);

    if (error) {
      toast({
        title: "Error",
        description: error,
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 section-padding relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="content-max-width relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-sm font-semibold text-primary tracking-widest mb-4">
            CONTACT
          </h2>
          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Let's Work <span className="gradient-text">Together</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Have a project in mind or want to collaborate? I'd love to hear
              from you. Let's create something amazing together!
            </p>

            {/* Contact Details */}
            <div className="space-y-5 mb-10">
              <a
                href="mailto:prashay0509@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    prashay0509@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+919589517162"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-secondary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground group-hover:text-secondary transition-colors">
                    +91 9589517162
                  </p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">
                Connect with me
              </p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ y: -4 }}
                    className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all"
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="bg-card border-border focus:border-primary h-12"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="bg-card border-border focus:border-primary h-12"
                  />
                </div>
              </div>
              {/* <div>
                <Input
                  type="text"
                  placeholder="Subject"
                  required
                  className="bg-card border-border focus:border-primary h-12"
                />
              </div> */}
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  required
                  className="bg-card border-border focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-display font-semibold h-12 rounded-lg"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
