import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const baseUrl = window.location.origin;

  const endpoints = [
    {
      path: "/profile",
      description: "Basic profile information"
    },
    {
      path: "/contact", 
      description: "Contact information"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sergei's Personal API
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Simple REST API providing structured access to personal information
          </p>
          
          <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm inline-block">
            <code className="text-gray-800">{baseUrl}</code>
          </div>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Available Endpoints</h2>
            <div className="space-y-4">
              {endpoints.map((endpoint) => (
                <div key={endpoint.path} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Badge className="bg-green-500 text-white">GET</Badge>
                    <div>
                      <code className="text-sm font-mono text-gray-800">{endpoint.path}</code>
                      <p className="text-sm text-gray-600">{endpoint.description}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => window.open(endpoint.path, "_blank")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Try It
                  </button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-gray-500 text-sm">
          <p>No authentication required • CORS enabled • JSON responses</p>
        </div>
      </div>
    </div>
  );
}
