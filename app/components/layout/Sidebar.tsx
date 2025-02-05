import { NavLink } from "@remix-run/react";
import {
  HomeIcon,
  UsersIcon,
  ShoppingBagIcon,
  CogIcon,
  XMarkIcon,
  ArrowLeftCircleIcon,
  CreditCardIcon
} from "@heroicons/react/24/outline";
import { useAuth } from "~/contexts/AuthContext";
import { useLanguage } from "~/contexts/LanguageContext";



export function Sidebar({ 
  isOpen, 
  setIsOpen 
}: { 
  isOpen: boolean; 
  setIsOpen: (open: boolean) => void;
}) {

  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  }

  const { t } = useLanguage();

  const navigation = [
    { name: t("Dashboard"), to: "/dashboard", icon: HomeIcon },
    { name: t("Users"), to: "/users", icon: UsersIcon },
    { name: t("Products"), to: "/products", icon: ShoppingBagIcon },
    { name: t("Payment"), to: "/pay", icon: CreditCardIcon },
    { name: t("Settings"), to: "/settings", icon: CogIcon },
  ];

  return (
    <>
      {/* Mobile sidebar overlay */}
      <div
        className={`fixed inset-0 z-40 bg-gray-600 bg-opacity-75 transition-opacity lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-60 bg-white dark:bg-gray-800 transform transition-transform lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center justify-between px-4 border-b dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
               Admin
            </h2>
            <button className="lg:hidden" onClick={() => setIsOpen(false)}>
              <XMarkIcon className="h-6 w-6" color="gray"/>
            </button>
          </div>

          <nav className="flex-1 space-y-1 px-2 py-4">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                  }`
                }
              >
                <item.icon className="mr-3 h-6 w-6" />
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* logout */}
          <div className="border-t dark:border-gray-700 px-2 py-4">
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <ArrowLeftCircleIcon className="mr-3 h-6 w-6" />
              {t("Logout")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
} 