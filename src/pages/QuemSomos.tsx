import Navbar from "@/components/Navbar";
import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";

const QuemSomos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              Quem Somos
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Especialistas em transformar operações logísticas através de metodologias comprovadas
            </p>
          </div>

          <div className="space-y-16">
            {/* Missão */}
            <section className="animate-fade-in-up">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl border-2 border-primary/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold text-secondary">Nossa Missão</h2>
                </div>
                <p className="text-lg text-foreground leading-relaxed">
                  Proporcionar soluções logísticas integradas e eficientes, implementando as melhores práticas 
                  do mercado para otimizar processos, reduzir custos e aumentar a competitividade de nossos clientes.
                </p>
              </div>
            </section>

            {/* Visão */}
            <section className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="bg-muted/50 p-8 rounded-2xl border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold text-secondary">Nossa Visão</h2>
                </div>
                <p className="text-lg text-foreground leading-relaxed">
                  Ser referência nacional em consultoria e implementação de metodologias lean na logística, 
                  reconhecidos pela excelência em resultados e pela transformação cultural que promovemos 
                  nas organizações.
                </p>
              </div>
            </section>

            {/* Valores */}
            <section className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold text-secondary">Nossos Valores</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Excelência",
                    desc: "Compromisso com a qualidade e melhoria contínua em todos os nossos serviços"
                  },
                  {
                    title: "Inovação",
                    desc: "Busca constante por soluções criativas e tecnológicas para desafios logísticos"
                  },
                  {
                    title: "Parceria",
                    desc: "Construção de relacionamentos duradouros baseados em confiança e resultados"
                  },
                  {
                    title: "Sustentabilidade",
                    desc: "Práticas que geram valor econômico, social e ambiental"
                  }
                ].map((valor, i) => (
                  <div
                    key={i}
                    className="p-6 bg-muted/30 rounded-xl border border-border hover:bg-muted/50 transition-colors"
                  >
                    <h3 className="text-xl font-bold text-secondary mb-2">{valor.title}</h3>
                    <p className="text-foreground">{valor.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Diferenciais */}
            <section className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="bg-gradient-to-br from-muted/50 to-muted p-8 rounded-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold text-secondary">Nossos Diferenciais</h2>
                </div>
                <ul className="space-y-4">
                  {[
                    "Equipe com certificação internacional em metodologias lean",
                    "Experiência em diversos segmentos industriais e logísticos",
                    "Abordagem prática com foco em resultados mensuráveis",
                    "Acompanhamento contínuo durante toda implementação",
                    "Transferência de conhecimento para autonomia dos clientes"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-secondary text-sm font-bold">{i + 1}</span>
                      </div>
                      <p className="text-lg text-foreground">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuemSomos;
