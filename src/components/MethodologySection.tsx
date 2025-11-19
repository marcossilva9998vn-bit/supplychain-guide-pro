import { ReactNode } from "react";
interface MethodologySectionProps {
  id: string;
  title: string;
  subtitle: string;
  content: ReactNode;
  color: string;
}
const MethodologySection = ({
  id,
  title,
  subtitle,
  content,
  color
}: MethodologySectionProps) => {
  return <section id={id} className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className={`inline-block px-8 py-3 ${color} rounded-2xl mb-6`}>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary">
                {title}
              </h2>
            </div>
            <p className="text-xl text-muted-foreground">{subtitle}</p>
          </div>

          {/* Content */}
          <div className="bg-card rounded-3xl p-8 md:p-16 shadow-lg border-2 border-border">
            <div className="prose prose-lg max-w-none">
              {content}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default MethodologySection;