import { useState, useEffect } from "react";
import { Menu, X, Home } from "lucide-react";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-28 md:h-32">
          {/* Logo Centralizada */}
          <div className="flex items-center justify-center absolute left-1/2 -translate-x-1/2">
            <Link to="/">
              <img 
                src={jamlogLogo} 
                alt="JAMLOG Logo" 
                className="h-32 md:h-40 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Methodology Buttons (Right Side) */}
          <div className="hidden md:flex items-center space-x-3 ml-auto mr-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-2xl hover:shadow-primary/50"
              >
                {item.label}
              </button>
            ))}
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
              
              {/* Mobile Methodology Buttons */}
              <div className="border-t border-border pt-2 mt-2 space-y-2">
                <p className="text-xs text-muted-foreground px-2 py-1 font-semibold">Metodologias</p>
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left py-3 px-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 rounded-xl font-semibold hover:scale-[1.02]"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
