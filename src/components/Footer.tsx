import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, MessageCircle } from "lucide-react";
import metsiLogo from "@/assets/metsi-logo.png";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-16 bg-foreground text-background"
    >
      <div className="container-premium">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left - Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={metsiLogo} alt="Metsi 012" className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-background/60 font-light">
              Premium water from Pretoria, South Africa
            </p>
          </div>

          {/* Center - Links */}
          <div className="flex gap-8">
            <Link to="/" className="text-sm text-background/70 hover:text-background transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-sm text-background/70 hover:text-background transition-colors">
              Products
            </Link>
            <Link to="/contact" className="text-sm text-background/70 hover:text-background transition-colors">
              Contact
            </Link>
            <Link to="/order" className="text-sm text-background/70 hover:text-background transition-colors">
              Order
            </Link>
          </div>

          {/* Right - Social */}
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://wa.me/27659043472"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} Metsi 012. All rights reserved.
          </p>
          <div>
            <p className="text-xs text-background/50">
              Built by{" "}
              <a
                href="https://architeq.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Architeq Web Agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
