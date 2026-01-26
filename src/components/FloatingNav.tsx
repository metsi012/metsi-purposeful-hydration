import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Home, Phone, ShoppingCart, Package } from "lucide-react";
import { cn } from "@/lib/utils";

const FloatingNav = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", link: "/", icon: <Home size={18} /> },
    { name: "Products", link: "/products", icon: <Package size={18} /> },
    { name: "Contact", link: "/contact", icon: <Phone size={18} /> },
    { name: "Order", link: "/order", icon: <ShoppingCart size={18} /> },
  ];

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ opacity: 1, y: -100 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto",
          "border border-border/50 rounded-full",
          "bg-background/80 backdrop-blur-md",
          "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          "z-[100] pr-2 pl-8 py-2 items-center justify-center gap-1"
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link-${idx}`}
            to={navItem.link}
            className={cn(
              "relative items-center flex gap-1 px-3 py-2 rounded-full transition-colors",
              "text-muted-foreground hover:text-foreground",
              location.pathname === navItem.link && "text-foreground bg-secondary"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm font-medium">{navItem.name}</span>
          </Link>
        ))}
        <Link
          to="/order"
          className="border border-border text-sm font-medium relative text-foreground px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors ml-2"
        >
          <span>Order Now</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-accent to-transparent h-px" />
        </Link>
      </motion.nav>
    </AnimatePresence>
  );
};

export default FloatingNav;
