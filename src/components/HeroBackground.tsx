interface HeroBackgroundProps {
  image: string;
  alt: string;
}

export const HeroBackground = ({ image, alt }: HeroBackgroundProps) => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
      <div className="absolute inset-0 bg-black/40 z-10" />
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover opacity-80"
      />
    </div>
  );
};
