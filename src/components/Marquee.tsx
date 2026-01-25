import { motion } from "framer-motion";

const Marquee = () => {
  const items = Array(8).fill("METSI 012");

  return (
    <div className="py-8 bg-background border-y border-border overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, index) => (
          <span
            key={index}
            className="text-4xl md:text-6xl font-bold tracking-tighter mx-8 text-foreground"
          >
            {item}
            <span className="mx-8 text-foreground/30">•</span>
          </span>
        ))}
        {items.map((item, index) => (
          <span
            key={`dup-${index}`}
            className="text-4xl md:text-6xl font-bold tracking-tighter mx-8 text-foreground"
          >
            {item}
            <span className="mx-8 text-foreground/30">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
