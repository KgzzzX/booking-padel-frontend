import React, { useState } from 'react';

const AdminBookingsPage = () => {
  // Dummy data booking
  const [bookings, setBookings] = useState([
    { id: 'BK-001', user: 'Budi Santoso', court: 'Lapangan Indoor 1', date: '2026-05-20', time: '19:00 - 21:00', status: 'Pending' },
    { id: 'BK-002', user: 'Andi Pratama', court: 'Lapangan Outdoor 1', date: '2026-05-20', time: '16:00 - 18:00', status: 'Confirmed' },
    { id: 'BK-003', user: 'Citra Kirana', court: 'Lapangan Indoor 2', date: '2026-05-21', time: '20:00 - 22:00', status: 'Cancelled' },
  ]);

  // Fungsi untuk mengubah status booking
  const handleStatusChange = (id, newStatus) => {
    setBookings(bookings.map(booking => 
      booking.id === id ? { ...booking, status: newStatus } : booking
    ));
  };

  // Fungsi dummy untuk hapus data booking
  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Hapus riwayat booking ini?');
    if (confirmDelete) {
      setBookings(bookings.filter(booking => booking.id !== id));
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50 text-gray-800">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Kelola Booking</h1>
        <p className="text-gray-600">Pantau dan kelola status reservasi lapangan di sini.</p>
      </div>

      {/* Tabel Booking */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200 text-gray-600">
                <th className="p-4 font-semibold text-sm">ID Booking</th>
                <th className="p-4 font-semibold text-sm">Nama User</th>
                <th className="p-4 font-semibold text-sm">Lapangan</th>
                <th className="p-4 font-semibold text-sm">Jadwal</th>
                <th className="p-4 font-semibold text-sm text-center">Status</th>
                <th className="p-4 font-semibold text-sm text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-sm font-medium text-blue-600">#{booking.id}</td>
                    <td className="p-4 text-sm">{booking.user}</td>
                    <td className="p-4 text-sm">{booking.court}</td>
                    <td className="p-4 text-sm">
                      <div>{booking.date}</div>
                      <div className="text-xs text-gray-500">{booking.time}</div>
                    </td>
                    <td className="p-4 text-sm text-center">
                      {/* Dropdown untuk mengubah status */}
                      <select 
                        value={booking.status}
                        onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                        className={`border rounded px-2 py-1 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          booking.status === 'Confirmed' ? 'bg-green-50 text-green-700 border-green-200' :
                          booking.status === 'Cancelled' ? 'bg-red-50 text-red-700 border-red-200' :
                          'bg-yellow-50 text-yellow-700 border-yellow-200'
                        }`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td className="p-4 text-sm flex justify-center gap-2">
                      <button 
                        onClick={() => handleDelete(booking.id)}
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
                    Tidak ada data booking.
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

export default AdminBookingsPage;