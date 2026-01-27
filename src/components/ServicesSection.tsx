import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Layout, Share2, Sparkles } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Building strong brand identities, engaging visuals, and impactful marketing materials to enhance communication and audience connection.",
    color: "from-primary to-magenta",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description:
      "Crafting user-centric and responsive websites that offer seamless navigation and exceptional user experiences.",
    color: "from-orange-500 to-orange-800",
  },
  {
    icon: Share2,
    title: "Social Media Design",
    description:
      "Creating eye-catching social media content and managing your brand's online presence to drive engagement and growth.",
    color: "from-accent to-coral",
  },
  {
    icon: Sparkles,
    title: "Animated Web Design",
    description:
      "Adding dynamic animations to your web designs, making them more interactive and engaging for users.",
    color: "from-blue-500 to-blue-800",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 section-padding relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-1/4 h-1/3 bg-cyan/5 rounded-full blur-[100px]" />
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
            SERVICES
          </h2>
          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            I Focus on Helping Your
            <br />
            <span className="gradient-text">Brand Grow</span>
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From concept to execution, I deliver creative solutions that make an
            impact
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 from-primary to-cyan" />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
              >
                <service.icon className="w-7 h-7 text-foreground" />
              </div>

              {/* Content */}
              <h4 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-border rounded-tr-lg opacity-30 group-hover:border-primary/50 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
