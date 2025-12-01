import { FileText } from 'lucide-react';

export function SlideDeck() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-amber-500">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center">
            <FileText className="w-6 h-6 text-amber-700" />
          </div>
          <h1 className="text-amber-800">Slide Deck</h1>
        </div>
        
        <div className="aspect-video bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg flex items-center justify-center mb-6 border-2 border-amber-200">
          <div className="text-center p-8">
            <FileText className="w-16 h-16 text-amber-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">
              Slide deck will be embedded here
            </p>
            <p className="text-gray-500">
              Add your Google Slides or PDF viewer embed code
            </p>
          </div>
        </div>
        
        <div className="prose max-w-none">
          <h2 className="text-orange-700">Research Slides</h2>
          <p className="text-gray-700">
            The slide deck provides a comprehensive overview of the research methodology, data analysis, and key findings. It includes visualizations showing the correlation between gold ownership, household autonomy, and financial outcomes for women in India.
          </p>
        </div>
      </div>
    </div>
  );
}
