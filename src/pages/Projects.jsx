const Projects = () => {
  // Data sesuai gambar portofolio Anda
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      category: "Web Development",
      desc: "Platform jual beli online dengan fitur modern dan tampilan dinamis.",
      img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "UI/UX Design",
      desc: "Aplikasi mobile banking dengan keamanan tinggi dan desain sederhana.",
      img: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "Creative Portfolio",
      category: "Web Design",
      desc: "Website portofolio dengan animasi halus dan tata letak simetris.",
      img: "https://images.pexels.com/photos/3184656/pexels-photo-3184656.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section className="pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-12">
          Proyek Unggulan
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-bold text-indigo-500 bg-indigo-50 px-2 py-1 rounded mb-2 inline-block">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.desc}
                </p>
                <button className="text-indigo-600 font-semibold text-sm hover:underline flex items-center gap-1">
                  Lihat Detail <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;