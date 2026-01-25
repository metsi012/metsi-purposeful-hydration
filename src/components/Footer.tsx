import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-16 bg-background border-t border-border"
    >
      <div className="container-premium">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left - Brand */}
          <div>
            <p className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground mb-4">
              METSI 012
            </p>
            <p className="text-sm text-muted-foreground font-light">
              Premium water from Pretoria
            </p>
          </div>

          {/* Right - Credit */}
          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Designed & Built by
            </p>
            <a
              href="https://architeq.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground font-medium hover:underline"
            >
              Architeq Web Agency
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2024 Metsi 012. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
              Instagram
            </a>
            <a href="https://wa.me/27659043472" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
