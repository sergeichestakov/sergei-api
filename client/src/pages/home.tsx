import { useEffect } from "react";
import { useLocation } from "wouter";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import EndpointCard from "@/components/endpoint-card";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [location] = useLocation();

  useEffect(() => {
    // Handle hash navigation
    if (location.includes("#")) {
      const hash = location.split("#")[1];
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-api-bg">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          <Sidebar />
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Overview Section */}
            <section id="overview" className="mb-12">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-api-text mb-4">Personal API Documentation</h1>
                <p className="text-lg text-api-slate mb-6">
                  A simple REST API that provides structured access to my personal information, professional details, and metadata for use across websites and applications.
                </p>
              </div>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-api-text mb-4">Base URL</h2>
                  <div className="bg-api-code-bg rounded-lg p-4 font-mono text-sm">
                    <code className="text-api-code-text">{window.location.origin}</code>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-api-text mb-2 flex items-center">
                      <i className="fas fa-clock text-api-emerald mr-2"></i>
                      Response Time
                    </h3>
                    <p className="text-2xl font-bold text-api-emerald">~50ms</p>
                    <p className="text-sm text-api-slate">Average response time</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-api-text mb-2 flex items-center">
                      <i className="fas fa-shield-alt text-api-blue mr-2"></i>
                      CORS Enabled
                    </h3>
                    <p className="text-2xl font-bold text-api-blue">Yes</p>
                    <p className="text-sm text-api-slate">Cross-origin requests supported</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Authentication Section */}
            <section id="authentication" className="mb-12">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-api-text mb-4">Authentication</h2>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                    <div className="flex items-start">
                      <i className="fas fa-info-circle text-api-blue mr-3 mt-1"></i>
                      <div>
                        <h4 className="font-medium text-api-text">No Authentication Required</h4>
                        <p className="text-sm text-api-slate mt-1">
                          This API is designed to provide public information and does not require authentication for access.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Endpoints Section */}
            <section id="endpoints" className="mb-12">
              <h2 className="text-2xl font-bold text-api-text mb-6">API Endpoints</h2>

              <EndpointCard
                id="profile"
                title="Get Profile Information"
                method="GET"
                endpoint="/api/profile"
                description="Returns basic profile information including name, age, location, and bio."
                responseExample={`{
  "success": true,
  "data": {
    "name": "Sergei",
    "age": 28,
    "location": "San Francisco, CA",
    "bio": "Full-stack developer passionate about creating innovative web applications",
    "title": "Senior Software Engineer",
    "company": "Tech Innovations Inc.",
    "website": "https://sergei.com",
    "lastUpdated": "2024-01-15T10:30:00Z"
  }
}`}
              />

              <EndpointCard
                id="contact"
                title="Get Contact Information"
                method="GET"
                endpoint="/api/contact"
                description="Returns contact information and preferred methods of communication."
                responseExample={`{
  "success": true,
  "data": {
    "email": "hello@sergei.com",
    "linkedin": "https://linkedin.com/in/sergei",
    "github": "https://github.com/sergei",
    "timezone": "America/Los_Angeles",
    "preferredContact": "email",
    "availability": "Monday-Friday, 9 AM - 6 PM PST"
  }
}`}
              />

              <EndpointCard
                id="skills"
                title="Get Skills & Technologies"
                method="GET"
                endpoint="/api/skills"
                description="Returns technical skills, programming languages, and proficiency levels."
                responseExample={`{
  "success": true,
  "data": {
    "programming": [
      {"name": "TypeScript", "level": "expert", "years": 5},
      {"name": "JavaScript", "level": "expert", "years": 7},
      {"name": "Python", "level": "intermediate", "years": 3},
      {"name": "Node.js", "level": "expert", "years": 5}
    ],
    "frameworks": [
      {"name": "React", "level": "expert", "years": 4},
      {"name": "Express.js", "level": "expert", "years": 5},
      {"name": "Next.js", "level": "advanced", "years": 3}
    ],
    "databases": [
      {"name": "PostgreSQL", "level": "advanced", "years": 4},
      {"name": "MongoDB", "level": "intermediate", "years": 2}
    ],
    "tools": ["Git", "Docker", "AWS", "Vercel", "Figma"]
  }
}`}
              />

              <EndpointCard
                id="projects"
                title="Get Projects"
                method="GET"
                endpoint="/api/projects"
                description="Returns a list of featured projects with descriptions and links."
                responseExample={`{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "E-commerce Platform",
      "description": "Full-stack e-commerce solution built with React and Node.js",
      "technologies": ["React", "Node.js", "PostgreSQL", "Stripe"],
      "status": "completed",
      "year": 2023,
      "url": "https://github.com/sergei/ecommerce",
      "featured": true
    },
    {
      "id": 2,
      "name": "Task Management App",
      "description": "Collaborative task management tool with real-time updates",
      "technologies": ["Next.js", "Socket.io", "MongoDB"],
      "status": "in-progress",
      "year": 2024,
      "url": "https://github.com/sergei/task-manager",
      "featured": true
    }
  ]
}`}
              />

              <EndpointCard
                id="social"
                title="Get Social Links"
                method="GET"
                endpoint="/api/social"
                description="Returns social media profiles and professional links."
                responseExample={`{
  "success": true,
  "data": {
    "github": "https://github.com/sergei",
    "linkedin": "https://linkedin.com/in/sergei",
    "twitter": "https://twitter.com/sergei",
    "portfolio": "https://sergei.com",
    "blog": "https://blog.sergei.com",
    "resume": "https://sergei.com/resume.pdf"
  }
}`}
              />
            </section>

            {/* Error Handling Section */}
            <section id="errors" className="mb-12">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-api-text mb-4">Error Handling</h2>
                  <p className="text-api-slate mb-4">
                    The API uses conventional HTTP response codes to indicate the success or failure of requests.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Badge className="bg-api-emerald text-white">200</Badge>
                      <div>
                        <h4 className="font-medium text-api-text">Success</h4>
                        <p className="text-sm text-api-slate">Everything worked as expected.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Badge variant="destructive">404</Badge>
                      <div>
                        <h4 className="font-medium text-api-text">Not Found</h4>
                        <p className="text-sm text-api-slate">The requested resource doesn't exist.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Badge variant="destructive">500</Badge>
                      <div>
                        <h4 className="font-medium text-api-text">Server Error</h4>
                        <p className="text-sm text-api-slate">Something went wrong on our end.</p>
                      </div>
                    </div>
                  </div>

                  <h4 className="font-medium text-api-text mb-3 mt-6">Error Response Format</h4>
                  <div className="bg-api-code-bg rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <pre className="text-api-code-text">{`{
  "success": false,
  "error": {
    "code": 404,
    "message": "Endpoint not found",
    "details": "The requested endpoint '/api/invalid' does not exist"
  }
}`}</pre>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Rate Limiting Section */}
            <section id="rate-limiting" className="mb-12">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-api-text mb-4">Rate Limiting</h2>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                    <div className="flex items-start">
                      <i className="fas fa-exclamation-triangle text-yellow-600 mr-3 mt-1"></i>
                      <div>
                        <h4 className="font-medium text-api-text">Rate Limit: 1000 requests/hour</h4>
                        <p className="text-sm text-api-slate mt-1">
                          Requests are limited to 1000 per hour per IP address to ensure fair usage.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-api-slate">Rate limit information is included in response headers:</p>
                  <div className="bg-api-code-bg rounded-lg p-4 font-mono text-sm overflow-x-auto mt-4">
                    <pre className="text-api-code-text">{`X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200`}</pre>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Try It Out Section */}
            <section id="examples" className="mb-12">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-api-text mb-4">Try It Out</h2>
                  <p className="text-api-slate mb-4">
                    Test the API endpoints directly from your browser or command line.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h4 className="font-medium text-api-text">GET /api/profile</h4>
                        <p className="text-sm text-api-slate">Fetch basic profile information</p>
                      </div>
                      <button 
                        onClick={() => window.open("/api/profile", "_blank")}
                        className="bg-api-blue hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                      >
                        Try It
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h4 className="font-medium text-api-text">GET /api/skills</h4>
                        <p className="text-sm text-api-slate">Fetch technical skills and experience</p>
                      </div>
                      <button 
                        onClick={() => window.open("/api/skills", "_blank")}
                        className="bg-api-blue hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                      >
                        Try It
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
