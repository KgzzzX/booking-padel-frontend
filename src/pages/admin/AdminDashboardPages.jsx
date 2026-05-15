import React from 'react';

const AdminDashboardPage = () => {
  // Data dummy sementara (nanti diganti dengan data dari API / backend)
  const stats = {
    totalBooking: 124,
    totalUser: 45,
    activeCourts: 4
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">Ringkasan statistik sistem booking lapangan.</p>
      </div>

      {/* Bagian Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Card Total Booking */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Booking</p>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2">
                {stats.totalBooking}
              </p>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              {/* Icon kalender/booking bisa ditaruh di sini */}
              <span className="text-blue-600 dark:text-blue-400 text-xl">📅</span>
            </div>
          </div>
        </div>

        {/* Card Total User */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total User</p>
              <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-2">
                {stats.totalUser}
              </p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
              {/* Icon user bisa ditaruh di sini */}
              <span className="text-green-600 dark:text-green-400 text-xl">👥</span>
            </div>
          </div>
        </div>

        {/* Card Statistik Tambahan (Opsional) */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Lapangan Aktif</p>
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mt-2">
                {stats.activeCourts}
              </p>
            </div>
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
              {/* Icon lapangan bisa ditaruh di sini */}
              <span className="text-purple-600 dark:text-purple-400 text-xl">🎾</span>
            </div>
          </div>
        </div>

      </div>

      {/* Area untuk Grafik / Detail Statistik Lebih Lanjut */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 min-h-[300px]">
        <h2 className="text-xl font-bold mb-4">Grafik / Detail Statistik</h2>
        <div className="flex items-center justify-center h-full text-gray-400 border-2 border-dashed border-gray-200 dark:border-gray-600 rounded-lg p-10">
          <p>Area ini nantinya bisa diisi dengan Chart.js atau Recharts untuk menampilkan grafik tren booking per bulan.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;