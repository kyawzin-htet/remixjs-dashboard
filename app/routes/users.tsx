import type { MetaFunction } from "@remix-run/node";
import DataTable from "~/components/DataTable";
import { useLanguage } from "~/contexts/LanguageContext";

// Mock user data
const mockUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    status: "Active",
    location: "New York"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    status: "Active",
    location: "London"
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    status: "Inactive",
    location: "Singapore"
  },
  {
    id: 4,
    name: "Alice Williams",
    email: "alice.williams@example.com",
    status: "Active",
    location: "Sydney"
  },
  {
    id: 5,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    status: "Active",
    location: "Berlin"
  },
  {
    id: 6,
    name: "Eva Davis",
    email: "eva.davis@example.com",
    status: "Inactive",
    location: "Toronto"
  },
  {
    id: 7,
    name: "Frank Miller",
    email: "frank.miller@example.com",
    status: "Active",
    location: "San Francisco"
  },
  {
    id: 8,
    name: "Grace Lee",
    email: "grace.lee@example.com",
    status: "Active",
    location: "Seoul"
  },
  {
    id: 9,
    name: "Henry Wilson",
    email: "henry.wilson@example.com",
    status: "Active",
    location: "Dubai"
  },
  {
    id: 10,
    name: "Ivy Chen",
    email: "ivy.chen@example.com",
    status: "Inactive",
    location: "Shanghai"
  },
  {
    id: 11,
    name: "Ivy Chen",
    email: "ivy.chen@example.com",
    status: "Inactive",
    location: "Shanghai"
  },
  {
    id: 12,
    name: "Ivy Chen",
    email: "ivy.chen@example.com",
    status: "Inactive",
    location: "Shanghai"
  }
];

// Let's update the columns to include the new fields
const columns = [
  { header: 'ID', accessor: 'id' },
  { header: 'Name', accessor: 'name' },
  { header: 'Email', accessor: 'email' },
  // { header: 'Department', accessor: 'department' },
  { header: 'Location', accessor: 'location' },
  // { 
  //   header: 'Role', 
  //   accessor: 'role',
  //   cell: (row: any) => (
  //     <span className={`inline-flex rounded-full px-2 text-xs font-semibold ${
  //       row.role === 'Admin' 
  //         ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  //         : row.role === 'Editor'
  //         ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
  //         : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
  //     }`}>
  //       {row.role}
  //     </span>
  //   )
  // },
  {
    header: 'Status',
    accessor: 'status',
    cell: (row: any) => (
      <span className={`inline-flex rounded-full px-2 text-xs font-semibold ${
        row.status === 'Active'
          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      }`}>
        {row.status}
      </span>
    )
  },
  // { header: 'Last Login', accessor: 'lastLogin' },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Users - Admin Panel" },
    { name: "description", content: "User management dashboard" },
  ];
};

export default function Users() {

  const { t } = useLanguage(); 

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {t("UserTitle")}
        </h1>
        <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
          {t("AddUser")}
        </button>
      </div>
      
      {/* <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800"> */}
        <DataTable 
          columns={columns} 
          data={mockUsers} 
          itemsPerPage={10}
        />
      {/* </div> */}
    </div>
  );
} 