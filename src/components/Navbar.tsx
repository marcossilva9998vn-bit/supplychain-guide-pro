import { useState, useEffect } from "react";
import { Menu, X, Home, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import jamlogLogo from "@/assets/jamlog-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: "5S", id: "5s" },
    { label: "Kanban", id: "kanban" },
    { label: "Kaizen", id: "kaizen" },
    { label: "Just in Time", id: "jit" },
  ];

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui será implementada a lógica de cadastro
    console.log("Cadastro:", { email, password });
    setIsRegisterOpen(false);
    setEmail("");
    setPassword("");
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 w-full transition-all duration-300 bg-primary shadow-md z-50"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-28 md:h-32">
          {/* Logo no canto superior esquerdo */}
          <div className="flex items-center">
            <Link to="/">
              <img 
                src={jamlogLogo} 
                alt="JAMLOG Logo" 
                className="h-40 md:h-48 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Container com animação de caminhão */}
          <div className="hidden md:flex items-center ml-8 flex-1 mr-4 relative">
            {/* Home Icon */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-4 bg-secondary hover:bg-secondary/90 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] group relative z-10"
            >
              <Home className="w-8 h-8 text-secondary-foreground group-hover:text-secondary-foreground transition-colors" />
            </button>

            {/* Linha da estrada com caminhão animado */}
            <div className="flex-1 relative h-1 mx-6">
              {/* Linha da estrada */}
              <div className="absolute inset-0 bg-secondary/40 rounded-full overflow-hidden">
                {/* Linha tracejada animada */}
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full h-0.5 border-t-2 border-dashed border-secondary animate-[dash_2s_linear_infinite]" 
                       style={{
                         backgroundImage: 'repeating-linear-gradient(to right, hsl(var(--secondary)) 0px, hsl(var(--secondary)) 10px, transparent 10px, transparent 20px)',
                         backgroundSize: '20px 2px',
                         animation: 'dash 20s linear infinite'
                       }}
                  />
                </div>
              </div>
              
              {/* Caminhão animado */}
              <div className="absolute top-1/2 -translate-y-1/2 animate-[truck-drive_8s_ease-in-out_infinite]">
                <Truck className="w-8 h-8 text-secondary drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              </div>
            </div>

            {/* Desktop Methodology Buttons */}
            <div className="flex items-center space-x-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-6 py-3 bg-secondary text-secondary-foreground font-bold rounded-lg border-2 border-primary hover:bg-secondary/80 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-2xl hover:shadow-primary/50"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Icon (Top Right) */}
          <button
            className="p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute right-4 top-full mt-2 w-64 bg-background border border-border rounded-xl shadow-lg animate-fade-in z-50">
            <div className="p-3 space-y-2">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 w-full text-left py-3 px-4 bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-200 rounded-xl hover:scale-[1.02]"
              >
                <Home className="w-4 h-4" />
                Início
              </Link>
              <Link
                to="/quem-somos"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left py-3 px-4 bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-200 rounded-xl hover:scale-[1.02]"
              >
                Quem Somos
              </Link>
              <Link
                to="/contato"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left py-3 px-4 bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-200 rounded-xl hover:scale-[1.02]"
              >
                Contato
              </Link>
              <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
                <DialogTrigger asChild>
                  <button className="block w-full text-left py-3 px-4 bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-200 font-medium rounded-xl hover:scale-[1.02]">
                    Cadastrar
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Cadastre-se</DialogTitle>
                    <DialogDescription>
                      Crie sua conta para acessar todos os recursos
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="menu-email">E-mail</Label>
                      <Input
                        id="menu-email"
                        type="email"
                        placeholder="seu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="menu-password">Senha</Label>
                      <Input
                        id="menu-password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Cadastrar
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
