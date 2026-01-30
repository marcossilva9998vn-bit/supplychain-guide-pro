import { Languages } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TranslatorButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const languages = [
    { code: "pt", label: "Português" },
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "ja", label: "日本語" },
  ];

  const handleTranslate = (langCode: string) => {
    console.log(`Translate to: ${langCode}`);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <TooltipProvider>
        <Tooltip>
          <DropdownMenu>
            <TooltipTrigger asChild>
              <DropdownMenuTrigger asChild>
                <button
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg transition-all duration-500 ease-out hover:scale-110 hover:shadow-[0_0_30px_rgba(255,204,0,0.5)] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
                  style={{
                    boxShadow: isHovered
                      ? "0 0 35px rgba(255, 204, 0, 0.6)"
                      : "0 4px 20px rgba(0, 0, 0, 0.3)",
                  }}
                  aria-label="Traduzir página"
                >
                  <Languages
                    className="w-6 h-6 text-secondary transition-transform duration-300"
                    style={{
                      transform: isHovered ? "scale(1.1)" : "scale(1)",
                    }}
                  />
                </button>
              </DropdownMenuTrigger>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-card border-border/50">
              <p>Traduzir página</p>
            </TooltipContent>
            <DropdownMenuContent
              align="end"
              side="top"
              className="mb-2 bg-card border-border/50 backdrop-blur-sm animate-fade-in"
            >
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => handleTranslate(lang.code)}
                  className="cursor-pointer transition-all duration-300 hover:bg-primary/20 hover:text-primary focus:bg-primary/20 focus:text-primary"
                >
                  {lang.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default TranslatorButton;
