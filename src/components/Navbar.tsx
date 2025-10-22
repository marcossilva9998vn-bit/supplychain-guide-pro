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

          {/* Desktop Menu Icon (Top Right) */}
          <button
            className="ml-auto p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute right-4 top-full mt-2 w-64 bg-background border border-border rounded-lg shadow-lg animate-fade-in">
            <div className="p-2 space-y-1">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 w-full text-left py-3 px-4 bg-[hsl(220,70%,25%)] text-white hover:bg-[hsl(220,70%,20%)] transition-colors rounded-lg"
              >
                <Home className="w-4 h-4" />
                Início
              </Link>
              <Link
                to="/quem-somos"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left py-3 px-4 bg-[hsl(220,70%,25%)] text-white hover:bg-[hsl(220,70%,20%)] transition-colors rounded-lg"
              >
                Quem Somos
              </Link>
              <Link
                to="/contato"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left py-3 px-4 bg-[hsl(220,70%,25%)] text-white hover:bg-[hsl(220,70%,20%)] transition-colors rounded-lg"
              >
                Contato
              </Link>
              <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
                <DialogTrigger asChild>
                  <button className="block w-full text-left py-3 px-4 bg-[hsl(220,70%,25%)] text-white hover:bg-[hsl(220,70%,20%)] transition-colors font-medium rounded-lg">
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
              <div className="border-t border-border my-2"></div>
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 px-4 text-foreground hover:bg-muted hover:text-primary transition-colors duration-200 rounded-lg"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
