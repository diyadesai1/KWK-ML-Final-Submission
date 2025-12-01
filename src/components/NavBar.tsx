import { Link, useLocation } from 'react-router-dom';

export function NavBar() {
  const location = useLocation();
  
  const links = [
    { path: '/presentation-video', label: 'Presentation Video' },
    { path: '/slide-deck', label: 'Slide Deck' },
    { path: '/google-collab', label: 'Google Collab' },
  ];
  
  return (
    <nav className="bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white">
            Diya's KWK ML Challenge
          </Link>
          
          <div className="flex gap-1 sm:gap-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md transition-colors ${
                  location.pathname === link.path
                    ? 'bg-white text-amber-700'
                    : 'text-white hover:bg-amber-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
