import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FlipCard from "@/components/FlipCard";
import MethodologySection from "@/components/MethodologySection";
import Quiz from "@/components/Quiz";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Sparkles, LayoutGrid, TrendingUp, Clock, CheckCircle2, Target, Users, Zap } from "lucide-react";

const Index = () => {
  const [kaizenChecks, setKaizenChecks] = useState<boolean[]>([false, false, false, false, false]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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

  const handleKaizenCheck = (index: number) => {
    const newChecks = [...kaizenChecks];
    newChecks[index] = !newChecks[index];
    setKaizenChecks(newChecks);
  };

  const methodologies = [
    {
      icon: Sparkles,
      title: "5S",
      description: "Metodologia japonesa para organização e padronização do ambiente de trabalho",
      backContent: "O 5S cria ambientes organizados, seguros e produtivos através de 5 sensos: Utilização, Organização, Limpeza, Padronização e Disciplina.",
      color: "bg-primary",
      id: "5s"
    },
    {
      icon: LayoutGrid,
      title: "Kanban",
      description: "Sistema visual de gestão de fluxo de trabalho e controle de produção",
      backContent: "Kanban visualiza o trabalho, limita atividades em progresso e maximiza a eficiência através de um sistema de cartões e colunas.",
      color: "bg-primary",
      id: "kanban"
    },
    {
      icon: TrendingUp,
      title: "Kaizen",
      description: "Filosofia de melhoria contínua que transforma processos gradualmente",
      backContent: "Kaizen promove pequenas melhorias constantes envolvendo todos os colaboradores, criando uma cultura de inovação e aprendizado.",
      color: "bg-primary",
      id: "kaizen"
    },
    {
      icon: Clock,
      title: "Just in Time",
      description: "Sistema de produção que minimiza estoques e otimiza recursos",
      backContent: "JIT produz apenas o necessário, no momento certo e na quantidade exata, eliminando desperdícios e reduzindo custos.",
      color: "bg-primary",
      id: "jit"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* Metodologias Overview */}
      <section id="metodologias" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              METODOLOGIAS ESSÊNCIAIS
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore as ferramentas que impulsionam a eficiência operacional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {methodologies.map((method, index) => (
              <div
                key={method.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <FlipCard {...method} onClick={() => scrollToSection(method.id)} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* 5S Section */}
      <MethodologySection
        id="5s"
        title="5S"
        subtitle="Senso de Utilização, Organização, Limpeza, Padronização e Disciplina"
        color="bg-primary"
        content={
          <div className="space-y-8">
            <p className="text-lg text-foreground leading-relaxed">
              O método 5S é uma filosofia japonesa focada na organização do
              ambiente de trabalho, visando melhorar a eficiência, segurança e
              qualidade através de cinco princípios fundamentais.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[{
                name: "Seiri (Utilização)",
                desc: "Separar o necessário do desnecessário, descartando o que não agrega valor"
              }, {
                name: "Seiton (Organização)",
                desc: "Organizar e identificar materiais para fácil localização e acesso"
              }, {
                name: "Seiso (Limpeza)",
                desc: "Manter o ambiente limpo, identificando e eliminando fontes de sujeira"
              }, {
                name: "Seiketsu (Padronização)",
                desc: "Criar padrões e procedimentos para manter os 3S anteriores"
              }, {
                name: "Shitsuke (Disciplina)",
                desc: "Manter a disciplina e comprometimento com os processos estabelecidos"
              }].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-muted/50 rounded-xl hover:bg-muted transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-secondary mb-2">
                      {item.name}
                    </h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary/10 border-2 border-primary/20 rounded-xl p-6">
              <h4 className="font-bold text-secondary mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Benefícios do 5S
              </h4>
              <ul className="space-y-2 text-foreground">
                <li>• Redução de desperdícios e custos operacionais</li>
                <li>• Aumento da produtividade e eficiência</li>
                <li>• Melhoria na segurança do trabalho</li>
                <li>• Ambiente mais organizado e agradável</li>
                <li>• Facilita identificação de problemas</li>
              </ul>
            </div>
          </div>
        }
      />

      <Separator className="my-8" />

      {/* Kanban Section */}
      <MethodologySection id="kanban" title="Kanban" subtitle="Sistema Visual de Gestão de Fluxo de Trabalho" color="bg-primary" content={<div className="space-y-8">
            <p className="text-lg text-foreground leading-relaxed">
              Kanban é um sistema visual que utiliza cartões ou sinalizações
              para controlar o fluxo de trabalho e a produção, permitindo uma
              gestão eficiente baseada na demanda real.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[{
          title: "To Do",
          desc: "Tarefas aguardando início",
          icon: LayoutGrid
        }, {
          title: "In Progress",
          desc: "Trabalho em execução",
          icon: Zap
        }, {
          title: "Done",
          desc: "Tarefas concluídas",
          icon: CheckCircle2
        }].map((col, i) => <div key={i} className="bg-gradient-to-br from-muted/50 to-muted p-6 rounded-xl border-2 border-border">
                  <col.icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold text-secondary mb-2">{col.title}</h4>
                  <p className="text-muted-foreground">{col.desc}</p>
                </div>)}
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-secondary text-xl">
                Princípios do Kanban
              </h4>
              {["Visualizar o fluxo de trabalho para identificar gargalos", "Limitar o trabalho em progresso (WIP) para evitar sobrecarga", "Gerenciar e melhorar o fluxo continuamente", "Tornar as políticas de processo explícitas", "Implementar ciclos de feedback", "Melhorar colaborativamente usando modelos e métodos científicos"].map((principle, i) => <div key={i} className="flex gap-3 items-start p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-secondary font-bold">
                    {i + 1}
                  </span>
                  <p className="text-foreground pt-1">{principle}</p>
                </div>)}
            </div>
          </div>} />

      <Separator className="my-8" />

      {/* Kaizen Section */}
      <MethodologySection id="kaizen" title="Kaizen" subtitle="Melhoria Contínua Como Filosofia de Trabalho" color="bg-primary" content={<div className="space-y-8">
            <p className="text-lg text-foreground leading-relaxed">
              Kaizen significa "mudança para melhor" e representa uma filosofia
              de melhoria contínua que envolve todos os colaboradores na
              identificação e implementação de pequenas melhorias constantes.
            </p>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl border-2 border-primary/20">
              <h4 className="font-bold text-secondary text-xl mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                Ciclo PDCA do Kaizen
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                {[{
            step: "Plan (Planejar)",
            desc: "Identificar oportunidades e planejar mudanças"
          }, {
            step: "Do (Fazer)",
            desc: "Implementar as mudanças em pequena escala"
          }, {
            step: "Check (Verificar)",
            desc: "Analisar os resultados e identificar aprendizados"
          }, {
            step: "Act (Agir)",
            desc: "Padronizar melhorias e identificar novas oportunidades"
          }].map((item, i) => <div key={i} className="bg-card p-6 rounded-xl shadow-sm border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-secondary font-bold">{i + 1}</span>
                      </div>
                      <h5 className="font-bold text-secondary">{item.step}</h5>
                    </div>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>)}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold text-secondary text-lg flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Pilares do Kaizen
                </h4>
                <ul className="space-y-3">
                  {["Envolvimento de todos os níveis", "Foco no processo, não nas pessoas", "Eliminação de desperdícios (Muda)", "Padronização das melhorias", "Medição e análise de dados"].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                      <Checkbox 
                        checked={kaizenChecks[i]}
                        onCheckedChange={() => handleKaizenCheck(i)}
                        className="mt-0.5"
                      />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-muted/50 p-6 rounded-xl">
                <h4 className="font-bold text-secondary mb-4">
                  Resultados Esperados
                </h4>
                <ul className="space-y-2 text-foreground">
                  <li>• Aumento gradual da qualidade</li>
                  <li>• Redução de custos operacionais</li>
                  <li>• Maior satisfação dos colaboradores</li>
                  <li>• Cultura de inovação e aprendizado</li>
                  <li>• Competitividade sustentável</li>
                </ul>
              </div>
            </div>
          </div>} />

      <Separator className="my-8" />

      {/* Just in Time Section */}
      <MethodologySection id="jit" title="Just in Time" subtitle="Produção Sincronizada com a Demanda" color="bg-primary" content={<div className="space-y-8">
            <p className="text-lg text-foreground leading-relaxed">
              Just in Time (JIT) é uma estratégia de gestão de produção que visa
              produzir e entregar produtos apenas quando necessário, na
              quantidade certa e no momento exato, minimizando estoques e
              desperdícios.
            </p>

            <div className="bg-primary/10 border-2 border-primary/20 rounded-2xl p-8">
              <h4 className="font-bold text-secondary text-xl mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-primary" />
                Objetivos Principais
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                {[{
            title: "Zero Estoque",
            desc: "Minimizar custos com armazenagem"
          }, {
            title: "Zero Defeitos",
            desc: "Qualidade na primeira vez"
          }, {
            title: "Zero Atrasos",
            desc: "Entregas pontuais garantidas"
          }].map((obj, i) => <div key={i} className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-secondary">
                        0
                      </span>
                    </div>
                    <h5 className="font-bold text-secondary mb-2">
                      {obj.title}
                    </h5>
                    <p className="text-muted-foreground text-sm">{obj.desc}</p>
                  </div>)}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-secondary text-xl">
                Elementos Fundamentais
              </h4>
              {[{
          title: "Fluxo Contínuo",
          desc: "Produção fluida sem interrupções ou gargalos"
        }, {
          title: "Sistema Puxado",
          desc: "Produção baseada na demanda real do cliente"
        }, {
          title: "Takt Time",
          desc: "Ritmo de produção sincronizado com a demanda"
        }, {
          title: "Redução de Setup",
          desc: "Minimizar tempo de preparação de máquinas"
        }, {
          title: "Parcerias com Fornecedores",
          desc: "Entregas frequentes e confiáveis de materiais"
        }].map((element, i) => <div key={i} className="flex gap-4 p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors border border-border">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h5 className="font-bold text-secondary mb-2">
                      {element.title}
                    </h5>
                    <p className="text-muted-foreground">{element.desc}</p>
                  </div>
                </div>)}
            </div>

            <div className="bg-gradient-to-br from-muted/50 to-muted p-6 rounded-xl">
              <h4 className="font-bold text-secondary mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Benefícios do JIT
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {["Redução drástica de estoques", "Menor necessidade de espaço físico", "Redução de desperdícios", "Aumento da qualidade", "Maior flexibilidade produtiva", "Redução de custos operacionais", "Melhor fluxo de caixa", "Resposta rápida ao mercado"].map((benefit, i) => <div key={i} className="flex gap-2 items-center">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>)}
              </div>
            </div>
          </div>} />

      <Separator className="my-8" />

      {/* Quiz Section */}
      <section id="quiz" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Teste Seus Conhecimentos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Desafie-se com perguntas sobre as metodologias
            </p>
          </div>
          <Quiz />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="mb-6 flex flex-col items-center gap-4">
            <img 
              src="/src/assets/jamlog-logo.png" 
              alt="JAMLOG Logo" 
              className="h-40 md:h-48 w-auto"
            />
            <h3 className="text-2xl font-bold mb-2">JAMLOG</h3>
            <p className="text-background/80">Excelência em Gestão Operacional</p>
          </div>
          <p className="text-background/60">© 2024 JAMLOG. Metodologias para resultados extraordinários.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
