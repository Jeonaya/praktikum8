import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Fungsi untuk mengecek menu aktif
  const isActive = (path) => {
    return location.pathname === path 
      ? "text-indigo-600 font-bold" 
      : "text-gray-600 hover:text-indigo-600 font-medium";
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold text-indigo-600 tracking-tighter">
          Arjuna.dev
        </Link>
        
        <div className="flex gap-8">
          <Link to="/" className={isActive('/')}>Tentang</Link>
          <Link to="/projects" className={isActive('/projects')}>Proyek</Link>
          <Link to="/contact" className={isActive('/contact')}>Kontak</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;