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

          {/* Container com Home e caminhão orbitando */}
          <div className="hidden md:flex items-center ml-8 flex-1 mr-4 relative">
            {/* Home Icon com caminhões orbitando */}
            <div className="relative">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="p-4 bg-secondary rounded-full transition-all duration-500 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,204,0,0.6)] group relative z-10"
              >
                <Home className="w-8 h-8 text-secondary-foreground transition-colors" />
              </button>
              
              {/* Primeiro caminhão preto orbitando */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit z-20 pointer-events-none">
                <Truck className="w-5 h-5 text-black drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]" />
              </div>
              
              {/* Segundo caminhão preto orbitando (180° defasado) */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
                style={{ animation: 'orbit 6s linear infinite', animationDelay: '-3s' }}
              >
                <Truck className="w-5 h-5 text-black drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]" />
              </div>
            </div>

            {/* Espaçador flexível */}
            <div className="flex-1"></div>

            {/* Desktop Methodology Buttons */}
            <div className="flex items-center space-x-3 relative z-10">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-6 py-3 bg-secondary text-secondary-foreground font-bold rounded-lg border-2 border-primary hover:bg-gradient-to-r hover:from-primary/30 hover:to-primary/10 transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-1 shadow-md hover:shadow-[0_0_25px_rgba(255,204,0,0.5)]"
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
                className="flex items-center gap-2 w-full text-left py-3 px-4 bg-secondary text-secondary-foreground hover:bg-gradient-to-r hover:from-primary/30 hover:to-primary/10 transition-all duration-500 ease-out rounded-xl hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,204,0,0.4)]"
              >
                <Home className="w-4 h-4" />
                Início
              </Link>
              <Link
                to="/quem-somos"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left py-3 px-4 bg-secondary text-secondary-foreground hover:bg-gradient-to-r hover:from-primary/30 hover:to-primary/10 transition-all duration-500 ease-out rounded-xl hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,204,0,0.4)]"
              >
                Quem Somos
              </Link>
              <Link
                to="/contato"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left py-3 px-4 bg-secondary text-secondary-foreground rounded-xl transition-all duration-500 ease-out hover:scale-[1.02]"
                style={{
                  background: 'hsl(var(--secondary))',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, hsl(48 96% 53% / 0.3), hsl(48 96% 53% / 0.1))';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(255,204,0,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'hsl(var(--secondary))';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Contato
              </Link>
              <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
                <DialogTrigger asChild>
                  <button className="block w-full text-left py-3 px-4 bg-secondary text-secondary-foreground hover:bg-gradient-to-r hover:from-primary/30 hover:to-primary/10 transition-all duration-500 ease-out font-medium rounded-xl hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,204,0,0.4)]">
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
