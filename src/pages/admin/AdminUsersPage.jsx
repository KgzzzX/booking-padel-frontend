import React, { useState } from 'react';

const AdminUsersPage = () => {
  // Dummy data user
  const [users, setUsers] = useState([
    { id: 'USR-001', name: 'Budi Santoso', email: 'budi@example.com', role: 'user' },
    { id: 'USR-002', name: 'Andi Pratama', email: 'andi@example.com', role: 'admin' },
    { id: 'USR-003', name: 'Citra Kirana', email: 'citra@example.com', role: 'user' },
  ]);

  // Fungsi untuk mengubah role user
  const handleRoleChange = (id, newRole) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, role: newRole } : user
    ));
  };

  // Fungsi untuk menghapus user
  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus pengguna ini?');
    if (confirmDelete) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50 text-gray-800">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Kelola User</h1>
          <p className="text-gray-600">Atur data pengguna dan hak akses (role) di sini.</p>
        </div>
      </div>

      {/* Tabel User */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200 text-gray-600">
                <th className="p-4 font-semibold text-sm">ID User</th>
                <th className="p-4 font-semibold text-sm">Nama</th>
                <th className="p-4 font-semibold text-sm">Email</th>
                <th className="p-4 font-semibold text-sm text-center">Role</th>
                <th className="p-4 font-semibold text-sm text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-sm font-medium text-gray-500">{user.id}</td>
                    <td className="p-4 text-sm font-medium">{user.name}</td>
                    <td className="p-4 text-sm text-gray-600">{user.email}</td>
                    <td className="p-4 text-sm text-center">
                      {/* Dropdown untuk mengubah role */}
                      <select 
                        value={user.role}
                        onChange={(e) => handleRoleChange(user.id, e.target.value)}
                        className={`border rounded px-2 py-1 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          user.role === 'admin' ? 'bg-purple-50 text-purple-700 border-purple-200' : 'bg-gray-50 text-gray-700 border-gray-200'
                        }`}
                      >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                      </select>
                    </td>
                    <td className="p-4 text-sm flex justify-center gap-2">
                      <button 
                        onClick={() => handleDelete(user.id)}
                        className="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-gray-500">
                    Tidak ada data pengguna.
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

export default AdminUsersPage;