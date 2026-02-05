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
              className="absolute -top-24 left-1/2 -translate-x-1/2 pointer-events-none"
              width="750"
              height="140"
              viewBox="0 0 750 140"
              style={{ maxWidth: '130%' }}
            >
              {/* Definições */}
              <defs>
                <path
                  id="truckArcPath"
                  d="M 60 115 Q 375 -10 690 115"
                  fill="none"
                />
                {/* Gradiente para a estrada */}
                <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(45 95% 50%)" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="hsl(45 95% 55%)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="hsl(45 95% 50%)" stopOpacity="0.3" />
                </linearGradient>
                {/* Sombra para o caminhão */}
                <filter id="truckShadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="rgba(0,0,0,0.5)" />
                </filter>
                {/* Brilho para a estrada */}
                <filter id="roadGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Estrada - Borda externa (efeito de asfalto) */}
              <path
                d="M 60 115 Q 375 -10 690 115"
                fill="none"
                stroke="hsl(220 40% 20%)"
                strokeWidth="14"
                strokeLinecap="round"
                className="opacity-40"
              />
              
              {/* Estrada - Camada principal */}
              <path
                d="M 60 115 Q 375 -10 690 115"
                fill="none"
                stroke="url(#roadGradient)"
                strokeWidth="10"
                strokeLinecap="round"
                filter="url(#roadGlow)"
              />
              
              {/* Linha central tracejada */}
              <path
                d="M 60 115 Q 375 -10 690 115"
                fill="none"
                stroke="hsl(0 0% 100%)"
                strokeWidth="2"
                strokeDasharray="18 12"
                strokeLinecap="round"
                className="opacity-70"
              />
              
              {/* Caminhão seguindo o arco */}
              <g filter="url(#truckShadow)">
                <animateMotion
                  dur="7s"
                  repeatCount="indefinite"
                  keyPoints="0;1;0"
                  keyTimes="0;0.5;1"
                  calcMode="spline"
                  keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
                >
                  <mpath href="#truckArcPath" />
                </animateMotion>
                
                {/* Animação de flip do caminhão */}
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  values="-1.3 1.3; -1.3 1.3; 1.3 1.3; 1.3 1.3; -1.3 1.3"
                  keyTimes="0; 0.48; 0.5; 0.98; 1"
                  dur="7s"
                  repeatCount="indefinite"
                />
                
                {/* Caminhão 3D estilizado */}
                <g transform="translate(-22, -18)">
                  {/* Sombra no chão */}
                  <ellipse cx="20" cy="30" rx="18" ry="4" fill="rgba(0,0,0,0.3)" />
                  
                  {/* Carroceria traseira - Base */}
                  <rect x="0" y="4" width="22" height="18" rx="2" fill="#0f0f0f" />
                  {/* Carroceria - Corpo principal */}
                  <rect x="1" y="5" width="20" height="16" rx="1.5" fill="#1f1f1f" />
                  {/* Painel lateral com gradiente */}
                  <rect x="2" y="6" width="18" height="14" rx="1" fill="#2a2a2a" />
                  {/* Detalhes metálicos */}
                  <rect x="3" y="8" width="16" height="1" rx="0.5" fill="#3a3a3a" />
                  <rect x="3" y="11" width="16" height="1" rx="0.5" fill="#3a3a3a" />
                  <rect x="3" y="14" width="16" height="1" rx="0.5" fill="#3a3a3a" />
                  <rect x="3" y="17" width="16" height="1" rx="0.5" fill="#3a3a3a" />
                  {/* Logo/emblema na carroceria */}
                  <circle cx="11" cy="12" r="3" fill="hsl(45 95% 50%)" opacity="0.15" />
                  
                  {/* Conexão cabine-carroceria */}
                  <rect x="22" y="12" width="2" height="8" fill="#1a1a1a" />
                  
                  {/* Cabine */}
                  <rect x="24" y="8" width="14" height="14" rx="2.5" fill="#0f0f0f" />
                  <rect x="25" y="9" width="12" height="12" rx="2" fill="#1f1f1f" />
                  {/* Teto da cabine */}
                  <rect x="26" y="8" width="10" height="2" rx="1" fill="#2a2a2a" />
                  
                  {/* Janela da cabine */}
                  <rect x="27" y="10" width="8" height="5" rx="1.5" fill="hsl(45 95% 50%)" opacity="0.95" />
                  {/* Reflexos na janela */}
                  <rect x="28" y="10.5" width="3" height="1.5" rx="0.5" fill="white" opacity="0.5" />
                  <rect x="32" y="12" width="2" height="1" rx="0.5" fill="white" opacity="0.3" />
                  
                  {/* Porta da cabine */}
                  <rect x="27" y="16" width="7" height="5" rx="1" fill="#2a2a2a" />
                  <circle cx="33" cy="18" r="0.8" fill="#4a4a4a" />
                  
                  {/* Para-choque frontal */}
                  <rect x="38" y="12" width="3" height="10" rx="1" fill="#1a1a1a" />
                  <rect x="39" y="13" width="1.5" height="8" rx="0.5" fill="#2a2a2a" />
                  
                  {/* Grade frontal */}
                  <rect x="38" y="14" width="2" height="1" fill="#3a3a3a" />
                  <rect x="38" y="16" width="2" height="1" fill="#3a3a3a" />
                  <rect x="38" y="18" width="2" height="1" fill="#3a3a3a" />
                  
                  {/* Faróis */}
                  <circle cx="40" cy="13" r="2" fill="hsl(45 95% 50%)" opacity="0.9" />
                  <circle cx="40" cy="13" r="1.2" fill="hsl(45 95% 70%)" />
                  <circle cx="40" cy="20" r="1.5" fill="hsl(0 70% 50%)" opacity="0.6" />
                  
                  {/* Rodas traseiras */}
                  <circle cx="10" cy="26" r="5" fill="#0a0a0a" />
                  <circle cx="10" cy="26" r="4" fill="#1a1a1a" />
                  <circle cx="10" cy="26" r="3" fill="hsl(45 95% 50%)" />
                  <circle cx="10" cy="26" r="1.8" fill="#1a1a1a" />
                  <circle cx="10" cy="26" r="0.8" fill="#3a3a3a" />
                  
                  {/* Rodas dianteiras */}
                  <circle cx="32" cy="26" r="5" fill="#0a0a0a" />
                  <circle cx="32" cy="26" r="4" fill="#1a1a1a" />
                  <circle cx="32" cy="26" r="3" fill="hsl(45 95% 50%)" />
                  <circle cx="32" cy="26" r="1.8" fill="#1a1a1a" />
                  <circle cx="32" cy="26" r="0.8" fill="#3a3a3a" />
                  
                  {/* Espelho retrovisor */}
                  <rect x="25" y="11" width="1.5" height="3" rx="0.5" fill="#2a2a2a" />
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