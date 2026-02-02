import Navbar from "@/components/Navbar";
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
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import { TrendingUp, Target, Clock, Award, ArrowUpRight, Factory, Users, BarChart3 } from "lucide-react";

// Dados de crescimento por metodologia
const growthData = [
  { month: "Jan", "5S": 15, Kanban: 12, Kaizen: 18, JIT: 10 },
  { month: "Fev", "5S": 22, Kanban: 19, Kaizen: 25, JIT: 16 },
  { month: "Mar", "5S": 28, Kanban: 25, Kaizen: 32, JIT: 22 },
  { month: "Abr", "5S": 35, Kanban: 33, Kaizen: 40, JIT: 30 },
  { month: "Mai", "5S": 42, Kanban: 40, Kaizen: 48, JIT: 38 },
  { month: "Jun", "5S": 50, Kanban: 48, Kaizen: 55, JIT: 45 },
];

const productivityData = [
  { name: "5S", value: 35, fill: "hsl(48, 100%, 50%)" },
  { name: "Kanban", value: 28, fill: "hsl(280, 85%, 55%)" },
  { name: "Kaizen", value: 22, fill: "hsl(160, 80%, 45%)" },
  { name: "Just in Time", value: 15, fill: "hsl(340, 85%, 55%)" },
];

const efficiencyData = [
  { subject: "Produtividade", A: 120, B: 80, fullMark: 150 },
  { subject: "Qualidade", A: 98, B: 65, fullMark: 150 },
  { subject: "Eficiência", A: 86, B: 60, fullMark: 150 },
  { subject: "Satisfação", A: 99, B: 70, fullMark: 150 },
  { subject: "Economia", A: 85, B: 55, fullMark: 150 },
  { subject: "Inovação", A: 65, B: 45, fullMark: 150 },
];

const wasteReductionData = [
  { year: "2020", Antes: 100, Depois: 85 },
  { year: "2021", Antes: 85, Depois: 65 },
  { year: "2022", Antes: 65, Depois: 45 },
  { year: "2023", Antes: 45, Depois: 28 },
  { year: "2024", Antes: 28, Depois: 15 },
];

const industryAdoptionData = [
  { industry: "Manufatura", adoption: 85 },
  { industry: "Logística", adoption: 78 },
  { industry: "Saúde", adoption: 62 },
  { industry: "Tecnologia", adoption: 71 },
  { industry: "Varejo", adoption: 55 },
  { industry: "Serviços", adoption: 48 },
];

const roiData = [
  { method: "5S", roi: 320, investment: 100 },
  { method: "Kanban", roi: 280, investment: 100 },
  { method: "Kaizen", roi: 350, investment: 100 },
  { method: "JIT", roi: 400, investment: 100 },
];

const chartConfig = {
  "5S": { label: "5S", color: "hsl(48, 96%, 53%)" },
  Kanban: { label: "Kanban", color: "hsl(210, 40%, 30%)" },
  Kaizen: { label: "Kaizen", color: "hsl(48, 96%, 40%)" },
  JIT: { label: "Just in Time", color: "hsl(210, 40%, 50%)" },
  Antes: { label: "Antes", color: "hsl(0, 70%, 50%)" },
  Depois: { label: "Depois", color: "hsl(120, 60%, 40%)" },
  A: { label: "Com Metodologias", color: "hsl(48, 96%, 53%)" },
  B: { label: "Sem Metodologias", color: "hsl(210, 40%, 50%)" },
};

