import { motion } from "framer-motion";

interface ProductCardProps {
  name: string;
  price: string;
  size?: "small" | "medium" | "large";
  image?: string;
  index: number;
}

const ProductCard = ({ name, price, size = "medium", image, index }: ProductCardProps) => {
  const sizeClasses = {
    small: "aspect-square",
    medium: "aspect-[4/5]",
    large: "aspect-[3/4]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
      className="product-card group rounded-[10px] overflow-hidden"
    >
      <div className={`${sizeClasses[size]} bg-gradient-to-b from-muted to-secondary/50 flex items-center justify-center relative overflow-hidden rounded-[10px]`}>
        {image ? (
          <motion.img
            src={image}
            alt={name}
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
            className="w-auto h-3/4 object-contain drop-shadow-lg"
          />
        ) : (
          <motion.div
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="w-1/2 h-3/4 bg-gradient-to-b from-foreground/5 to-foreground/10 rounded-t-full"
          />
        )}
      </div>
      <div className="flex justify-between items-center pt-4">
        <p className="text-sm font-medium text-foreground">{name}</p>
        <p className="text-lg font-bold text-foreground">{price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
