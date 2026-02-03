import { Heart, Home, LogOut, MapPin, Package } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProfileLayOut = ({ children }: { children: React.ReactNode }) => {
  const menuItems = [
    { id: "account", icon: Home, label: "Account Information" },
    { id: "orders", icon: Package, label: "Order Details" },
    { id: "address", icon: MapPin, label: "Delivery Address" },
    { id: "wishlist", icon: Heart, label: "Wishlist" },
    { id: "logout", icon: LogOut, label: "Logout" },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  href={`/profile/${item.id}`}
                  key={item.id}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100"
                >
                  <Icon className="mr-3 h-5 w-5 text-gray-400" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {children}
    </div>
  );
};

export default ProfileLayOut;
