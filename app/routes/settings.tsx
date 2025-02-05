import type { MetaFunction } from "@remix-run/node";
import { useLanguage } from "~/contexts/LanguageContext";

export const meta: MetaFunction = () => {
  return [
    { title: "Dashboard - Admin Panel" },
    { name: "description", content: "Admin dashboard overview" },
  ];
};

export default function Settings() {

  const { t } = useLanguage();

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
        {t("SettingsTitle")}
      </h1>
      
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Settings */}
      </div>
    </div>
  );
} 