import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-semibold text-api-text">api.sergei.com</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button
                  onClick={() => scrollToSection("overview")}
                  className="text-api-blue hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Overview
                </button>
                <button
                  onClick={() => scrollToSection("endpoints")}
                  className="text-api-slate hover:text-api-text px-3 py-2 rounded-md text-sm font-medium"
                >
                  Endpoints
                </button>
                <button
                  onClick={() => scrollToSection("examples")}
                  className="text-api-slate hover:text-api-text px-3 py-2 rounded-md text-sm font-medium"
                >
                  Examples
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-api-slate">
              <div className="w-2 h-2 bg-api-emerald rounded-full"></div>
              <span>API Status: Online</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2 text-api-slate hover:text-api-text"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className="fas fa-bars"></i>
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection("overview")}
                className="text-left text-api-blue hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Overview
              </button>
              <button
                onClick={() => scrollToSection("endpoints")}
                className="text-left text-api-slate hover:text-api-text px-3 py-2 rounded-md text-sm font-medium"
              >
                Endpoints
              </button>
              <button
                onClick={() => scrollToSection("examples")}
                className="text-left text-api-slate hover:text-api-text px-3 py-2 rounded-md text-sm font-medium"
              >
                Examples
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
