'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Package, 
  Plus, 
  ShoppingCart, 
  Users, 
  User, 
  LogOut,
  Menu,
  X
} from 'lucide-react';

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

const menuItems = [
  {
    name: 'Home/Overview',
    href: '/dashboard',
    icon: Home
  },
  {
    name: 'Products',
    href: '/dashboard/admin/products',
    icon: Package
  },
  {
    name: 'Add Product',
    href: '/dashboard/admin/addproduct',
    icon: Plus
  },
  {
    name: 'Orders',
    href: '/dashboard/admin/orders',
    icon: ShoppingCart
  },
  {
    name: 'Manage Users',
    href: '/dashboard/admin/users',
    icon: Users
  },
  {
    name: 'Profile',
    href: '/dashboard/admin/profile',
    icon: User
  }
];

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...');
    // Example: router.push('/login');
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='mt-1 min-h-screen'>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
      >
        {isOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Header */}
        <div className="p-6 border-b border-gray-700">
          <h1 className="text-xl font-bold text-black">Admin Dashboard</h1>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-6">
          <div className="px-4 space-y-2 min-h-screen shadow-xl border-black ">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200
                    ${isActive 
                      ? 'bg-gray-100 text-black border-r-6 border-black' 
                      : 'text-black hover:bg-black-500'
                    }
                  `}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
               <div className="border-t border-gray-700 pt-4">
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-4 py-3 bg-black text-white text-sm font-medium  rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                <LogOut className="mr-3 h-5 w-5" />
                Logout
              </button>
            </div>
          </div>

          {/* Logout Section */}
          <div className=" px-4">
         
          </div>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="text-xs text-gray-500 text-center">
            Admin Panel v1.0
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;