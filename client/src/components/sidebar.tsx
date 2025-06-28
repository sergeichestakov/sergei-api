export default function Sidebar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hidden lg:block lg:col-span-1">
      <nav className="sticky top-8 space-y-1">
        <div className="space-y-1">
          <h3 className="text-xs font-semibold text-api-slate uppercase tracking-wider">
            Getting Started
          </h3>
          <button
            onClick={() => scrollToSection("overview")}
            className="block w-full text-left px-3 py-2 text-sm text-api-blue bg-blue-50 rounded-md"
          >
            Overview
          </button>
          <button
            onClick={() => scrollToSection("authentication")}
            className="block w-full text-left px-3 py-2 text-sm text-api-slate hover:text-api-text hover:bg-gray-50 rounded-md"
          >
            Authentication
          </button>
          <button
            onClick={() => scrollToSection("rate-limiting")}
            className="block w-full text-left px-3 py-2 text-sm text-api-slate hover:text-api-text hover:bg-gray-50 rounded-md"
          >
            Rate Limiting
          </button>
        </div>
        <div className="space-y-1 mt-6">
          <h3 className="text-xs font-semibold text-api-slate uppercase tracking-wider">
            API Reference
          </h3>
          <button
            onClick={() => scrollToSection("profile")}
            className="block w-full text-left px-3 py-2 text-sm text-api-slate hover:text-api-text hover:bg-gray-50 rounded-md"
          >
            Profile
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full text-left px-3 py-2 text-sm text-api-slate hover:text-api-text hover:bg-gray-50 rounded-md"
          >
            Contact
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="block w-full text-left px-3 py-2 text-sm text-api-slate hover:text-api-text hover:bg-gray-50 rounded-md"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="block w-full text-left px-3 py-2 text-sm text-api-slate hover:text-api-text hover:bg-gray-50 rounded-md"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("social")}
            className="block w-full text-left px-3 py-2 text-sm text-api-slate hover:text-api-text hover:bg-gray-50 rounded-md"
          >
            Social
          </button>
        </div>
      </nav>
    </div>
  );
}
