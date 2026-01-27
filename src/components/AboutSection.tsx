import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 section-padding relative">
      <div className="content-max-width" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 md:order-1"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Gradient border effect */}
              <div className="absolute z-10 inset-0 rounded-2xl bg-gradient-to-br from-primary via-violet to-cyan p-[2px]">
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-60 h-60 md:w-72 md:h-72 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-cyan flex items-center justify-center">
                      <img
                        src="/prashay-pic.jpeg"
                        className="rounded-full object-cover w-60 h-60 md:w-72 md:h-72"
                        alt="Prashay"
                      />
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Prashay Sandheliya
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute z-2 -top-4 -right-4 w-24 h-24 border border-primary/30 rounded-full"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/20 rounded-xl blur-sm"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <h2 className="font-display text-sm font-semibold text-primary tracking-widest mb-4">
              ABOUT ME
            </h2>
            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Turning Ideas Into{" "}
              <span className="gradient-text">Visual Stories</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Welcome to my creative space! I'm a passionate graphic designer
              and UI/UX enthusiast, dedicated to crafting visually stunning,
              user-friendly experiences.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With a love for creativity and innovation, I specialize in brand
              identities, social media content, and intuitive web designs. Let's
              collaborate to bring your vision to life with impactful,
              thoughtful design solutions!
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { number: "8+", label: "Projects" },
                { number: "2+", label: "Years Exp" },
                { number: "100%", label: "Passion" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <p className="font-display text-3xl md:text-4xl font-bold gradient-text">
                    {stat.number}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
