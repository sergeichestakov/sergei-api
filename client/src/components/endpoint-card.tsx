import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface EndpointCardProps {
  id: string;
  title: string;
  method: string;
  endpoint: string;
  description: string;
  responseExample: string;
}

export default function EndpointCard({
  id,
  title,
  method,
  endpoint,
  description,
  responseExample,
}: EndpointCardProps) {
  return (
    <Card id={id} className="mb-6">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-api-text">{title}</h3>
          <Badge className="bg-api-emerald text-white">{method}</Badge>
        </div>
        <div className="bg-api-code-bg rounded-lg p-4 font-mono text-sm mb-4">
          <code className="text-api-code-text">
            {method} {endpoint}
          </code>
        </div>
        <p className="text-api-slate">{description}</p>
      </div>
      <CardContent className="p-6">
        <h4 className="font-medium text-api-text mb-3">Response Example</h4>
        <div className="bg-api-code-bg rounded-lg p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-api-code-text">{responseExample}</pre>
        </div>
      </CardContent>
    </Card>
  );
}
