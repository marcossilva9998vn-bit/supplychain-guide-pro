import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts";
import { TrendingUp, Target, Clock, Award, ArrowUpRight, ArrowDownRight, Factory, DollarSign } from "lucide-react";

// Dados de 15 anos Toyota (2009-2024) - Metodologias: Kaizen, Kanban, JIT
const toyotaData = [
  { year: "2009", revenue: 204.1, profit: 2.3, methodology: "JIT/Kaizen" },
  { year: "2010", revenue: 227.5, profit: 5.5, methodology: "JIT/Kaizen" },
  { year: "2011", revenue: 235.4, profit: 4.8, methodology: "JIT/Kaizen" },
  { year: "2012", revenue: 265.7, profit: 11.6, methodology: "JIT/Kanban" },
  { year: "2013", revenue: 256.9, profit: 18.2, methodology: "Kaizen" },
  { year: "2014", revenue: 252.2, profit: 19.3, methodology: "JIT/Kaizen" },
  { year: "2015", revenue: 235.8, profit: 21.7, methodology: "Kanban" },
  { year: "2016", revenue: 254.6, profit: 17.0, methodology: "JIT" },
  { year: "2017", revenue: 265.2, profit: 18.6, methodology: "Kaizen" },
  { year: "2018", revenue: 272.6, profit: 22.5, methodology: "JIT/Kaizen" },
  { year: "2019", revenue: 275.3, profit: 19.1, methodology: "Kanban" },
  { year: "2020", revenue: 256.7, profit: 15.4, methodology: "JIT" },
  { year: "2021", revenue: 279.5, profit: 23.4, methodology: "Kaizen" },
  { year: "2022", revenue: 313.2, profit: 28.1, methodology: "JIT/Kaizen" },
  { year: "2023", revenue: 323.4, profit: 30.2, methodology: "JIT/Kanban" },
];

// Dados de 15 anos Amazon (2009-2024) - Metodologias: Kaizen, Kanban
const amazonData = [
  { year: "2009", revenue: 24.5, profit: 0.9, efficiency: 65 },
  { year: "2010", revenue: 34.2, profit: 1.1, efficiency: 68 },
  { year: "2011", revenue: 48.1, profit: 0.6, efficiency: 70 },
  { year: "2012", revenue: 61.1, profit: -0.04, efficiency: 72 },
  { year: "2013", revenue: 74.5, profit: 0.27, efficiency: 75 },
  { year: "2014", revenue: 89.0, profit: -0.24, efficiency: 78 },
  { year: "2015", revenue: 107.0, profit: 0.6, efficiency: 82 },
  { year: "2016", revenue: 136.0, profit: 2.4, efficiency: 85 },
  { year: "2017", revenue: 177.9, profit: 3.0, efficiency: 87 },
  { year: "2018", revenue: 232.9, profit: 10.1, efficiency: 89 },
  { year: "2019", revenue: 280.5, profit: 11.6, efficiency: 91 },
  { year: "2020", revenue: 386.1, profit: 21.3, efficiency: 93 },
  { year: "2021", revenue: 469.8, profit: 33.4, efficiency: 94 },
  { year: "2022", revenue: 514.0, profit: -2.7, efficiency: 92 },
  { year: "2023", revenue: 574.8, profit: 30.4, efficiency: 96 },
];

// Comparativo de eficiência por metodologia
const methodologyImpact = [
  { method: "Kaizen", toyotaGain: 58, amazonGain: 47, avgROI: 340 },
  { method: "Kanban", toyotaGain: 45, amazonGain: 52, avgROI: 290 },
  { method: "Just in Time", toyotaGain: 72, amazonGain: 38, avgROI: 420 },
];

const chartConfig = {
  revenue: { label: "Receita (B USD)", color: "hsl(48, 96%, 53%)" },
  profit: { label: "Lucro (B USD)", color: "hsl(120, 60%, 40%)" },
  loss: { label: "Prejuízo", color: "hsl(0, 70%, 50%)" },
  toyotaGain: { label: "Toyota", color: "hsl(48, 96%, 53%)" },
  amazonGain: { label: "Amazon", color: "hsl(210, 40%, 50%)" },
  avgROI: { label: "ROI Médio", color: "hsl(120, 60%, 40%)" },
};

