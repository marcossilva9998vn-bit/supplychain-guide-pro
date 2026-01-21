import { ReactNode, useState } from "react";
import { LucideIcon } from "lucide-react";

interface FlipCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  backContent: string;
  color: string;
  onClick: () => void;
}

const FlipCard = ({
  icon: Icon,
  title,
  description,
  backContent,
  color,
  onClick
}: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-[450px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`relative w-full h-full transition-all duration-1000 ease-out transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of card */}
        <button
          onClick={onClick}
          className="absolute w-full h-full backface-hidden group bg-card rounded-2xl p-8 shadow-md hover:shadow-[0_0_40px_rgba(255,204,0,0.2)] transition-all duration-700 ease-out border-2 border-border hover:border-primary/50"
        >
          <div className="flex flex-col items-center text-center space-y-4 h-full justify-center">
            <div className={`w-20 h-20 rounded-2xl ${color} flex items-center justify-center transform group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,204,0,0.4)] transition-all duration-700 ease-out`}>
              <Icon className="w-10 h-10 text-secondary transition-transform duration-500 group-hover:scale-110" />
            </div>

            <h3 className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors duration-500 font-sans">
              {title}
            </h3>

            <p className="text-muted-foreground leading-relaxed text-sm transition-colors duration-500 group-hover:text-foreground">{description}</p>

            <span className="inline-flex items-center text-primary font-semibold group-hover:gap-2 transition-all duration-500">
              Saiba mais
              <span className="inline-block group-hover:translate-x-2 transition-transform duration-500">
                →
              </span>
            </span>
          </div>

          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-700 ease-out" />
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-primary/10 to-transparent rounded-tr-full transform scale-0 group-hover:scale-100 transition-transform duration-700 ease-out delay-100" />
        </button>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-2xl p-6 shadow-[0_0_40px_rgba(255,204,0,0.3)] border-2 border-primary flex items-center justify-center overflow-y-auto">
          <div className="text-center space-y-3">
            <Icon className="w-12 h-12 text-secondary mx-auto animate-float" />
            <h3 className="text-xl font-bold text-secondary">{title}</h3>
            <p className="text-secondary-foreground leading-relaxed text-sm">
              {backContent}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
