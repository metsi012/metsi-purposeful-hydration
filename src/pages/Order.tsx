import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Plus, Minus, ShoppingCart } from "lucide-react";
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
import bottle500ml from "@/assets/bottle-500ml.png";
import bottle5l from "@/assets/bottle-5l.png";
import bottleSparkling from "@/assets/bottle-sparkling.png";
import iceBag from "@/assets/ice-bag.png";

const orderSchema = z.object({
  name: z.string().min(2, "Name is required").max(100),
  phone: z.string().min(10, "Valid phone number required").max(15),
  address: z.string().min(5, "Delivery address required").max(200),
  notes: z.string().max(500).optional(),
});

type OrderFormData = z.infer<typeof orderSchema>;

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Order = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    { id: "6x500ml", name: "6 × 500ML Still", price: 51, image: bottle500ml },
    { id: "12x500ml", name: "12 × 500ML Still", price: 102, image: bottle500ml },
    { id: "24x500ml", name: "24 × 500ML Still", price: 204, image: bottle500ml },
    { id: "1x5l", name: "1 × 5L Still", price: 25, image: bottle5l },
    { id: "2x5l", name: "2 × 5L Still", price: 45, image: bottle5l },
    { id: "sparkling", name: "500ML Sparkling", price: 10, image: bottleSparkling },
    { id: "ice", name: "Ice Bag 2KG", price: 22, image: iceBag },
  ];

  const [cart, setCart] = useState<CartItem[]>([]);

  const { register, handleSubmit, formState: { errors } } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
  });

  const addToCart = (product: typeof products[0]) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const onSubmit = (data: OrderFormData) => {
    if (cart.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before ordering.",
        variant: "destructive",
      });
      return;
    }

    const orderDetails = cart
      .map((item) => `${item.quantity}x ${item.name} - R${item.price * item.quantity}`)
      .join("\n");

    const message = encodeURIComponent(
      `*New Order*\n\n` +
      `*Customer:* ${data.name}\n` +
      `*Phone:* ${data.phone}\n` +
      `*Address:* ${data.address}\n` +
      `${data.notes ? `*Notes:* ${data.notes}\n` : ""}` +
      `\n*Order Details:*\n${orderDetails}\n\n` +
      `*Total: R${totalAmount}*`
    );

    window.open(`https://wa.me/27659043472?text=${message}`, "_blank");
    
    toast({
      title: "Order sent!",
      description: "Your order has been sent via WhatsApp.",
    });
  };

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
            Place Your Order
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-7xl font-bold text-foreground tracking-tight"
          >
            Order Now
          </motion.h1>
        </div>
      </section>

      {/* Products Selection */}
      <AnimatedSection className="section-padding pt-8">
        <div className="container-premium">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Select Products</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {products.map((product, index) => {
              const cartItem = cart.find((item) => item.id === product.id);
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-secondary p-4 relative group"
                >
                  <div className="aspect-square bg-background mb-4 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-auto h-3/4 object-contain"
                    />
                  </div>
                  <p className="text-sm font-light mb-1">{product.name}</p>
                  <p className="text-lg font-semibold mb-3">R{product.price}</p>
                  
                  {cartItem ? (
                    <div className="flex items-center justify-between bg-background p-2">
                      <button
                        onClick={() => updateQuantity(product.id, -1)}
                        className="p-1 hover:bg-secondary transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="font-semibold">{cartItem.quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, 1)}
                        className="p-1 hover:bg-secondary transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  ) : (
                    <Button
                      onClick={() => addToCart(product)}
                      variant="outline"
                      className="w-full"
                    >
                      Add to Cart
                    </Button>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Delivery Note */}
          <p className="text-muted-foreground text-sm mt-8 italic text-center">
            Delivery charges may apply!!
          </p>
        </div>
      </AnimatedSection>

      {/* Order Form */}
      <AnimatedSection className="py-16 sm:py-24 bg-secondary">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Cart Summary */}
            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <ShoppingCart size={24} />
                Your Cart
              </h2>
              
              {cart.length === 0 ? (
                <p className="text-muted-foreground">Your cart is empty. Add products above.</p>
              ) : (
                <div className="space-y-3 sm:space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between bg-background p-3 sm:p-4 gap-2"
                    >
                      <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="font-medium text-sm sm:text-base truncate">{item.name}</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            R{item.price} × {item.quantity}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:bg-secondary transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-6 sm:w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:bg-secondary transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <p className="font-semibold text-sm sm:text-base w-16 sm:w-20 text-right">
                          R{item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  <div className="border-t border-border pt-4 flex justify-between items-center">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-2xl font-bold">R{totalAmount}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Order Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Delivery Details</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Your full name"
                    className="mt-2"
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    {...register("phone")}
                    placeholder="e.g. 065 123 4567"
                    className="mt-2"
                  />
                  {errors.phone && (
                    <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="address">Delivery Address *</Label>
                  <Textarea
                    id="address"
                    {...register("address")}
                    placeholder="Your full delivery address"
                    className="mt-2"
                    rows={3}
                  />
                  {errors.address && (
                    <p className="text-destructive text-sm mt-1">{errors.address.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    {...register("notes")}
                    placeholder="Any special instructions..."
                    className="mt-2"
                    rows={2}
                  />
                </div>

                <Button type="submit" className="w-full btn-primary">
                  <MessageCircle size={20} />
                  Send Order via WhatsApp
                </Button>
              </form>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Info */}
      <AnimatedSection className="py-16 sm:py-24">
        <div className="container-premium">
          <div className="max-w-3xl">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Contact for Orders</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">Fhulufhelo Tambani</p>
                <a href="tel:0607068221" className="text-lg sm:text-xl font-light hover:underline">060 706 8221</a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">Lebogang Mampho</p>
                <a href="tel:0659788701" className="text-lg sm:text-xl font-light hover:underline">065 978 8701</a>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">Email</p>
              <a href="mailto:Metsi012pta@gmail.com" className="text-lg sm:text-xl font-light hover:underline break-all">Metsi012pta@gmail.com</a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Order;
