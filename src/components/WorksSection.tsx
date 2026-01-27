import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const works = [
  {
    title: "COVID Info Hub",
    description:
      "A COVID-based website providing comprehensive pandemic information, safety guidelines, and statistics with a user-friendly interface and intuitive navigation.",
    image: "https://prashay-sandheliya.vercel.app/covid.png",
    tags: ["Web Design", "UI/UX", "Information"],
    color: "from-primary to-violet",
  },
  {
    title: "IRCTC Redesign",
    description:
      "A complete redesign of the IRCTC website with improved alignment, enhanced navigation, and a more accessible, visually cohesive layout.",
    image: "https://prashay-sandheliya.vercel.app/irctc.png",
    tags: ["UI/UX", "Redesign", "Travel"],
    color: "from-cyan to-secondary",
  },
  {
    title: "EchoVibe Website",
    description:
      "A sleek website for a fictional headphone company featuring scroll-down animations, carousel effects, and modern morphism design style.",
    image: "https://prashay-sandheliya.vercel.app/headphones.png",
    tags: ["Animation", "E-commerce", "Product"],
    color: "from-accent to-coral",
  },
];

export const WorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="works" className="py-24 md:py-32 section-padding relative">
      <div className="content-max-width" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-sm font-semibold text-primary tracking-widest mb-4">
            PORTFOLIO
          </h2>
          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Featured <span className="gradient-text">Works</span>
          </h3>
        </motion.div>

        {/* Works Grid */}
        <div className="space-y-16">
          {works.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`relative group ${index % 2 === 1 ? "md:order-2" : ""}`}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {/* Decorative gradient border */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${work.color} rounded-2xl -z-10 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500`}
                />
              </motion.div>

              {/* Content */}
              <div
                className={`${index % 2 === 1 ? "md:order-1 md:text-right" : ""}`}
              >
                {/* Tags */}
                <div
                  className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 1 ? "md:justify-end" : ""}`}
                >
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-muted-foreground bg-card border border-border rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h4 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {work.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {work.description}
                </p>

                <Button
                  variant="outline"
                  className="group/btn border-primary/50 hover:bg-primary hover:text-primary-foreground font-display"
                >
                  See Demo
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link to="/projects">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-primary to-magenta hover:from-primary/90 hover:to-magenta/90 text-primary-foreground font-display px-8"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
