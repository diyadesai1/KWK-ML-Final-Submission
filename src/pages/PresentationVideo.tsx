import { Video } from 'lucide-react';

export function PresentationVideo() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-amber-500">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center">
            <Video className="w-6 h-6 text-amber-700" />
          </div>
          <h1 className="text-amber-800">Presentation Video</h1>
        </div>
        
        <div className="aspect-video bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg flex items-center justify-center mb-6 border-2 border-amber-200">
          <div className="text-center p-8">
            <Video className="w-16 h-16 text-amber-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">
              Video presentation will be embedded here
            </p>
            <p className="text-gray-500">
              Add your video URL or embed code
            </p>
          </div>
        </div>
        
        <div className="prose max-w-none">
          <h2 className="text-orange-700">About This Presentation</h2>
          <p className="text-gray-700">
            This presentation explores the research findings on how women's gold ownership in India impacts their financial resilience and access to credit. The analysis uses machine learning techniques to uncover patterns and relationships in the data.
          </p>
        </div>
      </div>
    </div>
  );
}
