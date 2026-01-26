import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import FloatingNav from "@/components/FloatingNav";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Marquee from "@/components/Marquee";
import ProductCard from "@/components/ProductCard";
import AnimatedSection from "@/components/AnimatedSection";
import bottle500ml from "@/assets/bottle-500ml.png";
import bottle5l from "@/assets/bottle-5l.png";
import bottleSparkling from "@/assets/bottle-sparkling.png";
import iceBag from "@/assets/ice-bag.png";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    { name: "6 × 500ML Still", price: "R51", size: "small" as const, image: bottle500ml },
    { name: "12 × 500ML Still", price: "R102", size: "medium" as const, image: bottle500ml },
    { name: "24 × 500ML Still", price: "R204", size: "large" as const, image: bottle500ml },
    { name: "1 × 5L Still", price: "R25", size: "medium" as const, image: bottle5l },
    { name: "2 × 5L Still", price: "R45", size: "small" as const, image: bottle5l },
    { name: "500ML Sparkling", price: "R10", size: "medium" as const, image: bottleSparkling },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen bg-secondary relative overflow-hidden">
        <Navigation />
        <FloatingNav />

        <div className="container-premium min-h-screen flex items-center pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left - Hero Image Area */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/5] bg-background rounded-2xl flex items-center justify-center"
            >
              {/* Featured bottle image */}
              <motion.img
                src={bottle500ml}
                alt="METSI 012 Water Bottle"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-auto h-3/4 object-contain drop-shadow-2xl"
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </motion.div>

            {/* Right - Content */}
            <div className="lg:pl-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-sm uppercase tracking-[0.3em] text-primary mb-4 block font-medium"
              >
                Premium Water
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-[0.95] tracking-tight text-foreground"
              >
                Metsi
                <br />
                <span className="text-primary">012</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg text-muted-foreground font-light mb-8 max-w-md leading-relaxed"
              >
                'A Monate Metsi 012 — Stay Hydrated and Drink Metsi. Pure, refreshing water from the heart of Pretoria.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link 
                  to="/order" 
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  Order Now
                  <ArrowRight size={18} />
                </Link>
                <Link 
                  to="/products" 
                  className="inline-flex items-center gap-2 border-2 border-foreground text-foreground px-8 py-4 rounded-full font-medium hover:bg-foreground hover:text-background transition-colors"
                >
                  View Products
                </Link>
              </motion.div>

              {/* Quick Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-16 pt-8 border-t border-border grid grid-cols-2 gap-8"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2 font-medium">Location</p>
                  <p className="text-sm text-foreground">Pretoria, South Africa</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2 font-medium">Type</p>
                  <p className="text-sm text-foreground">Still & Sparkling</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee />

      {/* Products Section */}
      <section className="section-padding relative">
        <div className="container-premium">
          {/* Section Header */}
          <div className="flex justify-between items-end mb-16">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-sm uppercase tracking-[0.3em] text-primary mb-4 block font-medium"
              >
                Our Products
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold tracking-tight"
              >
                Still & Sparkling
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link 
                to="/products" 
                className="hidden md:inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                View All
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* Background Text */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 overflow-hidden pointer-events-none">
            <p className="bg-text text-center whitespace-nowrap">FEATURED</p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
            {products.slice(0, 3).map((product, index) => (
              <ProductCard
                key={product.name}
                name={product.name}
                price={product.price}
                size={product.size}
                image={product.image}
                index={index}
              />
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-8 relative z-10">
            <div className="hidden md:block" />
            {products.slice(3, 5).map((product, index) => (
              <ProductCard
                key={product.name}
                name={product.name}
                price={product.price}
                size={product.size}
                image={product.image}
                index={index + 3}
              />
            ))}
          </div>

          {/* Sparkling Section */}
          <div className="mt-24">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold tracking-tight mb-12"
            >
              Sparkling & Ice
            </motion.h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <ProductCard
                name="500ML Sparkling"
                price="R10"
                size="small"
                image={bottleSparkling}
                index={0}
              />
              <ProductCard
                name="Ice Bag 2KG"
                price="R22"
                size="small"
                image={iceBag}
                index={1}
              />
            </div>
          </div>

          {/* Delivery Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground text-sm mt-16 italic"
          >
            Delivery charges may apply!!
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container-premium text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-bold tracking-tighter mb-8"
          >
            PURE WATER
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg opacity-80 font-light mb-12 max-w-md mx-auto"
          >
            Straight from Pretoria, delivered to your door.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/order" 
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Order Now
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* Background decorative */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <span className="text-[30vw] font-bold tracking-tighter">M</span>
        </div>
      </AnimatedSection>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default Index;
