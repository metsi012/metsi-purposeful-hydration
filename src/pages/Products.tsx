import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FloatingNav from "@/components/FloatingNav";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AnimatedSection from "@/components/AnimatedSection";
import bottle500ml from "@/assets/bottle-500ml-new.png";
import bottle5l from "@/assets/bottle-5l-new.png";
import bottleSparkling from "@/assets/bottle-sparkling.png";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "still" | "sparkling" | "ice";
}

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products: Product[] = [
    {
      id: "6x500ml",
      name: "6 × 500ML Still",
      description: "Perfect for personal use or small gatherings",
      price: 51,
      image: bottle500ml,
      category: "still",
    },
    {
      id: "12x500ml",
      name: "12 × 500ML Still",
      description: "Ideal for families and weekly hydration",
      price: 102,
      image: bottle500ml,
      category: "still",
    },
    {
      id: "24x500ml",
      name: "24 × 500ML Still",
      description: "Best value for offices and events",
      price: 204,
      image: bottle500ml,
      category: "still",
    },
    {
      id: "1x5l",
      name: "1 × 5L Still",
      description: "Large format for home dispensers",
      price: 25,
      image: bottle5l,
      category: "still",
    },
    {
      id: "2x5l",
      name: "2 × 5L Still",
      description: "Value pack for regular hydration",
      price: 45,
      image: bottle5l,
      category: "still",
    },
    {
      id: "sparkling",
      name: "500ML Sparkling",
      description: "Refreshing bubbles for any occasion",
      price: 10,
      image: bottleSparkling,
      category: "sparkling",
    },
    {
      id: "ice",
      name: "Ice Bag 2KG",
      description: "Keep your drinks cold and refreshing",
      price: 22,
      image: "",
      category: "ice",
    },
  ];

  const stillProducts = products.filter((p) => p.category === "still");
  const sparklingProducts = products.filter((p) => p.category === "sparkling");
  const iceProducts = products.filter((p) => p.category === "ice");

  return (
    <div className="min-h-screen bg-background">
      <FloatingNav />
      <FloatingWhatsApp />

      {/* Hero */}
      <section className="pt-20 sm:pt-32 pb-12 sm:pb-16 bg-secondary">
        <div className="container-premium">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.3em] text-primary mb-4 block font-medium"
          >
            Our Products
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-7xl font-bold text-foreground tracking-tight mb-4 sm:mb-6"
          >
            Premium Water
            <br />
            <span className="text-primary">Collection</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground max-w-xl"
          >
            Pure, refreshing water from the heart of Pretoria. Available in still and sparkling varieties.
          </motion.p>
        </div>
      </section>

      {/* Still Water */}
      <AnimatedSection className="section-padding">
        <div className="container-premium">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-sm uppercase tracking-[0.3em] text-primary mb-2 block font-medium">
                Still Water
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Pure & Natural
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stillProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
                className="bg-card border border-border/50 p-8 rounded-[10px] group cursor-pointer transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-gradient-to-b from-secondary to-muted/30 rounded-[10px] mb-6 flex items-center justify-center overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    className="w-auto h-3/4 object-contain drop-shadow-lg"
                  />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-2 block">Still Water</span>
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-2xl font-bold text-foreground">R{product.price}</span>
                  <Link
                    to="/order"
                    className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-[10px] hover:bg-primary/90 transition-colors"
                  >
                    Order Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Sparkling Water */}
      <AnimatedSection className="section-padding bg-secondary">
        <div className="container-premium">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-sm uppercase tracking-[0.3em] text-primary mb-2 block font-medium">
                Sparkling Water
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Refreshing Bubbles
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sparklingProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
                className="bg-card border border-border/50 p-8 rounded-[10px] group cursor-pointer transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-gradient-to-b from-background to-secondary/30 rounded-[10px] mb-6 flex items-center justify-center overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    className="w-auto h-3/4 object-contain drop-shadow-lg"
                  />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-2 block">Sparkling</span>
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-2xl font-bold text-foreground">R{product.price}</span>
                  <Link
                    to="/order"
                    className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-[10px] hover:bg-primary/90 transition-colors"
                  >
                    Order Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Ice */}
      <AnimatedSection className="section-padding">
        <div className="container-premium">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-sm uppercase tracking-[0.3em] text-primary mb-2 block font-medium">
                Accessories
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Ice & More
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iceProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
                className="bg-card border border-border/50 p-8 rounded-[10px] group cursor-pointer transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-gradient-to-b from-secondary to-muted/30 rounded-[10px] mb-6 flex items-center justify-center overflow-hidden">
                  {product.image ? (
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                      className="w-auto h-3/4 object-contain drop-shadow-lg"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-3 text-muted-foreground/40">
                      <div className="w-20 h-20 rounded-full border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                        <span className="text-3xl">🧊</span>
                      </div>
                      <span className="text-xs uppercase tracking-widest">Image coming soon</span>
                    </div>
                  )}
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-2 block">Accessories</span>
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-2xl font-bold text-foreground">R{product.price}</span>
                  <Link
                    to="/order"
                    className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-[10px] hover:bg-primary/90 transition-colors"
                  >
                    Order Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-24 bg-primary text-primary-foreground">
        <div className="container-premium text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-lg opacity-80 mb-8 max-w-md mx-auto">
            Get your premium Metsi 012 water delivered straight to your door.
          </p>
          <Link
            to="/order"
            className="inline-block bg-background text-foreground px-8 py-4 rounded-[10px] font-medium hover:opacity-90 transition-opacity"
          >
            Place Your Order
          </Link>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Products;
