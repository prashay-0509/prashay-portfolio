import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 section-padding border-t border-border">
      <div className="content-max-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <a
            href="#"
            className="font-display text-xl font-bold tracking-wider text-foreground"
          >
            PRASHAY<span className="text-primary">.</span>
          </a>

          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by
            Prashay Sandheliya
          </p>

          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
