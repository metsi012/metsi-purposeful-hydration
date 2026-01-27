const Marquee = () => {
  const items = ["PURE WATER", "STAY HYDRATED", "METSI 012", "PREMIUM QUALITY"];

  return (
    <div className="py-4 bg-primary/5 border-y border-primary/10 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="text-sm md:text-base font-medium tracking-[0.2em] uppercase mx-8 text-primary/70"
          >
            {item}
            <span className="mx-8 text-primary/30">✦</span>
          </span>
        ))}
        {[...items, ...items].map((item, index) => (
          <span
            key={`dup-${index}`}
            className="text-sm md:text-base font-medium tracking-[0.2em] uppercase mx-8 text-primary/70"
          >
            {item}
            <span className="mx-8 text-primary/30">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
