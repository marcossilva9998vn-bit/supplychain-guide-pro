import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aqui será implementada a lógica de envio
    console.log("Formulário enviado:", formData);
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      mensagem: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos prontos para ajudar sua empresa a alcançar novos patamares de eficiência
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl border-2 border-primary/20">
                <h2 className="text-2xl font-bold text-secondary mb-6">
                  Informações de Contato
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary mb-1">E-mail</h3>
                      <p className="text-foreground">contato@jamlog.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary mb-1">Telefone</h3>
                      <p className="text-foreground">(11) 9999-9999</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary mb-1">Endereço</h3>
                      <p className="text-foreground">
                        São Paulo, SP<br />
                        Brasil
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-8 rounded-2xl border border-border">
                <h3 className="text-xl font-bold text-secondary mb-4">
                  Horário de Atendimento
                </h3>
                <div className="space-y-2 text-foreground">
                  <p><strong>Segunda a Sexta:</strong> 8h às 18h</p>
                  <p><strong>Sábado:</strong> 9h às 13h</p>
                  <p><strong>Domingo:</strong> Fechado</p>
                </div>
              </div>
            </div>

            {/* Formulário de Contato */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
                <h2 className="text-2xl font-bold text-secondary mb-6">
                  Envie sua Mensagem
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome Completo</Label>
                    <Input
                      id="nome"
                      type="text"
                      placeholder="Seu nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input
                      id="telefone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={formData.telefone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensagem">Mensagem</Label>
                    <Textarea
                      id="mensagem"
                      placeholder="Como podemos ajudar?"
                      value={formData.mensagem}
                      onChange={handleChange}
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contato;
