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
        className={`relative w-full h-full transition-all duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of card */}
        <button
          onClick={onClick}
          className="absolute w-full h-full backface-hidden group bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-border hover:border-primary/50"
        >
          <div className="flex flex-col items-center text-center space-y-4 h-full justify-center">
            <div className={`w-20 h-20 rounded-2xl ${color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-10 h-10 text-secondary" />
            </div>

            <h3 className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors font-sans">
              {title}
            </h3>

            <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>

            <span className="inline-flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
              Saiba mais
              <span className="inline-block group-hover:translate-x-1 transition-transform">
                →
              </span>
            </span>
          </div>

          <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-300" />
        </button>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 shadow-xl border-2 border-primary flex items-center justify-center overflow-y-auto">
          <div className="text-center space-y-3">
            <Icon className="w-12 h-12 text-secondary mx-auto" />
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
