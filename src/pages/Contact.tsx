import { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contacts = [
    { name: "Lebogang Mampho", phone: "065 978 8701" },
    { name: "Fhulufhelo Tambani", phone: "060 706 8221" },
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
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold text-foreground tracking-tight"
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      {/* Contact Details */}
      <AnimatedSection className="section-padding pt-12">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Contact Info */}
            <div className="space-y-8">
              {/* Personal Contacts */}
              {contacts.map((contact, index) => (
                <motion.div
                  key={contact.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <Phone className="text-foreground" size={16} />
                    <h3 className="font-semibold text-foreground">
                      {contact.name}
                    </h3>
                  </div>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="text-2xl md:text-3xl font-light text-muted-foreground hover:text-foreground transition-colors ml-8"
                  >
                    {contact.phone}
                  </a>
                </motion.div>
              ))}

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="pt-8 border-t border-border"
              >
                <div className="flex items-center gap-4 mb-2">
                  <Mail className="text-foreground" size={16} />
                  <h3 className="font-semibold text-foreground">Email</h3>
                </div>
                <a
                  href="mailto:Metsi012pta@gmail.com"
                  className="text-xl md:text-2xl font-light text-muted-foreground hover:text-foreground transition-colors ml-8"
                >
                  Metsi012pta@gmail.com
                </a>
              </motion.div>

              {/* Business WhatsApp */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-2">
                  <MessageCircle className="text-foreground" size={16} />
                  <h3 className="font-semibold text-foreground">
                    Business WhatsApp
                  </h3>
                </div>
                <a
                  href="https://wa.me/27659043472"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl md:text-2xl font-light text-muted-foreground hover:text-foreground transition-colors ml-8"
                >
                  065 904 3472
                </a>
              </motion.div>
            </div>

            {/* Right - Location & Social */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-secondary p-12 mb-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="text-foreground" size={16} />
                  <h3 className="font-semibold text-foreground uppercase tracking-wider text-sm">
                    Location
                  </h3>
                </div>
                <p className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Capital city.
                  <br />
                  Pretoria, South Africa
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6 font-medium">
                  Follow Us
                </h3>
                <div className="flex items-center gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-secondary flex items-center justify-center hover:bg-foreground hover:text-background transition-all"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://wa.me/27659043472"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-secondary flex items-center justify-center hover:bg-foreground hover:text-background transition-all"
                  >
                    <MessageCircle size={20} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Contact;
