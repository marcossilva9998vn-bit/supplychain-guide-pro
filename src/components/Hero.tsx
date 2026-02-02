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
          {/* Título com arco e caminhão animado */}
          <div className="relative inline-block mb-6">
            {/* SVG do arco com caminhão animado */}
            <svg 
              className="absolute -top-20 left-1/2 -translate-x-1/2 pointer-events-none"
              width="700"
              height="120"
              viewBox="0 0 700 120"
              style={{ maxWidth: '120%' }}
            >
              {/* Definição do caminho do arco */}
              <defs>
                <path
                  id="truckArcPath"
                  d="M 50 100 Q 350 -20 650 100"
                  fill="none"
                />
                {/* Sombra para o caminhão */}
                <filter id="truckShadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="rgba(0,0,0,0.4)" />
                </filter>
              </defs>
              
              {/* Arco tracejado visível */}
              <path
                d="M 50 100 Q 350 -20 650 100"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                strokeDasharray="12 8"
                strokeLinecap="round"
                className="opacity-50"
              />
              
              {/* Caminhão seguindo o arco */}
              <g filter="url(#truckShadow)">
                <animateMotion
                  dur="6s"
                  repeatCount="indefinite"
                  keyPoints="0;1;0"
                  keyTimes="0;0.5;1"
                  calcMode="spline"
                  keySplines="0.45 0.05 0.55 0.95; 0.45 0.05 0.55 0.95"
                >
                  <mpath href="#truckArcPath" />
                </animateMotion>
                
                {/* Animação de flip do caminhão */}
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  values="-1 1; -1 1; 1 1; 1 1; -1 1"
                  keyTimes="0; 0.48; 0.5; 0.98; 1"
                  dur="6s"
                  repeatCount="indefinite"
                />
                
                {/* Caminhão estilizado */}
                <g transform="translate(-18, -16)">
                  {/* Carroceria traseira */}
                  <rect x="2" y="6" width="18" height="14" rx="2" fill="#1a1a1a" />
                  <rect x="3" y="7" width="16" height="12" rx="1.5" fill="#2d2d2d" />
                  {/* Linhas decorativas na carroceria */}
                  <line x1="5" y1="10" x2="17" y2="10" stroke="#3d3d3d" strokeWidth="1" />
                  <line x1="5" y1="13" x2="17" y2="13" stroke="#3d3d3d" strokeWidth="1" />
                  <line x1="5" y1="16" x2="17" y2="16" stroke="#3d3d3d" strokeWidth="1" />
                  
                  {/* Cabine */}
                  <rect x="20" y="10" width="10" height="10" rx="2" fill="#1a1a1a" />
                  <rect x="21" y="11" width="8" height="8" rx="1.5" fill="#2d2d2d" />
                  {/* Janela da cabine */}
                  <rect x="23" y="12" width="5" height="4" rx="1" fill="hsl(var(--primary))" opacity="0.9" />
                  {/* Reflexo na janela */}
                  <rect x="24" y="12.5" width="2" height="1" rx="0.5" fill="white" opacity="0.4" />
                  
                  {/* Para-choque frontal */}
                  <rect x="29" y="14" width="2" height="6" rx="0.5" fill="#1a1a1a" />
                  
                  {/* Rodas com detalhes */}
                  <circle cx="8" cy="22" r="4" fill="#1a1a1a" />
                  <circle cx="8" cy="22" r="3" fill="hsl(var(--primary))" />
                  <circle cx="8" cy="22" r="1.5" fill="#1a1a1a" />
                  
                  <circle cx="24" cy="22" r="4" fill="#1a1a1a" />
                  <circle cx="24" cy="22" r="3" fill="hsl(var(--primary))" />
                  <circle cx="24" cy="22" r="1.5" fill="#1a1a1a" />
                  
                  {/* Farol */}
                  <circle cx="30" cy="16" r="1.5" fill="hsl(var(--primary))" opacity="0.8" />
                </g>
              </g>
            </svg>
            
            <h1 className="text-5xl md:text-7xl font-bold text-secondary leading-tight relative z-10">
              LOGÍSTICA <span className="text-primary">INTEGRADA</span>
            </h1>
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