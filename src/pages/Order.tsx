import { useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AnimatedSection from "@/components/AnimatedSection";

const Order = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pricing = [
    { item: "6 × 500ML Still", price: "R51" },
    { item: "12 × 500ML Still", price: "R102" },
    { item: "24 × 500ML Still", price: "R204" },
    { item: "1 × 5L Still", price: "R25" },
    { item: "2 × 5L Still", price: "R45" },
    { item: "1 × 500ML Sparkling", price: "R10" },
    { item: "Ice Bag 1 × 2KG", price: "R22" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingWhatsApp />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container-premium">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 block"
          >
            Place Your Order
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold text-foreground tracking-tight"
          >
            Order Now
          </motion.h1>
        </div>
      </section>

      {/* Pricing Table */}
      <AnimatedSection className="section-padding pt-8">
        <div className="container-premium">
          <div className="max-w-3xl">
            {/* Header */}
            <div className="flex justify-between items-center pb-4 border-b-2 border-foreground mb-8">
              <span className="text-sm uppercase tracking-[0.2em] font-medium">Product</span>
              <span className="text-sm uppercase tracking-[0.2em] font-medium">Price</span>
            </div>

            {/* Items */}
            <div className="space-y-6">
              {pricing.map((item, index) => (
                <motion.div
                  key={item.item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex justify-between items-center py-4 border-b border-border group hover:border-foreground transition-colors"
                >
                  <span className="text-lg md:text-xl font-light text-foreground">{item.item}</span>
                  <span className="text-xl md:text-2xl font-semibold text-foreground">{item.price}</span>
                </motion.div>
              ))}
            </div>

            {/* Delivery Note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-sm mt-8 italic"
            >
              Delivery charges may apply!!
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <a
                href="https://wa.me/27659043472"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3"
              >
                <MessageCircle size={20} />
                Order via WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Info */}
      <AnimatedSection className="py-24 bg-secondary">
        <div className="container-premium">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold mb-8">Contact for Orders</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">Lebogang Mampho</p>
                <a href="tel:0659788701" className="text-xl font-light hover:underline">065 978 8701</a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">Fhulufhelo Tambani</p>
                <a href="tel:0607068221" className="text-xl font-light hover:underline">060 706 8221</a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">Email</p>
              <a href="mailto:Metsi012pta@gmail.com" className="text-xl font-light hover:underline">Metsi012pta@gmail.com</a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Order;