const Dashboards = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-secondary/20 via-background to-primary/5">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Dashboards de <span className="text-primary">Crescimento</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visualize como as metodologias de gestão empresarial proporcionam 
            crescimento evidente e transformam organizações.
          </p>
        </div>
      </section>

      {/* KPI Cards */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:shadow-[0_0_30px_rgba(255,204,0,0.2)] transition-all duration-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Aumento de Produtividade</p>
                    <p className="text-3xl font-bold text-secondary">+45%</p>
                    <p className="text-xs text-primary flex items-center gap-1 mt-2">
                      <ArrowUpRight className="w-3 h-3" /> +12% este mês
                    </p>
                  </div>
                  <div className="p-4 bg-primary/20 rounded-full">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 hover:shadow-[0_0_30px_rgba(30,41,59,0.2)] transition-all duration-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Redução de Desperdício</p>
                    <p className="text-3xl font-bold text-secondary">-67%</p>
                    <p className="text-xs text-green-500 flex items-center gap-1 mt-2">
                      <ArrowUpRight className="w-3 h-3" /> -8% este mês
                    </p>
                  </div>
                  <div className="p-4 bg-secondary/20 rounded-full">
                    <Target className="w-8 h-8 text-secondary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:shadow-[0_0_30px_rgba(255,204,0,0.2)] transition-all duration-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Tempo de Entrega</p>
                    <p className="text-3xl font-bold text-secondary">-52%</p>
                    <p className="text-xs text-primary flex items-center gap-1 mt-2">
                      <Clock className="w-3 h-3" /> Média: 2.3 dias
                    </p>
                  </div>
                  <div className="p-4 bg-primary/20 rounded-full">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 hover:shadow-[0_0_30px_rgba(30,41,59,0.2)] transition-all duration-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Satisfação do Cliente</p>
                    <p className="text-3xl font-bold text-secondary">94%</p>
                    <p className="text-xs text-green-500 flex items-center gap-1 mt-2">
                      <Award className="w-3 h-3" /> NPS: 72
                    </p>
                  </div>
                  <div className="p-4 bg-secondary/20 rounded-full">
                    <Award className="w-8 h-8 text-secondary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto">
          <Tabs defaultValue="growth" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-secondary/10">
              <TabsTrigger value="growth" className="data-[state=active]:bg-primary data-[state=active]:text-secondary-foreground">
                <TrendingUp className="w-4 h-4 mr-2" />
                Crescimento
              </TabsTrigger>
              <TabsTrigger value="efficiency" className="data-[state=active]:bg-primary data-[state=active]:text-secondary-foreground">
                <BarChart3 className="w-4 h-4 mr-2" />
                Eficiência
              </TabsTrigger>
              <TabsTrigger value="adoption" className="data-[state=active]:bg-primary data-[state=active]:text-secondary-foreground">
                <Factory className="w-4 h-4 mr-2" />
                Adoção
              </TabsTrigger>
              <TabsTrigger value="roi" className="data-[state=active]:bg-primary data-[state=active]:text-secondary-foreground">
                <Users className="w-4 h-4 mr-2" />
                ROI
              </TabsTrigger>
            </TabsList>

            <TabsContent value="growth" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-secondary flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      Crescimento por Metodologia
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="h-[300px]">
                      <LineChart data={growthData}>
                        <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                        <YAxis stroke="hsl(var(--muted-foreground))" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line type="monotone" dataKey="5S" stroke="hsl(48, 96%, 53%)" strokeWidth={3} dot={{ fill: "hsl(48, 96%, 53%)" }} />
                        <Line type="monotone" dataKey="Kanban" stroke="hsl(210, 40%, 30%)" strokeWidth={3} dot={{ fill: "hsl(210, 40%, 30%)" }} />
                        <Line type="monotone" dataKey="Kaizen" stroke="hsl(48, 96%, 40%)" strokeWidth={3} dot={{ fill: "hsl(48, 96%, 40%)" }} />
                        <Line type="monotone" dataKey="JIT" stroke="hsl(210, 40%, 50%)" strokeWidth={3} dot={{ fill: "hsl(210, 40%, 50%)" }} />
                      </LineChart>
                    </ChartContainer>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-secondary flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      Impacto na Produtividade
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="h-[300px]">
                      <PieChart>
                        <Pie
                          data={productivityData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}%`}
                        >
                          {productivityData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-secondary flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    Redução de Desperdício ao Longo do Tempo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[300px]">
                    <AreaChart data={wasteReductionData}>
                      <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area type="monotone" dataKey="Antes" stackId="1" stroke="hsl(0, 70%, 50%)" fill="hsl(0, 70%, 50%)" fillOpacity={0.3} />
                      <Area type="monotone" dataKey="Depois" stackId="2" stroke="hsl(120, 60%, 40%)" fill="hsl(120, 60%, 40%)" fillOpacity={0.3} />
                    </AreaChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="efficiency" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-secondary flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      Comparativo de Eficiência
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="h-[350px]">
                      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={efficiencyData}>
                        <PolarGrid stroke="hsl(var(--border))" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 150]} tick={{ fill: "hsl(var(--muted-foreground))" }} />
                        <Radar name="Com Metodologias" dataKey="A" stroke="hsl(48, 96%, 53%)" fill="hsl(48, 96%, 53%)" fillOpacity={0.5} />
                        <Radar name="Sem Metodologias" dataKey="B" stroke="hsl(210, 40%, 50%)" fill="hsl(210, 40%, 50%)" fillOpacity={0.3} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </RadarChart>
                    </ChartContainer>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-secondary">Benefícios das Metodologias</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-foreground font-medium">5S - Organização</span>
                          <span className="text-primary font-bold">92%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-3">
                          <div className="bg-gradient-to-r from-primary to-primary/70 h-3 rounded-full transition-all duration-1000" style={{ width: '92%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-foreground font-medium">Kanban - Fluxo Visual</span>
                          <span className="text-primary font-bold">88%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-3">
                          <div className="bg-gradient-to-r from-secondary to-secondary/70 h-3 rounded-full transition-all duration-1000" style={{ width: '88%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-foreground font-medium">Kaizen - Melhoria Contínua</span>
                          <span className="text-primary font-bold">95%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-3">
                          <div className="bg-gradient-to-r from-primary to-primary/70 h-3 rounded-full transition-all duration-1000" style={{ width: '95%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-foreground font-medium">Just in Time - Eficiência</span>
                          <span className="text-primary font-bold">85%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-3">
                          <div className="bg-gradient-to-r from-secondary to-secondary/70 h-3 rounded-full transition-all duration-1000" style={{ width: '85%' }} />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="adoption" className="space-y-8">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-secondary flex items-center gap-2">
                    <Factory className="w-5 h-5 text-primary" />
                    Adoção por Setor Industrial
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[350px]">
                    <BarChart data={industryAdoptionData} layout="vertical">
                      <XAxis type="number" stroke="hsl(var(--muted-foreground))" domain={[0, 100]} />
                      <YAxis dataKey="industry" type="category" stroke="hsl(var(--muted-foreground))" width={100} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="adoption" fill="hsl(48, 96%, 53%)" radius={[0, 8, 8, 0]} />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                  <CardContent className="p-6 text-center">
                    <p className="text-4xl font-bold text-primary mb-2">85%</p>
                    <p className="text-muted-foreground">das empresas de manufatura utilizam</p>
                  </CardContent>
                </Card>
                <Card className="border-secondary/20 bg-gradient-to-br from-secondary/5 to-transparent">
                  <CardContent className="p-6 text-center">
                    <p className="text-4xl font-bold text-secondary mb-2">3.2x</p>
                    <p className="text-muted-foreground">retorno médio sobre investimento</p>
                  </CardContent>
                </Card>
                <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                  <CardContent className="p-6 text-center">
                    <p className="text-4xl font-bold text-primary mb-2">92%</p>
                    <p className="text-muted-foreground">relatam melhoria na qualidade</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="roi" className="space-y-8">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-secondary flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Retorno sobre Investimento (ROI) por Metodologia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[350px]">
                    <BarChart data={roiData}>
                      <XAxis dataKey="method" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="roi" fill="hsl(48, 96%, 53%)" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-secondary">Benefícios Financeiros</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
                      <div className="p-3 bg-primary/20 rounded-full">
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Redução de Custos</p>
                        <p className="text-sm text-muted-foreground">Economia média de 30-40% em custos operacionais</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
                      <div className="p-3 bg-secondary/20 rounded-full">
                        <Clock className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Tempo de Payback</p>
                        <p className="text-sm text-muted-foreground">Retorno do investimento em 6-12 meses</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
                      <div className="p-3 bg-primary/20 rounded-full">
                        <Target className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Margem de Lucro</p>
                        <p className="text-sm text-muted-foreground">Aumento de 15-25% na margem líquida</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-secondary">Casos de Sucesso</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 border border-border rounded-xl">
                      <p className="font-semibold text-primary mb-1">Toyota</p>
                      <p className="text-sm text-muted-foreground">Pioneira no sistema Just in Time, reduziu estoques em 90%</p>
                    </div>
                    <div className="p-4 border border-border rounded-xl">
                      <p className="font-semibold text-secondary mb-1">Amazon</p>
                      <p className="text-sm text-muted-foreground">Implementação de Kaizen resultou em 30% mais eficiência</p>
                    </div>
                    <div className="p-4 border border-border rounded-xl">
                      <p className="font-semibold text-primary mb-1">Boeing</p>
                      <p className="text-sm text-muted-foreground">5S e Kanban reduziram tempo de produção em 50%</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <p className="text-primary-foreground/80">
            © 2024 JamLog - Dados baseados em estudos de mercado e benchmarks industriais
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboards;
