// app/admin/layout.js

import AdminSidebar from "../web/components/AdminrelatedComonents/AdminSidebar";


export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 mt-2 ml-12 container mx-auto  overflow-auto p-6 lg:ml-0">
        {children}
      </main>
    </div>
  );
}