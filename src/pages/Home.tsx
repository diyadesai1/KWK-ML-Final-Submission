import { Link } from 'react-router-dom';
import { Video, FileText, Code, ArrowRight } from 'lucide-react';

export function Home() {
  const resources = [
    { path: '/presentation-video', label: 'Presentation Video', icon: Video, description: 'Watch the full presentation.' },
    { path: '/slide-deck', label: 'Slide Deck', icon: FileText, description: 'Browse the research slides.' },
    { path: '/google-collab', label: 'Google Colab', icon: Code, description: 'Open the analysis notebook.' },
  ];

  return (
    <main className="min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8 py-10 max-w-6xl mx-auto">
      {/* Hero */}
      <section className="text-center mb-14">
        <h1 className="gradient-heading mb-4 text-4xl sm:text-5xl font-semibold tracking-tight">
          KWK Machine Learning Challenge
        </h1>
        <p className="text-lg text-amber-900/90 max-w-2xl mx-auto leading-relaxed">
          Exploring how women’s gold ownership in India correlates with financial resilience and empowerment through data-driven insight.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            to={resources[2].path}
            className="inline-flex items-center gap-2 rounded-full bg-amber-600 text-white px-6 py-3 text-sm font-medium shadow-sm hover:bg-amber-500 transition-colors"
          >
            View Analysis Notebook <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Overview Card */}
      <section className="mb-12">
        <div className="rounded-2xl border border-amber-200/60 bg-white/70 backdrop-blur-sm shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-amber-800 mb-3">Summary</h2>
          <p className="text-amber-900/80 leading-relaxed text-sm sm:text-base">
            This project applies exploratory data analysis and machine learning techniques to uncover patterns around household asset distribution, autonomy, and credit access. Use the resources below to watch the presentation, scan the slide deck, or dive directly into the code and models.
          </p>
        </div>
      </section>

      {/* Resource Grid */}
      <section aria-label="Project resources">
        <h2 className="sr-only">Resources</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map(({ path, label, icon: Icon, description }) => (
            <Link
              key={path}
              to={path}
              className="group relative rounded-xl border border-amber-200/60 bg-white/60 backdrop-blur-sm p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center ring-1 ring-amber-200 group-hover:from-amber-200 group-hover:to-orange-200 transition-colors">
                    <Icon className="w-6 h-6 text-amber-700" />
                  </div>
                  <h3 className="font-medium text-amber-800 tracking-tight text-sm sm:text-base">{label}</h3>
                </div>
                <p className="text-xs sm:text-sm text-amber-900/70 flex-grow leading-relaxed">{description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-amber-700 text-xs font-medium">
                  Open <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
