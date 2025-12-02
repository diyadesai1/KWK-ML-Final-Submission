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
        
        {/* Embedded Canva slide deck */}
        <div className="aspect-video rounded-lg overflow-hidden mb-3 border-2 border-amber-200 bg-white">
          <iframe
            src="https://www.canva.com/design/DAG6QbnkRv8/pogqugf4PLAK3rW8ynHe7g/view?embed"
            title="Slide Deck"
            className="w-full h-full"
            allow="fullscreen"
            allowFullScreen
          />
        </div>
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600 text-sm">If the embed does not load, open the slide deck in a new tab.</p>
          <a
            href="https://www.canva.com/design/DAG6QbnkRv8/pogqugf4PLAK3rW8ynHe7g/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-amber-600 px-4 py-2 text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <FileText className="w-4 h-4" />
            Open in Canva
          </a>
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
