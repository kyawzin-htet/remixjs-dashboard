
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ThemeToggle } from "../../components/ui/ThemeToggle";
import userAvatar from '../../assets/useravatar.png';
import { useAuth } from "~/contexts/AuthContext";
import { useLanguage } from "~/contexts/LanguageContext";


export function Header({ onMenuClick }: { onMenuClick: () => void }) {
    
  const { currentUser } = useAuth();

  const { language, toggleLanguage } = useLanguage();


  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
            <div className="flex items-center gap-2"></div>
            <button className="lg:hidden" onClick={onMenuClick} type="submit">
                <Bars3Icon className="h-6 w-6" color="gray"/>
            </button>
        </div>
        
        <div className="flex items-center gap-3">
           <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {language === "en" ? (
              <>
                <span className="text-xl">🇯🇵</span>
                {/* <span>日本語</span> */}
              </>
            ) : (
              <>
                <span className="text-xl">🇺🇸</span>
                {/* <span>English</span> */}
              </>
            )}
          </button>
          
          <ThemeToggle />

          <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-600">
            {
              currentUser?.photoURL ?
              <img src={currentUser.photoURL} alt="User" className="rounded-full" /> : <img src={userAvatar} alt="User" className="rounded-full" />
            }
          </div>
          
         
        </div>
      </div>
    </header>
  );
} 