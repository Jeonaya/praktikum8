const Contact = () => {
  return (
    <section className="min-h-screen pt-28 pb-20 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-12">
          Hubungi Saya
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card Email */}
          <div className="bg-white p-8 rounded-3xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition">
            <div className="p-4 bg-indigo-50 rounded-full mb-4 text-indigo-600">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">Email</h3>
            <p className="text-gray-500 text-sm">2400016006@webmail.uad.ac.id</p>
          </div>

          {/* Card WhatsApp */}
          <div className="bg-white p-8 rounded-3xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition">
            <div className="p-4 bg-indigo-50 rounded-full mb-4 text-indigo-600">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.517 4.55a1 1 0 01-.272 1.027l-2.012 2.012a11.042 11.042 0 005.516 5.516l2.012-2.012a1 1 0 011.027-.272l4.55 1.517a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">WhatsApp</h3>
            <p className="text-gray-500 text-sm">+62 813 5680 1148</p>
          </div>

          {/* Card Lokasi */}
          <div className="bg-white p-8 rounded-3xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition">
            <div className="p-4 bg-indigo-50 rounded-full mb-4 text-indigo-600">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">Lokasi</h3>
            <p className="text-gray-500 text-sm">Yogyakarta, Indonesia</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;