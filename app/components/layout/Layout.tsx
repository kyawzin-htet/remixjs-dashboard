import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { useAuth } from "~/contexts/AuthContext";
import Login from "~/routes/login";

export function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { currentUser } = useAuth();

  return (
    <div>
      { currentUser ?
        (
          <div className="min-h-screen">
          <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
          
          <div className="lg:pl-60">
            <Header onMenuClick={() => setSidebarOpen(true)} />
            
            <main className="py-10">
              <div className="px-4 sm:px-6 lg:px-8">
                {children}
              </div>
            </main>
          </div>
        </div> 
        ) : <Login />
      }
    </div>
  );
} 