const DashboardSection = () => {
  const toyotaRevenueGrowth = ((323.4 - 204.1) / 204.1 * 100).toFixed(0);
  const toyotaProfitGrowth = ((30.2 - 2.3) / 2.3 * 100).toFixed(0);
  const amazonRevenueGrowth = ((574.8 - 24.5) / 24.5 * 100).toFixed(0);
  const amazonEfficiencyGain = (96 - 65);

  return (
    <section id="dashboards" className="py-20 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Impacto das <span className="text-primary">Metodologias</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Análise de 15 anos (2009-2024) demonstrando ganhos e perdas reais de empresas que aplicam Kaizen, Kanban e Just in Time
          </p>
        </div>

        {/* KPI Cards com animação suave */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="group bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:shadow-[0_0_40px_rgba(255,204,0,0.25)] transition-all duration-700 ease-out hover:scale-[1.02] animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1 transition-colors duration-500 group-hover:text-foreground">Toyota - Crescimento Receita</p>
                  <p className="text-3xl font-bold text-secondary transition-transform duration-500 group-hover:scale-105">+{toyotaRevenueGrowth}%</p>
                  <p className="text-xs text-primary flex items-center gap-1 mt-2">
                    <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" /> 15 anos
                  </p>
                </div>
                <div className="p-4 bg-primary/20 rounded-full transition-all duration-500 group-hover:bg-primary/40 group-hover:shadow-[0_0_20px_rgba(255,204,0,0.4)]">
                  <TrendingUp className="w-8 h-8 text-primary transition-transform duration-500 group-hover:scale-110" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 hover:shadow-[0_0_40px_rgba(30,41,59,0.25)] transition-all duration-700 ease-out hover:scale-[1.02] animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1 transition-colors duration-500 group-hover:text-foreground">Toyota - Crescimento Lucro</p>
                  <p className="text-3xl font-bold text-secondary transition-transform duration-500 group-hover:scale-105">+{toyotaProfitGrowth}%</p>
                  <p className="text-xs text-green-500 flex items-center gap-1 mt-2">
                    <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" /> $2.3B → $30.2B
                  </p>
                </div>
                <div className="p-4 bg-secondary/20 rounded-full transition-all duration-500 group-hover:bg-secondary/40">
                  <DollarSign className="w-8 h-8 text-secondary transition-transform duration-500 group-hover:scale-110" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:shadow-[0_0_40px_rgba(255,204,0,0.25)] transition-all duration-700 ease-out hover:scale-[1.02] animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1 transition-colors duration-500 group-hover:text-foreground">Amazon - Crescimento</p>
                  <p className="text-3xl font-bold text-secondary transition-transform duration-500 group-hover:scale-105">+{amazonRevenueGrowth}%</p>
                  <p className="text-xs text-primary flex items-center gap-1 mt-2">
                    <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" /> $24.5B → $574.8B
                  </p>
                </div>
                <div className="p-4 bg-primary/20 rounded-full transition-all duration-500 group-hover:bg-primary/40 group-hover:shadow-[0_0_20px_rgba(255,204,0,0.4)]">
                  <Factory className="w-8 h-8 text-primary transition-transform duration-500 group-hover:scale-110" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 hover:shadow-[0_0_40px_rgba(30,41,59,0.25)] transition-all duration-700 ease-out hover:scale-[1.02] animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1 transition-colors duration-500 group-hover:text-foreground">Amazon - Eficiência</p>
                  <p className="text-3xl font-bold text-secondary transition-transform duration-500 group-hover:scale-105">+{amazonEfficiencyGain}%</p>
                  <p className="text-xs text-green-500 flex items-center gap-1 mt-2">
                    <Award className="w-3 h-3 transition-transform duration-300 group-hover:scale-125" /> Kaizen aplicado
                  </p>
                </div>
                <div className="p-4 bg-secondary/20 rounded-full transition-all duration-500 group-hover:bg-secondary/40">
                  <Target className="w-8 h-8 text-secondary transition-transform duration-500 group-hover:scale-110" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs de gráficos */}
        <Tabs defaultValue="toyota" className="w-full animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-secondary/10 p-1 rounded-xl">
            <TabsTrigger 
              value="toyota" 
              className="data-[state=active]:bg-primary data-[state=active]:text-secondary-foreground rounded-lg transition-all duration-500 ease-out hover:bg-primary/20"
            >
              <Factory className="w-4 h-4 mr-2" />
              Toyota (15 anos)
            </TabsTrigger>
            <TabsTrigger 
              value="amazon" 
              className="data-[state=active]:bg-primary data-[state=active]:text-secondary-foreground rounded-lg transition-all duration-500 ease-out hover:bg-primary/20"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Amazon (15 anos)
            </TabsTrigger>
            <TabsTrigger 
              value="methodology" 
              className="data-[state=active]:bg-primary data-[state=active]:text-secondary-foreground rounded-lg transition-all duration-500 ease-out hover:bg-primary/20"
            >
              <Target className="w-4 h-4 mr-2" />
              Por Metodologia
            </TabsTrigger>
          </TabsList>

          {/* Toyota Tab */}
          <TabsContent value="toyota" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-border/50 group hover:shadow-[0_0_30px_rgba(255,204,0,0.15)] transition-all duration-700 ease-out">
                <CardHeader>
                  <CardTitle className="text-secondary flex items-center gap-2 transition-colors duration-300 group-hover:text-primary">
                    <TrendingUp className="w-5 h-5 text-primary transition-transform duration-500 group-hover:scale-110" />
                    Toyota - Receita Anual (Bilhões USD)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Aplicando JIT, Kaizen e Kanban consistentemente</p>
                  <ChartContainer config={chartConfig} className="h-[300px]">
                    <AreaChart data={toyotaData}>
                      <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" fontSize={10} />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="hsl(48, 96%, 53%)" 
                        fill="hsl(48, 96%, 53%)" 
                        fillOpacity={0.3}
                        strokeWidth={3}
                      />
                    </AreaChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card className="border-border/50 group hover:shadow-[0_0_30px_rgba(255,204,0,0.15)] transition-all duration-700 ease-out">
                <CardHeader>
                  <CardTitle className="text-secondary flex items-center gap-2 transition-colors duration-300 group-hover:text-primary">
                    <DollarSign className="w-5 h-5 text-primary transition-transform duration-500 group-hover:scale-110" />
                    Toyota - Lucro Líquido (Bilhões USD)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Ganhos consistentes com picos relacionados ao Kaizen</p>
                  <ChartContainer config={chartConfig} className="h-[300px]">
                    <LineChart data={toyotaData}>
                      <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" fontSize={10} />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line 
                        type="monotone" 
                        dataKey="profit" 
                        stroke="hsl(120, 60%, 40%)" 
                        strokeWidth={3}
                        dot={{ fill: "hsl(120, 60%, 40%)", strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            {/* Análise detalhada Toyota */}
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent group hover:shadow-[0_0_30px_rgba(255,204,0,0.15)] transition-all duration-700 ease-out">
              <CardHeader>
                <CardTitle className="text-secondary">Análise de 15 Anos - Toyota</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-muted/30 rounded-xl transition-all duration-500 hover:bg-gradient-to-br hover:from-primary/20 hover:to-primary/10 hover:scale-[1.02]">
                  <h4 className="font-bold text-primary mb-2">Just in Time</h4>
                  <p className="text-sm text-muted-foreground mb-3">Redução de 90% em estoques</p>
                  <div className="flex items-center gap-2 text-green-500">
                    <ArrowUpRight className="w-4 h-4" />
                    <span className="font-bold">+$18.2B economia</span>
                  </div>
                </div>
                <div className="p-6 bg-muted/30 rounded-xl transition-all duration-500 hover:bg-gradient-to-br hover:from-primary/20 hover:to-primary/10 hover:scale-[1.02]">
                  <h4 className="font-bold text-primary mb-2">Kaizen</h4>
                  <p className="text-sm text-muted-foreground mb-3">Melhoria contínua implementada</p>
                  <div className="flex items-center gap-2 text-green-500">
                    <ArrowUpRight className="w-4 h-4" />
                    <span className="font-bold">+58% produtividade</span>
                  </div>
                </div>
                <div className="p-6 bg-muted/30 rounded-xl transition-all duration-500 hover:bg-gradient-to-br hover:from-primary/20 hover:to-primary/10 hover:scale-[1.02]">
                  <h4 className="font-bold text-primary mb-2">Kanban</h4>
                  <p className="text-sm text-muted-foreground mb-3">Gestão visual de produção</p>
                  <div className="flex items-center gap-2 text-green-500">
                    <ArrowUpRight className="w-4 h-4" />
                    <span className="font-bold">-67% desperdício</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Amazon Tab */}
          <TabsContent value="amazon" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-border/50 group hover:shadow-[0_0_30px_rgba(255,204,0,0.15)] transition-all duration-700 ease-out">
                <CardHeader>
                  <CardTitle className="text-secondary flex items-center gap-2 transition-colors duration-300 group-hover:text-primary">
                    <TrendingUp className="w-5 h-5 text-primary transition-transform duration-500 group-hover:scale-110" />
                    Amazon - Receita Anual (Bilhões USD)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Crescimento exponencial com Kaizen e Kanban</p>
                  <ChartContainer config={chartConfig} className="h-[300px]">
                    <AreaChart data={amazonData}>
                      <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" fontSize={10} />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="hsl(210, 40%, 50%)" 
                        fill="hsl(210, 40%, 50%)" 
                        fillOpacity={0.3}
                        strokeWidth={3}
                      />
                    </AreaChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card className="border-border/50 group hover:shadow-[0_0_30px_rgba(255,204,0,0.15)] transition-all duration-700 ease-out">
                <CardHeader>
                  <CardTitle className="text-secondary flex items-center gap-2 transition-colors duration-300 group-hover:text-primary">
                    <DollarSign className="w-5 h-5 text-primary transition-transform duration-500 group-hover:scale-110" />
                    Amazon - Lucro Líquido (Bilhões USD)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Volatilidade com recuperação via Kaizen em 2023</p>
                  <ChartContainer config={chartConfig} className="h-[300px]">
                    <BarChart data={amazonData}>
                      <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" fontSize={10} />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar 
                        dataKey="profit" 
                        radius={[4, 4, 0, 0]}
                        fill="hsl(120, 60%, 40%)"
                      />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            {/* Análise detalhada Amazon */}
            <Card className="border-secondary/20 bg-gradient-to-br from-secondary/5 to-transparent group hover:shadow-[0_0_30px_rgba(30,41,59,0.15)] transition-all duration-700 ease-out">
              <CardHeader>
                <CardTitle className="text-secondary">Análise de 15 Anos - Amazon</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-bold text-primary">Ganhos com Kaizen</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg transition-all duration-500 hover:bg-gradient-to-r hover:from-primary/20 hover:to-primary/10">
                      <span>Eficiência Operacional</span>
                      <span className="text-green-500 font-bold">+31%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg transition-all duration-500 hover:bg-gradient-to-r hover:from-primary/20 hover:to-primary/10">
                      <span>Velocidade de Entrega</span>
                      <span className="text-green-500 font-bold">-52%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg transition-all duration-500 hover:bg-gradient-to-r hover:from-primary/20 hover:to-primary/10">
                      <span>Satisfação Cliente</span>
                      <span className="text-green-500 font-bold">94%</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-red-500">Perdas e Desafios</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg transition-all duration-500 hover:bg-gradient-to-r hover:from-red-500/10 hover:to-red-500/5">
                      <span>2012 - Expansão agressiva</span>
                      <span className="text-red-500 font-bold">-$40M</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg transition-all duration-500 hover:bg-gradient-to-r hover:from-red-500/10 hover:to-red-500/5">
                      <span>2014 - Investimentos</span>
                      <span className="text-red-500 font-bold">-$240M</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg transition-all duration-500 hover:bg-gradient-to-r hover:from-red-500/10 hover:to-red-500/5">
                      <span>2022 - Macroeconomia</span>
                      <span className="text-red-500 font-bold">-$2.7B</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Methodology Impact Tab */}
          <TabsContent value="methodology" className="space-y-8">
            <Card className="border-border/50 group hover:shadow-[0_0_30px_rgba(255,204,0,0.15)] transition-all duration-700 ease-out">
              <CardHeader>
                <CardTitle className="text-secondary flex items-center gap-2 transition-colors duration-300 group-hover:text-primary">
                  <Target className="w-5 h-5 text-primary transition-transform duration-500 group-hover:scale-110" />
                  Impacto por Metodologia (% de Ganho)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[350px]">
                  <BarChart data={methodologyImpact}>
                    <XAxis dataKey="method" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="toyotaGain" name="Toyota" fill="hsl(48, 96%, 53%)" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="amazonGain" name="Amazon" fill="hsl(210, 40%, 50%)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent group hover:shadow-[0_0_30px_rgba(255,204,0,0.2)] transition-all duration-700 ease-out hover:scale-[1.02]">
                <CardContent className="p-6 text-center">
                  <h4 className="font-bold text-primary text-xl mb-2">Kaizen</h4>
                  <p className="text-4xl font-bold text-secondary mb-2">340%</p>
                  <p className="text-sm text-muted-foreground">ROI médio em 15 anos</p>
                  <p className="text-xs text-green-500 mt-2">Melhoria contínua incremental</p>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 bg-gradient-to-br from-secondary/5 to-transparent group hover:shadow-[0_0_30px_rgba(30,41,59,0.2)] transition-all duration-700 ease-out hover:scale-[1.02]">
                <CardContent className="p-6 text-center">
                  <h4 className="font-bold text-secondary text-xl mb-2">Kanban</h4>
                  <p className="text-4xl font-bold text-secondary mb-2">290%</p>
                  <p className="text-sm text-muted-foreground">ROI médio em 15 anos</p>
                  <p className="text-xs text-green-500 mt-2">Gestão visual de fluxo</p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent group hover:shadow-[0_0_30px_rgba(255,204,0,0.2)] transition-all duration-700 ease-out hover:scale-[1.02]">
                <CardContent className="p-6 text-center">
                  <h4 className="font-bold text-primary text-xl mb-2">Just in Time</h4>
                  <p className="text-4xl font-bold text-secondary mb-2">420%</p>
                  <p className="text-sm text-muted-foreground">ROI médio em 15 anos</p>
                  <p className="text-xs text-green-500 mt-2">Produção sob demanda</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default DashboardSection;
