import { Link } from 'react-router-dom';
// 1. IMPORT GAMBAR DARI FOLDER ASSETS
// (Tanda titik dua ".." artinya: keluar dari folder pages dulu, baru cari assets)
import fotoProfil from '../assets/juna.jpg'; 

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-indigo-50 to-white pt-16">
      <div className="relative mb-6">
        <img
          // 2. PANGGIL VARIABEL IMPORT TADI
          src={fotoProfil} 
          alt="Arjuna"
          className="w-40 h-40 rounded-full object-cover shadow-xl border-4 border-white"
        />
      </div>
      
      {/* ... (kode sisanya biarkan sama) ... */}
      <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">
        Halo, Saya Arjuna <span className="animate-pulse">👋</span>
      </h1>
      
      {/* ... */}
    </section>
  );
};

export default Home;