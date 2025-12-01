import { Code } from 'lucide-react';

export function GoogleCollab() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-amber-500">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center">
            <Code className="w-6 h-6 text-amber-700" />
          </div>
          <h1 className="text-amber-800">Google Colab Notebook</h1>
        </div>
        
        <div className="aspect-video bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg flex items-center justify-center mb-6 border-2 border-amber-200">
          <div className="text-center p-8">
            <Code className="w-16 h-16 text-amber-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">
              Google Colab notebook will be embedded here
            </p>
            <p className="text-gray-500">
              Add your Colab notebook embed code or link
            </p>
          </div>
        </div>
        
        <div className="prose max-w-none">
          <h2 className="text-orange-700">Machine Learning Analysis</h2>
          <p className="text-gray-700">
            This Google Colab notebook contains the complete machine learning pipeline used for this research. It includes data preprocessing, exploratory data analysis, model training, and evaluation. The notebook demonstrates how machine learning techniques can reveal insights about the relationship between women's gold ownership and their financial empowerment in India.
          </p>
          
          <h3 className="text-amber-700">Key Components</h3>
          <ul className="text-gray-700">
            <li>Data cleaning and preprocessing</li>
            <li>Feature engineering and selection</li>
            <li>Model development and training</li>
            <li>Results visualization and interpretation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
