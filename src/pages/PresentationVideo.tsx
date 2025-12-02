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
        
        <div className="aspect-video rounded-lg overflow-hidden mb-6 border-2 border-amber-200 bg-white">
          <iframe
            src="https://drive.google.com/file/d/14yigpgnpKolc_Qv-nl48ch9gVRaVY2wt/preview"
            title="Presentation Video"
            className="w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600 text-sm">If the video does not load, open it in Google Drive.</p>
          <a
            href="https://drive.google.com/file/d/14yigpgnpKolc_Qv-nl48ch9gVRaVY2wt/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-amber-600 px-4 py-2 text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <Video className="w-4 h-4" />
            Open in Drive
          </a>
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
