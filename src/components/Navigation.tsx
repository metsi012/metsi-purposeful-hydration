import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

interface NavigationProps {
  variant?: "light" | "dark";
}

const Navigation = ({ variant = "dark" }: NavigationProps) => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "Order", path: "/order" },
  ];

  const isLight = variant === "light";

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 ${
        isLight ? "bg-transparent" : "bg-background border-b border-border"
      }`}
    >
      <div className="container-premium flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
            isLight ? "border-white text-white" : "border-foreground text-foreground"
          }`}>
            M
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${isLight ? "nav-link-light" : "nav-link"} ${
                location.pathname === link.path ? (isLight ? "text-white" : "text-foreground") : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
