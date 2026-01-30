import { useState } from "react";
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full h-[450px] perspective-1000"
      onMouseEnter={() => {
        setIsFlipped(true);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsFlipped(false);
        setIsHovered(false);
      }}
    >
      <div 
        className={`relative w-full h-full transition-all duration-1000 ease-out transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{
          transform: isHovered && !isFlipped 
            ? 'translateY(-8px) scale(1.02)' 
            : isFlipped 
              ? 'rotateY(180deg)' 
              : 'translateY(0) scale(1)',
          transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        {/* Front of card */}
        <button
          onClick={onClick}
          className="absolute w-full h-full backface-hidden group bg-card rounded-2xl p-8 shadow-md transition-all duration-700 ease-out border-2 border-border"
          style={{
            boxShadow: isHovered 
              ? '0 20px 50px rgba(255, 204, 0, 0.25), 0 0 40px rgba(255, 204, 0, 0.15)' 
              : '0 4px 20px rgba(0, 0, 0, 0.1)',
            borderColor: isHovered ? 'hsl(45 95% 50% / 0.5)' : undefined,
          }}
        >
          <div className="flex flex-col items-center text-center space-y-4 h-full justify-center">
            <div 
              className={`w-20 h-20 rounded-2xl ${color} flex items-center justify-center transition-all duration-700 ease-out`}
              style={{
                transform: isHovered ? 'scale(1.15) rotate(5deg)' : 'scale(1) rotate(0deg)',
                boxShadow: isHovered ? '0 0 35px rgba(255, 204, 0, 0.5)' : 'none',
              }}
            >
              <Icon 
                className="w-10 h-10 text-secondary transition-all duration-500" 
                style={{
                  transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                }}
              />
            </div>

            <h3 
              className="text-2xl font-bold text-secondary transition-colors duration-500 font-sans"
              style={{
                color: isHovered ? 'hsl(45 95% 50%)' : undefined,
              }}
            >
              {title}
            </h3>

            <p className="text-muted-foreground leading-relaxed text-sm transition-colors duration-500 group-hover:text-foreground">{description}</p>

            <span className="inline-flex items-center text-primary font-semibold transition-all duration-500">
              Saiba mais
              <span 
                className="inline-block transition-transform duration-500"
                style={{
                  transform: isHovered ? 'translateX(8px)' : 'translateX(0)',
                }}
              >
                →
              </span>
            </span>
          </div>

          {/* Animated corner decorations */}
          <div 
            className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full transition-all duration-700 ease-out"
            style={{
              transform: isHovered ? 'scale(1.2)' : 'scale(0)',
              opacity: isHovered ? 1 : 0,
            }}
          />
          <div 
            className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-primary/10 to-transparent rounded-tr-full transition-all duration-700 ease-out delay-100"
            style={{
              transform: isHovered ? 'scale(1.2)' : 'scale(0)',
              opacity: isHovered ? 1 : 0,
            }}
          />
          
          {/* Floating glow effect */}
          <div 
            className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-700"
            style={{
              background: 'radial-gradient(circle at center, rgba(255, 204, 0, 0.1) 0%, transparent 70%)',
              opacity: isHovered ? 1 : 0,
            }}
          />
        </button>

        {/* Back of card */}
        <div 
          className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-2xl p-6 border-2 border-primary flex items-center justify-center overflow-y-auto"
          style={{
            boxShadow: '0 0 50px rgba(255, 204, 0, 0.4)',
          }}
        >
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
