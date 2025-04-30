import { AdminLoginForm } from "@/components/admincomponents/adminlogin";

export default function AdminLogin() {
  return (
    <div className="flex flex-col items-center justify-center h-lvh gap-6">
      <div className="w-fit h-fit text-center">
        <h1 className="text-lg font-extrabold">HELLO ADMINISTRATOR</h1>
        <p className="text-sm text-gray-400">Kindly fill in your details to access your Dashboard</p>
      </div>
      <div className="w-1/3 mx-auto ">
        <AdminLoginForm />
      </div>
    </div>
  );
}
