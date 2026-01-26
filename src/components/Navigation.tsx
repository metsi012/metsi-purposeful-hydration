import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navigation = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
    { name: "Order", path: "/order" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-40 bg-transparent"
    >
      <div className="container-premium flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center text-xs font-bold text-foreground">
            M
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Metsi<span className="text-primary">012</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${
                location.pathname === link.path ? "text-foreground" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          to="/order"
          className="hidden md:inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Order Now
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navigation;
