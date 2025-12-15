import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Layout = () => {
  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden font-sans">
      <Navbar />
      <main className="w-full h-full">
        <Outlet />
      </main>
    </div>
  );
};
