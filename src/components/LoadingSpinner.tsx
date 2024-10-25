import { RefreshCw } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-64">
      <RefreshCw className="animate-spin text-blue-500" size={32} />
    </div>
  );
}