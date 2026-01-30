import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en" | "es" | "ja";

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Navbar
    "nav.home": "Início",
    "nav.methodologies": "Metodologias",
    "nav.about": "Quem Somos",
    "nav.dashboards": "Dashboards",
    "nav.contact": "Contato",
    
    // Hero
    "hero.title": "Transforme sua operação com metodologias comprovadas",
    "hero.subtitle": "Descubra como 5S, Kanban, Kaizen e Just in Time podem revolucionar sua gestão",
    "hero.cta": "Explorar Metodologias",
    
    // Sections
    "section.methodologies.title": "METODOLOGIAS ESSÊNCIAIS",
    "section.methodologies.subtitle": "Explore as ferramentas que impulsionam a eficiência operacional",
    
    // 5S
    "5s.title": "5S",
    "5s.subtitle": "Senso de Utilização, Organização, Limpeza, Padronização e Disciplina",
    "5s.description": "Metodologia japonesa para organização, padronização e melhoria contínua do ambiente de trabalho, promovendo eficiência e qualidade através de cinco sensos fundamentais",
    "5s.backContent": "O 5S cria ambientes de trabalho organizados, seguros e altamente produtivos através da aplicação sistemática de 5 sensos japoneses: Seiri (Utilização), Seiton (Organização), Seiso (Limpeza), Seiketsu (Padronização) e Shitsuke (Disciplina). Esta metodologia elimina desperdícios, otimiza processos e estabelece uma cultura de excelência operacional.",
    "5s.seiri": "Seiri (Utilização)",
    "5s.seiri.desc": "Separar o necessário do desnecessário, descartando o que não agrega valor",
    "5s.seiton": "Seiton (Organização)",
    "5s.seiton.desc": "Organizar e identificar materiais para fácil localização e acesso",
    "5s.seiso": "Seiso (Limpeza)",
    "5s.seiso.desc": "Manter o ambiente limpo, identificando e eliminando fontes de sujeira",
    "5s.seiketsu": "Seiketsu (Padronização)",
    "5s.seiketsu.desc": "Criar padrões e procedimentos para manter os 3S anteriores",
    "5s.shitsuke": "Shitsuke (Disciplina)",
    "5s.shitsuke.desc": "Manter a disciplina e comprometimento com os processos estabelecidos",
    "5s.benefits.title": "Benefícios do 5S",
    "5s.benefits.1": "Redução de desperdícios e custos operacionais",
    "5s.benefits.2": "Aumento da produtividade e eficiência",
    "5s.benefits.3": "Melhoria na segurança do trabalho",
    "5s.benefits.4": "Ambiente mais organizado e agradável",
    "5s.benefits.5": "Facilita identificação de problemas",
    
    // Kanban
    "kanban.title": "Kanban",
    "kanban.subtitle": "Sistema Visual de Gestão de Fluxo de Trabalho",
    "kanban.description": "Sistema visual de gestão de fluxo de trabalho e controle de produção que utiliza cartões e sinalizações para otimizar processos, reduzir desperdícios e aumentar a eficiência operacional",
    "kanban.backContent": "Kanban é um sistema de gestão visual desenvolvido pela Toyota que revoluciona o controle de fluxo de trabalho. Utilizando cartões, colunas e sinalizações visuais, o Kanban permite visualizar todo o processo produtivo, limitar o trabalho em progresso (WIP), identificar gargalos rapidamente e maximizar a eficiência através de um fluxo contínuo e otimizado.",
    "kanban.todo": "To Do",
    "kanban.todo.desc": "Tarefas aguardando início",
    "kanban.inprogress": "In Progress",
    "kanban.inprogress.desc": "Trabalho em execução",
    "kanban.done": "Done",
    "kanban.done.desc": "Tarefas concluídas",
    "kanban.principles": "Princípios do Kanban",
    "kanban.principle.1": "Visualizar o fluxo de trabalho para identificar gargalos",
    "kanban.principle.2": "Limitar o trabalho em progresso (WIP) para evitar sobrecarga",
    "kanban.principle.3": "Gerenciar e melhorar o fluxo continuamente",
    "kanban.principle.4": "Tornar as políticas de processo explícitas",
    "kanban.principle.5": "Implementar ciclos de feedback",
    "kanban.principle.6": "Melhorar colaborativamente usando modelos e métodos científicos",
    
    // Kaizen
    "kaizen.title": "Kaizen",
    "kaizen.subtitle": "Melhoria Contínua Como Filosofia de Trabalho",
    "kaizen.description": "Filosofia japonesa de melhoria contínua que transforma processos e resultados através de pequenas mudanças incrementais constantes, envolvendo todos os níveis organizacionais na busca pela excelência",
    "kaizen.backContent": "Kaizen, que significa 'mudança para melhor', é uma poderosa filosofia de gestão que promove a melhoria contínua através de pequenas mudanças incrementais e constantes. Envolvendo todos os colaboradores da organização, o Kaizen cria uma cultura sustentável de inovação, aprendizado e aperfeiçoamento, utilizando o ciclo PDCA (Plan-Do-Check-Act) para implementar melhorias de forma sistemática e mensurável.",
    "kaizen.pdca.title": "Ciclo PDCA do Kaizen",
    "kaizen.pdca.plan": "Plan (Planejar)",
    "kaizen.pdca.plan.desc": "Identificar oportunidades e planejar mudanças",
    "kaizen.pdca.do": "Do (Fazer)",
    "kaizen.pdca.do.desc": "Implementar as mudanças em pequena escala",
    "kaizen.pdca.check": "Check (Verificar)",
    "kaizen.pdca.check.desc": "Analisar os resultados e identificar aprendizados",
    "kaizen.pdca.act": "Act (Agir)",
    "kaizen.pdca.act.desc": "Padronizar melhorias e identificar novas oportunidades",
    "kaizen.pillars.title": "Pilares do Kaizen",
    "kaizen.pillar.1": "Envolvimento de todos os níveis",
    "kaizen.pillar.2": "Foco no processo, não nas pessoas",
    "kaizen.pillar.3": "Eliminação de desperdícios (Muda)",
    "kaizen.pillar.4": "Padronização das melhorias",
    "kaizen.pillar.5": "Medição e análise de dados",
    "kaizen.results.title": "Resultados Esperados",
    "kaizen.result.1": "Aumento gradual da qualidade",
    "kaizen.result.2": "Redução de custos operacionais",
    "kaizen.result.3": "Maior satisfação dos colaboradores",
    "kaizen.result.4": "Cultura de inovação e aprendizado",
    "kaizen.result.5": "Competitividade sustentável",
    
    // JIT
    "jit.title": "Just in Time",
    "jit.subtitle": "Produção Sincronizada com a Demanda",
    "jit.description": "Sistema revolucionário de produção que minimiza estoques, elimina desperdícios e otimiza recursos através da produção sincronizada com a demanda real, no momento exato e na quantidade necessária",
    "jit.backContent": "Just in Time (JIT) é um sistema de produção desenvolvido pela Toyota que revolucionou a manufatura mundial. O JIT produz apenas o necessário, no momento certo e na quantidade exata exigida pelo cliente, eliminando estoques excessivos, reduzindo custos operacionais e maximizando a eficiência. Baseado em conceitos como Takt Time, sistema puxado (pull) e os três zeros (Zero Estoque, Zero Defeitos, Zero Atrasos), o JIT cria operações enxutas e altamente responsivas.",
    "jit.objectives.title": "Objetivos Principais",
    "jit.zero.stock": "Zero Estoque",
    "jit.zero.stock.desc": "Minimizar custos com armazenagem",
    "jit.zero.defects": "Zero Defeitos",
    "jit.zero.defects.desc": "Qualidade na primeira vez",
    "jit.zero.delays": "Zero Atrasos",
    "jit.zero.delays.desc": "Entregas pontuais garantidas",
    "jit.elements.title": "Elementos Fundamentais",
    "jit.element.1.title": "Fluxo Contínuo",
    "jit.element.1.desc": "Produção fluida sem interrupções ou gargalos",
    "jit.element.2.title": "Sistema Puxado",
    "jit.element.2.desc": "Produção baseada na demanda real do cliente",
    "jit.element.3.title": "Takt Time",
    "jit.element.3.desc": "Ritmo de produção sincronizado com a demanda",
    "jit.element.4.title": "Redução de Setup",
    "jit.element.4.desc": "Minimizar tempo de preparação de máquinas",
    "jit.element.5.title": "Parcerias com Fornecedores",
    "jit.element.5.desc": "Entregas frequentes e confiáveis de materiais",
    "jit.benefits.title": "Benefícios do JIT",
    "jit.benefit.1": "Redução drástica de estoques",
    "jit.benefit.2": "Menor necessidade de espaço físico",
    "jit.benefit.3": "Redução de desperdícios",
    "jit.benefit.4": "Aumento da qualidade",
    "jit.benefit.5": "Maior flexibilidade produtiva",
    "jit.benefit.6": "Redução de custos operacionais",
    "jit.benefit.7": "Melhor fluxo de caixa",
    "jit.benefit.8": "Resposta rápida ao mercado",
    
    // Inventory Methods
    "inventory.title": "Métodos de Gestão de Estoque",
    "inventory.subtitle": "Entenda os principais métodos de controle de inventário",
    "fifo.title": "FIFO - First In, First Out",
    "fifo.description": "O método FIFO (Primeiro a Entrar, Primeiro a Sair) é uma técnica de gestão de estoque onde os produtos que chegam primeiro ao estoque são os primeiros a serem vendidos ou utilizados. Este método é ideal para produtos perecíveis e garante a rotatividade adequada do inventário.",
    "fifo.video": "Espaço para vídeo explicativo sobre FIFO",
    "lifo.title": "LIFO - Last In, First Out",
    "lifo.description": "O método LIFO (Último a Entrar, Primeiro a Sair) é uma técnica onde os produtos que chegam por último ao estoque são os primeiros a serem vendidos ou utilizados. Este método é menos comum e pode ser útil em contextos específicos de gestão financeira e tributária.",
    "lifo.video": "Espaço para vídeo explicativo sobre LIFO",
    "fefo.title": "FEFO - First Expired, First Out",
    "fefo.description": "O método FEFO (Primeiro a Vencer, Primeiro a Sair) é uma técnica de gestão focada na validade dos produtos. Os itens com data de vencimento mais próxima são priorizados, garantindo que nenhum produto expire no estoque. É essencial para indústrias farmacêuticas e alimentícias.",
    "fefo.video": "Espaço para vídeo explicativo sobre FEFO",
    
    // Quiz
    "quiz.title": "Teste Seus Conhecimentos",
    "quiz.subtitle": "Desafie-se com perguntas sobre as metodologias",
    
    // Footer
    "footer.tagline": "Excelência em Gestão Operacional",
    "footer.copyright": "© 2024 JAMLOG. Metodologias para resultados extraordinários.",
    
    // Common
    "common.learnMore": "Saiba mais",
    "translator.tooltip": "Traduzir página",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.methodologies": "Methodologies",
    "nav.about": "About Us",
    "nav.dashboards": "Dashboards",
    "nav.contact": "Contact",
    
    // Hero
    "hero.title": "Transform your operations with proven methodologies",
    "hero.subtitle": "Discover how 5S, Kanban, Kaizen and Just in Time can revolutionize your management",
    "hero.cta": "Explore Methodologies",
    
    // Sections
    "section.methodologies.title": "ESSENTIAL METHODOLOGIES",
    "section.methodologies.subtitle": "Explore the tools that drive operational efficiency",
    
    // 5S
    "5s.title": "5S",
    "5s.subtitle": "Sense of Utilization, Organization, Cleanliness, Standardization and Discipline",
    "5s.description": "Japanese methodology for organization, standardization and continuous improvement of the work environment, promoting efficiency and quality through five fundamental senses",
    "5s.backContent": "5S creates organized, safe and highly productive work environments through the systematic application of 5 Japanese senses: Seiri (Sort), Seiton (Set in Order), Seiso (Shine), Seiketsu (Standardize) and Shitsuke (Sustain). This methodology eliminates waste, optimizes processes and establishes a culture of operational excellence.",
    "5s.seiri": "Seiri (Sort)",
    "5s.seiri.desc": "Separate the necessary from the unnecessary, discarding what adds no value",
    "5s.seiton": "Seiton (Set in Order)",
    "5s.seiton.desc": "Organize and identify materials for easy location and access",
    "5s.seiso": "Seiso (Shine)",
    "5s.seiso.desc": "Keep the environment clean, identifying and eliminating sources of dirt",
    "5s.seiketsu": "Seiketsu (Standardize)",
    "5s.seiketsu.desc": "Create standards and procedures to maintain the previous 3S",
    "5s.shitsuke": "Shitsuke (Sustain)",
    "5s.shitsuke.desc": "Maintain discipline and commitment to established processes",
    "5s.benefits.title": "Benefits of 5S",
    "5s.benefits.1": "Reduction of waste and operational costs",
    "5s.benefits.2": "Increased productivity and efficiency",
    "5s.benefits.3": "Improved workplace safety",
    "5s.benefits.4": "More organized and pleasant environment",
    "5s.benefits.5": "Facilitates problem identification",
    
    // Kanban
    "kanban.title": "Kanban",
    "kanban.subtitle": "Visual Workflow Management System",
    "kanban.description": "Visual workflow management and production control system that uses cards and signals to optimize processes, reduce waste and increase operational efficiency",
    "kanban.backContent": "Kanban is a visual management system developed by Toyota that revolutionizes workflow control. Using cards, columns and visual signals, Kanban allows you to visualize the entire production process, limit work in progress (WIP), quickly identify bottlenecks and maximize efficiency through a continuous and optimized flow.",
    "kanban.todo": "To Do",
    "kanban.todo.desc": "Tasks awaiting start",
    "kanban.inprogress": "In Progress",
    "kanban.inprogress.desc": "Work in execution",
    "kanban.done": "Done",
    "kanban.done.desc": "Completed tasks",
    "kanban.principles": "Kanban Principles",
    "kanban.principle.1": "Visualize workflow to identify bottlenecks",
    "kanban.principle.2": "Limit work in progress (WIP) to avoid overload",
    "kanban.principle.3": "Manage and improve flow continuously",
    "kanban.principle.4": "Make process policies explicit",
    "kanban.principle.5": "Implement feedback loops",
    "kanban.principle.6": "Improve collaboratively using models and scientific methods",
    
    // Kaizen
    "kaizen.title": "Kaizen",
    "kaizen.subtitle": "Continuous Improvement as Work Philosophy",
    "kaizen.description": "Japanese philosophy of continuous improvement that transforms processes and results through constant small incremental changes, involving all organizational levels in the pursuit of excellence",
    "kaizen.backContent": "Kaizen, which means 'change for the better', is a powerful management philosophy that promotes continuous improvement through small incremental and constant changes. Involving all employees in the organization, Kaizen creates a sustainable culture of innovation, learning and improvement, using the PDCA cycle (Plan-Do-Check-Act) to implement improvements systematically and measurably.",
    "kaizen.pdca.title": "Kaizen PDCA Cycle",
    "kaizen.pdca.plan": "Plan",
    "kaizen.pdca.plan.desc": "Identify opportunities and plan changes",
    "kaizen.pdca.do": "Do",
    "kaizen.pdca.do.desc": "Implement changes on a small scale",
    "kaizen.pdca.check": "Check",
    "kaizen.pdca.check.desc": "Analyze results and identify learnings",
    "kaizen.pdca.act": "Act",
    "kaizen.pdca.act.desc": "Standardize improvements and identify new opportunities",
    "kaizen.pillars.title": "Kaizen Pillars",
    "kaizen.pillar.1": "Involvement of all levels",
    "kaizen.pillar.2": "Focus on process, not people",
    "kaizen.pillar.3": "Elimination of waste (Muda)",
    "kaizen.pillar.4": "Standardization of improvements",
    "kaizen.pillar.5": "Measurement and data analysis",
    "kaizen.results.title": "Expected Results",
    "kaizen.result.1": "Gradual increase in quality",
    "kaizen.result.2": "Reduction of operational costs",
    "kaizen.result.3": "Greater employee satisfaction",
    "kaizen.result.4": "Culture of innovation and learning",
    "kaizen.result.5": "Sustainable competitiveness",
    
    // JIT
    "jit.title": "Just in Time",
    "jit.subtitle": "Production Synchronized with Demand",
    "jit.description": "Revolutionary production system that minimizes inventory, eliminates waste and optimizes resources through production synchronized with real demand, at the exact time and in the necessary quantity",
    "jit.backContent": "Just in Time (JIT) is a production system developed by Toyota that revolutionized world manufacturing. JIT produces only what is necessary, at the right time and in the exact quantity required by the customer, eliminating excessive inventory, reducing operational costs and maximizing efficiency. Based on concepts such as Takt Time, pull system and the three zeros (Zero Inventory, Zero Defects, Zero Delays), JIT creates lean and highly responsive operations.",
    "jit.objectives.title": "Main Objectives",
    "jit.zero.stock": "Zero Inventory",
    "jit.zero.stock.desc": "Minimize storage costs",
    "jit.zero.defects": "Zero Defects",
    "jit.zero.defects.desc": "Quality the first time",
    "jit.zero.delays": "Zero Delays",
    "jit.zero.delays.desc": "Guaranteed on-time deliveries",
    "jit.elements.title": "Fundamental Elements",
    "jit.element.1.title": "Continuous Flow",
    "jit.element.1.desc": "Smooth production without interruptions or bottlenecks",
    "jit.element.2.title": "Pull System",
    "jit.element.2.desc": "Production based on actual customer demand",
    "jit.element.3.title": "Takt Time",
    "jit.element.3.desc": "Production rhythm synchronized with demand",
    "jit.element.4.title": "Setup Reduction",
    "jit.element.4.desc": "Minimize machine preparation time",
    "jit.element.5.title": "Supplier Partnerships",
    "jit.element.5.desc": "Frequent and reliable material deliveries",
    "jit.benefits.title": "JIT Benefits",
    "jit.benefit.1": "Drastic inventory reduction",
    "jit.benefit.2": "Less need for physical space",
    "jit.benefit.3": "Waste reduction",
    "jit.benefit.4": "Increased quality",
    "jit.benefit.5": "Greater production flexibility",
    "jit.benefit.6": "Reduction of operational costs",
    "jit.benefit.7": "Better cash flow",
    "jit.benefit.8": "Quick market response",
    
    // Inventory Methods
    "inventory.title": "Inventory Management Methods",
    "inventory.subtitle": "Understand the main inventory control methods",
    "fifo.title": "FIFO - First In, First Out",
    "fifo.description": "The FIFO method is an inventory management technique where products that arrive first in stock are the first to be sold or used. This method is ideal for perishable products and ensures proper inventory turnover.",
    "fifo.video": "Space for FIFO explanatory video",
    "lifo.title": "LIFO - Last In, First Out",
    "lifo.description": "The LIFO method is a technique where products that arrive last in stock are the first to be sold or used. This method is less common and may be useful in specific financial and tax management contexts.",
    "lifo.video": "Space for LIFO explanatory video",
    "fefo.title": "FEFO - First Expired, First Out",
    "fefo.description": "The FEFO method is a management technique focused on product validity. Items with the nearest expiration date are prioritized, ensuring no product expires in stock. Essential for pharmaceutical and food industries.",
    "fefo.video": "Space for FEFO explanatory video",
    
    // Quiz
    "quiz.title": "Test Your Knowledge",
    "quiz.subtitle": "Challenge yourself with questions about the methodologies",
    
    // Footer
    "footer.tagline": "Excellence in Operational Management",
    "footer.copyright": "© 2024 JAMLOG. Methodologies for extraordinary results.",
    
    // Common
    "common.learnMore": "Learn more",
    "translator.tooltip": "Translate page",
  },
  es: {
    // Navbar
    "nav.home": "Inicio",
    "nav.methodologies": "Metodologías",
    "nav.about": "Quiénes Somos",
    "nav.dashboards": "Dashboards",
    "nav.contact": "Contacto",
    
    // Hero
    "hero.title": "Transforma tu operación con metodologías comprobadas",
    "hero.subtitle": "Descubre cómo 5S, Kanban, Kaizen y Just in Time pueden revolucionar tu gestión",
    "hero.cta": "Explorar Metodologías",
    
    // Sections
    "section.methodologies.title": "METODOLOGÍAS ESENCIALES",
    "section.methodologies.subtitle": "Explora las herramientas que impulsan la eficiencia operacional",
    
    // 5S
    "5s.title": "5S",
    "5s.subtitle": "Sentido de Utilización, Organización, Limpieza, Estandarización y Disciplina",
    "5s.description": "Metodología japonesa para organización, estandarización y mejora continua del ambiente de trabajo, promoviendo eficiencia y calidad a través de cinco sentidos fundamentales",
    "5s.backContent": "El 5S crea ambientes de trabajo organizados, seguros y altamente productivos a través de la aplicación sistemática de 5 sentidos japoneses: Seiri (Clasificar), Seiton (Ordenar), Seiso (Limpiar), Seiketsu (Estandarizar) y Shitsuke (Sostener). Esta metodología elimina desperdicios, optimiza procesos y establece una cultura de excelencia operacional.",
    "5s.seiri": "Seiri (Clasificar)",
    "5s.seiri.desc": "Separar lo necesario de lo innecesario, descartando lo que no agrega valor",
    "5s.seiton": "Seiton (Ordenar)",
    "5s.seiton.desc": "Organizar e identificar materiales para fácil localización y acceso",
    "5s.seiso": "Seiso (Limpiar)",
    "5s.seiso.desc": "Mantener el ambiente limpio, identificando y eliminando fuentes de suciedad",
    "5s.seiketsu": "Seiketsu (Estandarizar)",
    "5s.seiketsu.desc": "Crear estándares y procedimientos para mantener los 3S anteriores",
    "5s.shitsuke": "Shitsuke (Sostener)",
    "5s.shitsuke.desc": "Mantener la disciplina y compromiso con los procesos establecidos",
    "5s.benefits.title": "Beneficios del 5S",
    "5s.benefits.1": "Reducción de desperdicios y costos operacionales",
    "5s.benefits.2": "Aumento de la productividad y eficiencia",
    "5s.benefits.3": "Mejora en la seguridad del trabajo",
    "5s.benefits.4": "Ambiente más organizado y agradable",
    "5s.benefits.5": "Facilita identificación de problemas",
    
    // Kanban
    "kanban.title": "Kanban",
    "kanban.subtitle": "Sistema Visual de Gestión de Flujo de Trabajo",
    "kanban.description": "Sistema visual de gestión de flujo de trabajo y control de producción que utiliza tarjetas y señalizaciones para optimizar procesos, reducir desperdicios y aumentar la eficiencia operacional",
    "kanban.backContent": "Kanban es un sistema de gestión visual desarrollado por Toyota que revoluciona el control de flujo de trabajo. Utilizando tarjetas, columnas y señalizaciones visuales, el Kanban permite visualizar todo el proceso productivo, limitar el trabajo en progreso (WIP), identificar cuellos de botella rápidamente y maximizar la eficiencia a través de un flujo continuo y optimizado.",
    "kanban.todo": "Por Hacer",
    "kanban.todo.desc": "Tareas esperando inicio",
    "kanban.inprogress": "En Progreso",
    "kanban.inprogress.desc": "Trabajo en ejecución",
    "kanban.done": "Hecho",
    "kanban.done.desc": "Tareas completadas",
    "kanban.principles": "Principios del Kanban",
    "kanban.principle.1": "Visualizar el flujo de trabajo para identificar cuellos de botella",
    "kanban.principle.2": "Limitar el trabajo en progreso (WIP) para evitar sobrecarga",
    "kanban.principle.3": "Gestionar y mejorar el flujo continuamente",
    "kanban.principle.4": "Hacer las políticas de proceso explícitas",
    "kanban.principle.5": "Implementar ciclos de feedback",
    "kanban.principle.6": "Mejorar colaborativamente usando modelos y métodos científicos",
    
    // Kaizen
    "kaizen.title": "Kaizen",
    "kaizen.subtitle": "Mejora Continua Como Filosofía de Trabajo",
    "kaizen.description": "Filosofía japonesa de mejora continua que transforma procesos y resultados a través de pequeños cambios incrementales constantes, involucrando todos los niveles organizacionales en la búsqueda de la excelencia",
    "kaizen.backContent": "Kaizen, que significa 'cambio para mejor', es una poderosa filosofía de gestión que promueve la mejora continua a través de pequeños cambios incrementales y constantes. Involucrando a todos los colaboradores de la organización, el Kaizen crea una cultura sostenible de innovación, aprendizaje y perfeccionamiento, utilizando el ciclo PDCA (Plan-Do-Check-Act) para implementar mejoras de forma sistemática y medible.",
    "kaizen.pdca.title": "Ciclo PDCA del Kaizen",
    "kaizen.pdca.plan": "Plan (Planificar)",
    "kaizen.pdca.plan.desc": "Identificar oportunidades y planificar cambios",
    "kaizen.pdca.do": "Do (Hacer)",
    "kaizen.pdca.do.desc": "Implementar los cambios en pequeña escala",
    "kaizen.pdca.check": "Check (Verificar)",
    "kaizen.pdca.check.desc": "Analizar los resultados e identificar aprendizajes",
    "kaizen.pdca.act": "Act (Actuar)",
    "kaizen.pdca.act.desc": "Estandarizar mejoras e identificar nuevas oportunidades",
    "kaizen.pillars.title": "Pilares del Kaizen",
    "kaizen.pillar.1": "Involucramiento de todos los niveles",
    "kaizen.pillar.2": "Enfoque en el proceso, no en las personas",
    "kaizen.pillar.3": "Eliminación de desperdicios (Muda)",
    "kaizen.pillar.4": "Estandarización de las mejoras",
    "kaizen.pillar.5": "Medición y análisis de datos",
    "kaizen.results.title": "Resultados Esperados",
    "kaizen.result.1": "Aumento gradual de la calidad",
    "kaizen.result.2": "Reducción de costos operacionales",
    "kaizen.result.3": "Mayor satisfacción de los colaboradores",
    "kaizen.result.4": "Cultura de innovación y aprendizaje",
    "kaizen.result.5": "Competitividad sostenible",
    
    // JIT
    "jit.title": "Just in Time",
    "jit.subtitle": "Producción Sincronizada con la Demanda",
    "jit.description": "Sistema revolucionario de producción que minimiza inventarios, elimina desperdicios y optimiza recursos a través de la producción sincronizada con la demanda real, en el momento exacto y en la cantidad necesaria",
    "jit.backContent": "Just in Time (JIT) es un sistema de producción desarrollado por Toyota que revolucionó la manufactura mundial. El JIT produce solo lo necesario, en el momento correcto y en la cantidad exacta exigida por el cliente, eliminando inventarios excesivos, reduciendo costos operacionales y maximizando la eficiencia. Basado en conceptos como Takt Time, sistema pull y los tres ceros (Cero Inventario, Cero Defectos, Cero Retrasos), el JIT crea operaciones esbeltas y altamente responsivas.",
    "jit.objectives.title": "Objetivos Principales",
    "jit.zero.stock": "Cero Inventario",
    "jit.zero.stock.desc": "Minimizar costos de almacenaje",
    "jit.zero.defects": "Cero Defectos",
    "jit.zero.defects.desc": "Calidad a la primera vez",
    "jit.zero.delays": "Cero Retrasos",
    "jit.zero.delays.desc": "Entregas puntuales garantizadas",
    "jit.elements.title": "Elementos Fundamentales",
    "jit.element.1.title": "Flujo Continuo",
    "jit.element.1.desc": "Producción fluida sin interrupciones o cuellos de botella",
    "jit.element.2.title": "Sistema Pull",
    "jit.element.2.desc": "Producción basada en la demanda real del cliente",
    "jit.element.3.title": "Takt Time",
    "jit.element.3.desc": "Ritmo de producción sincronizado con la demanda",
    "jit.element.4.title": "Reducción de Setup",
    "jit.element.4.desc": "Minimizar tiempo de preparación de máquinas",
    "jit.element.5.title": "Alianzas con Proveedores",
    "jit.element.5.desc": "Entregas frecuentes y confiables de materiales",
    "jit.benefits.title": "Beneficios del JIT",
    "jit.benefit.1": "Reducción drástica de inventarios",
    "jit.benefit.2": "Menor necesidad de espacio físico",
    "jit.benefit.3": "Reducción de desperdicios",
    "jit.benefit.4": "Aumento de la calidad",
    "jit.benefit.5": "Mayor flexibilidad productiva",
    "jit.benefit.6": "Reducción de costos operacionales",
    "jit.benefit.7": "Mejor flujo de caja",
    "jit.benefit.8": "Respuesta rápida al mercado",
    
    // Inventory Methods
    "inventory.title": "Métodos de Gestión de Inventario",
    "inventory.subtitle": "Entiende los principales métodos de control de inventario",
    "fifo.title": "FIFO - First In, First Out",
    "fifo.description": "El método FIFO (Primero en Entrar, Primero en Salir) es una técnica de gestión de inventario donde los productos que llegan primero al inventario son los primeros en venderse o utilizarse. Este método es ideal para productos perecederos y garantiza la rotación adecuada del inventario.",
    "fifo.video": "Espacio para video explicativo sobre FIFO",
    "lifo.title": "LIFO - Last In, First Out",
    "lifo.description": "El método LIFO (Último en Entrar, Primero en Salir) es una técnica donde los productos que llegan por último al inventario son los primeros en venderse o utilizarse. Este método es menos común y puede ser útil en contextos específicos de gestión financiera y tributaria.",
    "lifo.video": "Espacio para video explicativo sobre LIFO",
    "fefo.title": "FEFO - First Expired, First Out",
    "fefo.description": "El método FEFO (Primero en Vencer, Primero en Salir) es una técnica de gestión enfocada en la validez de los productos. Los artículos con fecha de vencimiento más próxima se priorizan, garantizando que ningún producto expire en el inventario. Es esencial para industrias farmacéuticas y alimenticias.",
    "fefo.video": "Espacio para video explicativo sobre FEFO",
    
    // Quiz
    "quiz.title": "Pon a Prueba tus Conocimientos",
    "quiz.subtitle": "Desafíate con preguntas sobre las metodologías",
    
    // Footer
    "footer.tagline": "Excelencia en Gestión Operacional",
    "footer.copyright": "© 2024 JAMLOG. Metodologías para resultados extraordinarios.",
    
    // Common
    "common.learnMore": "Saber más",
    "translator.tooltip": "Traducir página",
  },
  ja: {
    // Navbar
    "nav.home": "ホーム",
    "nav.methodologies": "方法論",
    "nav.about": "会社概要",
    "nav.dashboards": "ダッシュボード",
    "nav.contact": "お問い合わせ",
    
    // Hero
    "hero.title": "実証済みの方法論で業務を変革",
    "hero.subtitle": "5S、カンバン、カイゼン、ジャストインタイムがあなたの管理をどう革新するか発見してください",
    "hero.cta": "方法論を探る",
    
    // Sections
    "section.methodologies.title": "重要な方法論",
    "section.methodologies.subtitle": "運用効率を推進するツールを探る",
    
    // 5S
    "5s.title": "5S",
    "5s.subtitle": "整理、整頓、清掃、清潔、躾",
    "5s.description": "5つの基本的なセンスを通じて効率と品質を促進する、職場環境の組織化、標準化、継続的改善のための日本の方法論",
    "5s.backContent": "5Sは、日本の5つのセンス（整理、整頓、清掃、清潔、躾）の体系的な適用を通じて、組織化され、安全で、生産性の高い職場環境を作ります。この方法論は無駄を排除し、プロセスを最適化し、運用卓越性の文化を確立します。",
    "5s.seiri": "整理（Seiri）",
    "5s.seiri.desc": "必要なものと不要なものを分け、価値のないものを廃棄",
    "5s.seiton": "整頓（Seiton）",
    "5s.seiton.desc": "材料を整理し、簡単に見つけてアクセスできるように識別",
    "5s.seiso": "清掃（Seiso）",
    "5s.seiso.desc": "環境を清潔に保ち、汚れの原因を特定して除去",
    "5s.seiketsu": "清潔（Seiketsu）",
    "5s.seiketsu.desc": "前の3Sを維持するための基準と手順を作成",
    "5s.shitsuke": "躾（Shitsuke）",
    "5s.shitsuke.desc": "確立されたプロセスへの規律とコミットメントを維持",
    "5s.benefits.title": "5Sの利点",
    "5s.benefits.1": "無駄と運用コストの削減",
    "5s.benefits.2": "生産性と効率の向上",
    "5s.benefits.3": "職場の安全性の向上",
    "5s.benefits.4": "より整理された快適な環境",
    "5s.benefits.5": "問題の特定を容易に",
    
    // Kanban
    "kanban.title": "カンバン",
    "kanban.subtitle": "視覚的なワークフロー管理システム",
    "kanban.description": "カードと信号を使用してプロセスを最適化し、無駄を削減し、運用効率を向上させる視覚的なワークフロー管理および生産管理システム",
    "kanban.backContent": "カンバンは、ワークフロー管理に革命をもたらしたトヨタが開発した視覚的管理システムです。カード、列、視覚的な信号を使用して、カンバンは生産プロセス全体を視覚化し、進行中の作業（WIP）を制限し、ボトルネックを迅速に特定し、継続的で最適化されたフローを通じて効率を最大化することができます。",
    "kanban.todo": "やること",
    "kanban.todo.desc": "開始待ちのタスク",
    "kanban.inprogress": "進行中",
    "kanban.inprogress.desc": "実行中の作業",
    "kanban.done": "完了",
    "kanban.done.desc": "完了したタスク",
    "kanban.principles": "カンバンの原則",
    "kanban.principle.1": "ボトルネックを特定するためにワークフローを視覚化",
    "kanban.principle.2": "過負荷を避けるために進行中の作業（WIP）を制限",
    "kanban.principle.3": "フローを継続的に管理し改善",
    "kanban.principle.4": "プロセスポリシーを明示化",
    "kanban.principle.5": "フィードバックループを実装",
    "kanban.principle.6": "モデルと科学的方法を使用して協力的に改善",
    
    // Kaizen
    "kaizen.title": "カイゼン",
    "kaizen.subtitle": "仕事の哲学としての継続的改善",
    "kaizen.description": "卓越性を追求する中で、すべての組織レベルを巻き込みながら、小さな継続的な増分変更を通じてプロセスと結果を変革する継続的改善の日本の哲学",
    "kaizen.backContent": "カイゼンは「より良い変化」を意味し、小さな増分的で継続的な変更を通じて継続的改善を促進する強力な経営哲学です。組織のすべての従業員を巻き込み、カイゼンはイノベーション、学習、改善の持続可能な文化を作り、PDCAサイクル（Plan-Do-Check-Act）を使用して体系的かつ測定可能な方法で改善を実装します。",
    "kaizen.pdca.title": "カイゼンPDCAサイクル",
    "kaizen.pdca.plan": "Plan（計画）",
    "kaizen.pdca.plan.desc": "機会を特定し変更を計画",
    "kaizen.pdca.do": "Do（実行）",
    "kaizen.pdca.do.desc": "小規模で変更を実装",
    "kaizen.pdca.check": "Check（確認）",
    "kaizen.pdca.check.desc": "結果を分析し学びを特定",
    "kaizen.pdca.act": "Act（改善）",
    "kaizen.pdca.act.desc": "改善を標準化し新しい機会を特定",
    "kaizen.pillars.title": "カイゼンの柱",
    "kaizen.pillar.1": "すべてのレベルの関与",
    "kaizen.pillar.2": "人ではなくプロセスに焦点",
    "kaizen.pillar.3": "無駄（ムダ）の排除",
    "kaizen.pillar.4": "改善の標準化",
    "kaizen.pillar.5": "測定とデータ分析",
    "kaizen.results.title": "期待される結果",
    "kaizen.result.1": "品質の段階的向上",
    "kaizen.result.2": "運用コストの削減",
    "kaizen.result.3": "従業員満足度の向上",
    "kaizen.result.4": "イノベーションと学習の文化",
    "kaizen.result.5": "持続可能な競争力",
    
    // JIT
    "jit.title": "ジャストインタイム",
    "jit.subtitle": "需要と同期した生産",
    "jit.description": "実際の需要と同期し、正確な時間に必要な量を生産することで、在庫を最小化し、無駄を排除し、リソースを最適化する革命的な生産システム",
    "jit.backContent": "ジャストインタイム（JIT）は、世界の製造業に革命をもたらしたトヨタが開発した生産システムです。JITは必要なものだけを、適切なタイミングで、顧客が要求する正確な量で生産し、過剰在庫を排除し、運用コストを削減し、効率を最大化します。タクトタイム、プルシステム、3つのゼロ（ゼロ在庫、ゼロ欠陥、ゼロ遅延）などの概念に基づいて、JITはリーンで応答性の高いオペレーションを作成します。",
    "jit.objectives.title": "主な目標",
    "jit.zero.stock": "ゼロ在庫",
    "jit.zero.stock.desc": "保管コストを最小化",
    "jit.zero.defects": "ゼロ欠陥",
    "jit.zero.defects.desc": "最初から品質を",
    "jit.zero.delays": "ゼロ遅延",
    "jit.zero.delays.desc": "時間通りの納品を保証",
    "jit.elements.title": "基本的な要素",
    "jit.element.1.title": "連続フロー",
    "jit.element.1.desc": "中断やボトルネックのないスムーズな生産",
    "jit.element.2.title": "プルシステム",
    "jit.element.2.desc": "実際の顧客需要に基づく生産",
    "jit.element.3.title": "タクトタイム",
    "jit.element.3.desc": "需要と同期した生産リズム",
    "jit.element.4.title": "セットアップ削減",
    "jit.element.4.desc": "機械準備時間を最小化",
    "jit.element.5.title": "サプライヤーパートナーシップ",
    "jit.element.5.desc": "頻繁で信頼性の高い材料配送",
    "jit.benefits.title": "JITの利点",
    "jit.benefit.1": "在庫の大幅削減",
    "jit.benefit.2": "物理的スペースの必要性減少",
    "jit.benefit.3": "無駄の削減",
    "jit.benefit.4": "品質の向上",
    "jit.benefit.5": "生産柔軟性の向上",
    "jit.benefit.6": "運用コストの削減",
    "jit.benefit.7": "キャッシュフローの改善",
    "jit.benefit.8": "市場への迅速な対応",
    
    // Inventory Methods
    "inventory.title": "在庫管理方法",
    "inventory.subtitle": "主な在庫管理方法を理解する",
    "fifo.title": "FIFO - 先入先出",
    "fifo.description": "FIFO方式は、最初に在庫に入った製品が最初に販売または使用される在庫管理技術です。この方法は腐敗しやすい製品に最適で、適切な在庫回転を保証します。",
    "fifo.video": "FIFO説明ビデオ用スペース",
    "lifo.title": "LIFO - 後入先出",
    "lifo.description": "LIFO方式は、最後に在庫に入った製品が最初に販売または使用される技術です。この方法はあまり一般的ではなく、特定の財務および税務管理の状況で役立つ場合があります。",
    "lifo.video": "LIFO説明ビデオ用スペース",
    "fefo.title": "FEFO - 先期限先出",
    "fefo.description": "FEFO方式は、製品の有効期限に焦点を当てた管理技術です。有効期限が最も近いアイテムが優先され、在庫で製品が期限切れにならないようにします。製薬および食品業界に不可欠です。",
    "fefo.video": "FEFO説明ビデオ用スペース",
    
    // Quiz
    "quiz.title": "知識をテスト",
    "quiz.subtitle": "方法論に関する質問に挑戦",
    
    // Footer
    "footer.tagline": "運用管理の卓越性",
    "footer.copyright": "© 2024 JAMLOG. 卓越した結果のための方法論。",
    
    // Common
    "common.learnMore": "詳しく見る",
    "translator.tooltip": "ページを翻訳",
  },
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("pt");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
