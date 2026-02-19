import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ShoppingCart, Package, Menu, X, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import metsiLogo from "@/assets/metsi-logo.png";

const FloatingNav = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/", icon: <Home size={18} /> },
    { name: "Products", link: "/products", icon: <Package size={18} /> },
    { name: "Contact", link: "/contact", icon: <Phone size={18} /> },
    { name: "Order", link: "/order", icon: <ShoppingCart size={18} /> },
  ];

  return (
    <>
      {/* Desktop Nav */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={cn(
          "hidden sm:flex fixed top-4 inset-x-0 mx-auto w-fit",
          "border border-border/50 rounded-full",
          "bg-background/95 backdrop-blur-md",
          "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          "z-[100] px-3 py-2 items-center justify-center gap-1"
        )}
      >
        {/* Logo as Home Link */}
        <Link to="/" className="mr-4 hover:opacity-80 transition-opacity">
          <img src={metsiLogo} alt="Metsi' 012" className="h-12 w-auto" />
        </Link>

        {navItems.slice(1).map((navItem, idx) => (
          <Link
            key={`link-${idx}`}
            to={navItem.link}
            className={cn(
              "relative items-center flex gap-1 px-3 py-2 rounded-full transition-colors",
              "text-muted-foreground hover:text-foreground",
              location.pathname === navItem.link && "text-foreground bg-secondary"
            )}
          >
            <span className="block md:hidden">{navItem.icon}</span>
            <span className="hidden md:block text-sm font-medium">{navItem.name}</span>
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

      {/* Mobile Nav */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="sm:hidden fixed top-0 left-0 right-0 z-[100] bg-background/95 backdrop-blur-md border-b border-border/50"
      >
        <div className="flex items-center justify-between px-4 py-3">
          <Link to="/" className="hover:opacity-80 transition-opacity" onClick={() => setMobileOpen(false)}>
            <img src={metsiLogo} alt="Metsi' 012" className="h-10 w-auto" />
          </Link>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 rounded-full bg-secondary text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-border/30"
            >
              <div className="flex flex-col px-4 py-4 gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.link}
                    to={item.link}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-[10px] text-sm font-medium transition-colors",
                      location.pathname === item.link
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    )}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/order"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-[10px] text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  <ShoppingCart size={16} />
                  Order Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default FloatingNav;
