export const SectionBackground = ({ image, className }) => {
  const baseClasses = "absolute inset-0 from-background/10 via-background/75 to-background";
  
  const classes = `${baseClasses} ${className || ""}`;
  return (
    <div className="absolute inset-0">
      <img 
        src={image} 
        alt="Section background" 
        className="w-full h-full object-cover opacity-40" 
      />
      <div className= {classes} />
    </div>
  );
};
