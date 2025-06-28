export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-4">
            <p className="text-sm text-api-slate">© 2024 Sergei's Personal API</p>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-api-emerald rounded-full"></div>
              <span className="text-sm text-api-slate">Status: Operational</span>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-6">
            <a 
              href="https://github.com/sergei" 
              className="text-api-slate hover:text-api-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://linkedin.com/in/sergei" 
              className="text-api-slate hover:text-api-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="mailto:hello@sergei.com" 
              className="text-api-slate hover:text-api-text"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
