import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, ShoppingCart, Package } from "lucide-react";
import { cn } from "@/lib/utils";
import metsiLogo from "@/assets/metsi-logo.png";

const FloatingNav = () => {
  const location = useLocation();

  const navItems = [
    { name: "Products", link: "/products", icon: <Package size={18} /> },
    { name: "Contact", link: "/contact", icon: <Phone size={18} /> },
    { name: "Order", link: "/order", icon: <ShoppingCart size={18} /> },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "flex fixed top-4 inset-x-0 mx-auto w-fit",
        "border border-border/50 rounded-full",
        "bg-background/95 backdrop-blur-md",
        "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
        "z-[100] px-3 py-2 items-center justify-center gap-1"
      )}
    >
      {/* Logo as Home Link */}
      <Link to="/" className="mr-4 hover:opacity-80 transition-opacity">
        <img src={metsiLogo} alt="Metsi 012" className="h-12 w-auto" />
      </Link>

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
        className="border border-border text-sm font-medium relative text-foreground px-4 py-2 rounded-[10px] bg-primary text-primary-foreground hover:bg-primary/90 transition-colors ml-2"
      >
        <span>Order Now</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-accent to-transparent h-px" />
      </Link>
    </motion.nav>
  );
};

export default FloatingNav;
