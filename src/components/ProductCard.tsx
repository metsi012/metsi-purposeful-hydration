import { motion } from "framer-motion";

interface ProductCardProps {
  name: string;
  price: string;
  size?: "small" | "medium" | "large";
  index: number;
}

const ProductCard = ({ name, price, size = "medium", index }: ProductCardProps) => {
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
      whileHover={{ y: -8 }}
      className="product-card group"
    >
      <div className={`${sizeClasses[size]} bg-muted mb-6 flex items-center justify-center relative overflow-hidden`}>
        {/* Water bottle silhouette */}
        <motion.div
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="w-1/2 h-3/4 bg-gradient-to-b from-foreground/5 to-foreground/10 rounded-t-full"
        />
      </div>
      <div className="flex justify-between items-end">
        <p className="text-sm font-light text-foreground">{name}</p>
        <p className="text-lg font-semibold text-foreground">{price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
