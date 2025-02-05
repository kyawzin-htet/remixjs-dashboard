import type { MetaFunction } from "@remix-run/node";
import { PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useLanguage } from "~/contexts/LanguageContext";

// Mock data
const salesData = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 5000 },
  { month: 'Apr', sales: 2780 },
  { month: 'May', sales: 1890 },
  { month: 'Jun', sales: 2390 },
];

const marketShareData = [
  { name: 'Product A', value: 400 },
  { name: 'Product B', value: 300 },
  { name: 'Product C', value: 300 },
  { name: 'Product D', value: 200 },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Dashboard - Admin Panel" },
    { name: "description", content: "Admin dashboard overview" },
  ];
};




export default function Dashboard() {

  const { t } = useLanguage();

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {t("dashboardTitle")}
      </h1>
      
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Summary Cards */}
        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
          <h3 className="text-gray-700 dark:text-gray-400">{t("TotalSales")}</h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">$24,780</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
          <h3 className="text-gray-700 dark:text-gray-400">{t("ActiveUsers")}</h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">1,429</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
          <h3 className="text-gray-700 dark:text-gray-400">{t("NewOrders")}</h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">245</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
          <h3 className="text-gray-700 dark:text-gray-400">{t("ConversionRate")}</h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">2.4%</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {/* Line Chart */}
        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
          <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">{t("MonthlySales")}</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
          <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">{t("ProductMarketShare")}</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={marketShareData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
} 