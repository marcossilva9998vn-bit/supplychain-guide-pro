import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
interface MethodologyCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  onClick: () => void;
}
const MethodologyCard = ({
  icon: Icon,
  title,
  description,
  color,
  onClick
}: MethodologyCardProps) => {
  return <button onClick={onClick} className="group relative bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-border hover:border-primary/50 text-left w-full">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className={`w-20 h-20 rounded-2xl ${color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-10 h-10 text-secondary" />
        </div>

        <h3 className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors font-sans">
          {title}
        </h3>

        <p className="text-muted-foreground leading-relaxed">{description}</p>

        <span className="inline-flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
          Saiba mais
          <span className="inline-block group-hover:translate-x-1 transition-transform">
            →
          </span>
        </span>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-300" />
    </button>;
};
export default MethodologyCard;