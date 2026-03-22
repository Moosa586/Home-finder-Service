import React, { useEffect, useState } from "react";

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setBookings(savedBookings);
    setUsers(savedUsers);
  };

  const updateStatus = (id, status) => {
    const updated = bookings.map((b) => (b.id === id ? { ...b, status } : b));
    localStorage.setItem("bookings", JSON.stringify(updated));
    setBookings(updated);
  };

  const deleteBooking = (id) => {
    if (!window.confirm("Delete this booking?")) return;
    const filtered = bookings.filter((b) => b.id !== id);
    localStorage.setItem("bookings", JSON.stringify(filtered));
    setBookings(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-teal-700 mb-6">Admin Dashboard</h1>

      {/* Users Section */}
      <h2 className="text-xl font-semibold mt-4">Registered Users</h2>
      {users.length === 0 ? (
        <p>No users registered yet.</p>
      ) : (
        <div className="bg-white shadow rounded my-4 p-4 overflow-auto">
          <table className="w-full text-center">
            <thead className="bg-teal-700 text-white">
              <tr>
                <th className="p-2">Email</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-b">
                  <td className="p-2">{u.email}</td>
                  <td className="p-2">
                    {/* Optional: delete user */}
                    <button
                      onClick={() => {
                        if (!window.confirm("Delete user?")) return;
                        const filtered = users.filter((us) => us.id !== u.id);
                        localStorage.setItem("users", JSON.stringify(filtered));
                        setUsers(filtered);
                      }}
                      className="bg-red-600 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Bookings Section */}
      <h2 className="text-xl font-semibold mt-6">All Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <div className="overflow-auto mt-2">
          <table className="w-full bg-white shadow rounded text-center">
            <thead className="bg-teal-700 text-white">
              <tr>
                <th className="p-2">User Email</th>
                <th className="p-2">Service</th>
                <th className="p-2">Date</th>
                <th className="p-2">Status</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.id} className="border-b">
                  <td className="p-2">{b.email || "Unknown"}</td>
                  <td className="p-2">{b.service}</td>
                  <td className="p-2">{b.date}</td>
                  <td className="p-2 font-semibold">{b.status}</td>
                  <td className="p-2 space-x-1">
                    <button
                      onClick={() => updateStatus(b.id, "Approved")}
                      className="bg-green-600 text-white px-2 py-1 rounded"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateStatus(b.id, "Pending")}
                      className="bg-yellow-500 text-white px-2 py-1 rounded"
                    >
                      Pending
                    </button>
                    <button
                      onClick={() => deleteBooking(b.id)}
                      className="bg-red-600 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
