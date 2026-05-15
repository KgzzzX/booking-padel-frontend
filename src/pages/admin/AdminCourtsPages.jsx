import React, { useState } from 'react';

const AdminCourtsPage = () => {
  // Dummy data lapangan
  const [courts, setCourts] = useState([
    { id: 1, name: 'Lapangan Indoor 1', type: 'Indoor', price: 150000, status: 'Tersedia' },
    { id: 2, name: 'Lapangan Indoor 2', type: 'Indoor', price: 150000, status: 'Perbaikan' },
    { id: 3, name: 'Lapangan Outdoor 1', type: 'Outdoor', price: 100000, status: 'Tersedia' },
  ]);

  // Fungsi dummy untuk Hapus
  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus lapangan ini?');
    if (confirmDelete) {
      setCourts(courts.filter(court => court.id !== id));
    }
  };

  // Fungsi dummy untuk Edit & Tambah (Nantinya bisa buka Modal atau pindah halaman)
  const handleEdit = (id) => {
    alert(`Membuka form edit untuk lapangan ID: ${id}`);
  };

  const handleAdd = () => {
    alert('Membuka form tambah lapangan baru');
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50 text-gray-800">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Kelola Lapangan</h1>
          <p className="text-gray-600">CRUD data lapangan padel Anda di sini.</p>
        </div>
        <button 
          onClick={handleAdd}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          + Tambah Lapangan
        </button>
      </div>

      {/* Tabel Lapangan */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200 text-gray-600">
                <th className="p-4 font-semibold text-sm">ID</th>
                <th className="p-4 font-semibold text-sm">Nama Lapangan</th>
                <th className="p-4 font-semibold text-sm">Tipe</th>
                <th className="p-4 font-semibold text-sm">Harga / Jam</th>
                <th className="p-4 font-semibold text-sm">Status</th>
                <th className="p-4 font-semibold text-sm text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {courts.length > 0 ? (
                courts.map((court) => (
                  <tr key={court.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-sm text-gray-500">#{court.id}</td>
                    <td className="p-4 text-sm font-medium">{court.name}</td>
                    <td className="p-4 text-sm">{court.type}</td>
                    <td className="p-4 text-sm">Rp {court.price.toLocaleString('id-ID')}</td>
                    <td className="p-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        court.status === 'Tersedia' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {court.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm flex justify-center gap-2">
                      <button 
                        onClick={() => handleEdit(court.id)}
                        className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200 transition-colors"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(court.id)}
                        className="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="p-8 text-center text-gray-500">
                    Tidak ada data lapangan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminCourtsPage;