import { ArrowDown, Truck } from "lucide-react";

const Hero = () => {
  const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  const smoothScrollTo = (top: number, duration = 900) => {
    const start = window.pageYOffset;
    const diff = top - start;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);
      window.scrollTo(0, start + diff * eased);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const scrollToContent = () => {
    const element = document.getElementById("metodologias");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      smoothScrollTo(offsetPosition, 950);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border-2 border-primary/20">
              Metodologias de Excelência
            </span>
          </div>
          
          {/* Título com arco e caminhão animado */}
          <div className="relative inline-block mb-6">
            {/* SVG do arco com caminhão */}
            <svg 
              className="absolute -top-16 left-1/2 -translate-x-1/2 w-[120%] h-32 pointer-events-none"
              viewBox="0 0 600 100"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Arco tracejado */}
              <path
                id="arcPath"
                d="M 50 90 Q 300 -20 550 90"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                strokeDasharray="10 6"
                strokeLinecap="round"
                className="opacity-60"
              />
              
              {/* Caminhão animado seguindo o arco */}
              <g className="animate-truck-arc">
                <Truck 
                  className="text-black" 
                  style={{ 
                    width: 28, 
                    height: 28,
                    filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.4))'
                  }} 
                />
              </g>
            </svg>
            
            <h1 className="text-5xl md:text-7xl font-bold text-secondary leading-tight relative z-10">
              LOGÍSTICA <span className="text-primary">INTEGRADA</span>
            </h1>
            
            {/* Caminhão animado usando CSS */}
            <div 
              className="absolute -top-12 left-0 w-full h-20 pointer-events-none"
              style={{ overflow: 'visible' }}
            >
              <div 
                className="absolute"
                style={{
                  animation: 'truck-on-arc 8s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite',
                  offsetPath: 'path("M 0 60 Q 50% -30 100% 60")',
                  offsetRotate: '0deg',
                }}
              >
                <Truck 
                  className="w-7 h-7 text-black drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]" 
                  style={{ transform: 'scaleX(-1)' }}
                />
              </div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Descubra as metodologias essenciais que revolucionam a gestão
            operacional e impulsionam resultados extraordinários
          </p>

          <button 
            onClick={scrollToContent} 
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 text-secondary rounded-full font-semibold text-lg transition-all duration-700 ease-out shadow-lg hover:shadow-xl animate-[bounce_6s_cubic-bezier(0.25,0.46,0.45,0.94)_infinite] hover:animate-none hover:scale-[1.02] active:scale-[0.98]"
          >
            Explorar Metodologias
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;