import React, { useState } from 'react';

const AdminSchedulesPage = () => {
  // Dummy data jadwal per lapangan
  const [selectedCourt, setSelectedCourt] = useState('Lapangan Indoor 1');
  const [timeSlots, setTimeSlots] = useState([
    { id: 1, time: '08:00 - 09:00', status: 'Open' },
    { id: 2, time: '09:00 - 10:00', status: 'Open' },
    { id: 3, time: '10:00 - 11:00', status: 'Closed' },
    { id: 4, time: '11:00 - 12:00', status: 'Open' },
    { id: 5, time: '13:00 - 14:00', status: 'Open' },
    { id: 6, time: '14:00 - 15:00', status: 'Open' },
    { id: 7, time: '19:00 - 20:00', status: 'Open' },
    { id: 8, time: '20:00 - 21:00', status: 'Closed' },
  ]);

  // Fungsi untuk toggle status slot (Open/Closed)
  const toggleSlotStatus = (id) => {
    setTimeSlots(timeSlots.map(slot => 
      slot.id === id ? { ...slot, status: slot.status === 'Open' ? 'Closed' : 'Open' } : slot
    ));
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50 text-gray-800">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Pengaturan Jadwal</h1>
        <p className="text-gray-600">Kelola ketersediaan slot waktu untuk setiap lapangan.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar: Pilih Lapangan */}
        <div className="lg:col-span-1 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <h2 className="font-semibold mb-4 text-sm uppercase text-gray-400">Pilih Lapangan</h2>
          <div className="space-y-2">
            {['Lapangan Indoor 1', 'Lapangan Indoor 2', 'Lapangan Outdoor 1'].map((court) => (
              <button
                key={court}
                onClick={() => setSelectedCourt(court)}
                className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${
                  selectedCourt === court 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {court}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content: Slot Waktu */}
        <div className="lg:col-span-3 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">{selectedCourt}</h2>
            <span className="text-sm text-gray-500 italic">Klik pada status untuk mengubah ketersediaan</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {timeSlots.map((slot) => (
              <div 
                key={slot.id} 
                className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow"
              >
                <div>
                  <p className="text-xs text-gray-400 font-medium">Jam Operasional</p>
                  <p className="font-bold text-gray-700">{slot.time}</p>
                </div>
                <button
                  onClick={() => toggleSlotStatus(slot.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                    slot.status === 'Open' 
                      ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                      : 'bg-red-100 text-red-700 hover:bg-red-200'
                  }`}
                >
                  {slot.status === 'Open' ? '🔓 Tersedia' : '🔒 Ditutup'}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-50">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Simpan Perubahan Jadwal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSchedulesPage;