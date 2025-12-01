import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar.tsx';
import { Home } from './pages/Home.tsx';
import { PresentationVideo } from './pages/PresentationVideo.tsx';
import { SlideDeck } from './pages/SlideDeck.tsx';
import { GoogleCollab } from './pages/GoogleCollab.tsx';
import { Suspense } from 'react';

function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <h1 className="text-amber-700 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">The page you are looking for does not exist.</p>
      <a href="/" className="inline-block px-5 py-3 rounded-md bg-amber-600 text-white text-sm font-medium shadow hover:bg-amber-500 transition-colors">Return Home</a>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <NavBar />
        <Suspense fallback={<div className="p-8 text-center text-amber-700">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/presentation-video" element={<PresentationVideo />} />
            <Route path="/slide-deck" element={<SlideDeck />} />
            <Route path="/google-collab" element={<GoogleCollab />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}
