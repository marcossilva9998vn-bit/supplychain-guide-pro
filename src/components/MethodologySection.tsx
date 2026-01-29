import { ReactNode } from "react";
import ScrollReveal from "@/components/ScrollReveal";

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
  return (
    <section id={id} className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <ScrollReveal direction="up" duration={800}>
            <div className="text-center mb-16">
              <div className={`inline-block px-8 py-3 ${color} rounded-2xl mb-6 transition-all duration-700 ease-out hover:shadow-[0_0_40px_rgba(255,204,0,0.4)] hover:scale-[1.02]`}>
                <h2 className="text-4xl md:text-5xl font-bold text-secondary">
                  {title}
                </h2>
              </div>
              <p className="text-xl text-muted-foreground transition-colors duration-500">{subtitle}</p>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="up" delay={150} duration={900}>
            <div className="bg-card rounded-3xl p-8 md:p-16 shadow-lg border-2 border-border transition-all duration-700 ease-out hover:shadow-[0_0_50px_rgba(255,204,0,0.1)] hover:border-primary/30">
              <div className="prose prose-lg max-w-none">
                {content}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;