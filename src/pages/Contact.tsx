import { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, MessageCircle, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FloatingNav from "@/components/FloatingNav";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required").max(100),
  email: z.string().email("Valid email required").max(255),
  phone: z.string().max(15).optional(),
  subject: z.string().min(3, "Subject is required").max(100),
  message: z.string().min(10, "Message is too short").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const contacts = [
    { name: "Lebogang Mampho", phone: "065 978 8701" },
    { name: "Fhulufhelo Tambani", phone: "060 706 8221" },
  ];

  const onSubmit = (data: ContactFormData) => {
    const message = encodeURIComponent(
      `*Contact Form Inquiry*\n\n` +
      `*Name:* ${data.name}\n` +
      `*Email:* ${data.email}\n` +
      `${data.phone ? `*Phone:* ${data.phone}\n` : ""}` +
      `*Subject:* ${data.subject}\n\n` +
      `*Message:*\n${data.message}`
    );

    window.open(`https://wa.me/27659043472?text=${message}`, "_blank");
    
    toast({
      title: "Message sent!",
      description: "Your message has been sent via WhatsApp.",
    });
    
    reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <FloatingNav />
      <FloatingWhatsApp />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-premium">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.3em] text-primary mb-4 block font-medium"
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

      {/* Contact Form Section */}
      <AnimatedSection className="section-padding pt-12">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="Your name"
                      className="mt-2"
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="your@email.com"
                      className="mt-2"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input
                      id="phone"
                      {...register("phone")}
                      placeholder="e.g. 065 123 4567"
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      {...register("subject")}
                      placeholder="What's this about?"
                      className="mt-2"
                    />
                    {errors.subject && (
                      <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Tell us more about your inquiry..."
                    className="mt-2"
                    rows={6}
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" className="btn-primary">
                  <Send size={18} />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Right - Contact Info */}
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

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-secondary p-8 mt-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="text-foreground" size={16} />
                  <h3 className="font-semibold text-foreground uppercase tracking-wider text-sm">
                    Location
                  </h3>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  Capital city.
                  <br />
                  Pretoria, South Africa
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
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
