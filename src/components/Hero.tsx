import { ArrowDown } from "lucide-react";
const Hero = () => {
  const scrollToContent = () => {
    const element = document.getElementById("metodologias");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border-2 border-primary/20">
              Metodologias de Excelência
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-6 leading-tight">
            LOGÍSTICA
Integrada
            <span className="block text-primary mt-2">Integrada</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Descubra as metodologias essenciais que revolucionam a gestão
            operacional e impulsionam resultados extraordinários
          </p>

          <button onClick={scrollToContent} className="group inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 text-secondary rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl animate-[bounce_5s_ease-in-out_infinite] hover:animate-none">
            Explorar Metodologias
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>;
};
export default Hero;