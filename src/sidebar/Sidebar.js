import Mainframe from "../dashboard/Mainframe";
import Mobilesidebar from "./Mobilesidebar";
import { Navbar } from "./Navbar";
import { Mobilenavbar } from "./Mobilenavbar";
import { useState } from "react";

export default function Sidebar({ bookingdata }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="h-screen flex overflow-hidden bg-gray-100">
        <Mobilenavbar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        {/* Static sidebar for desktop */}
        <Navbar />
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <Mobilesidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
          <Mainframe bookingdata={bookingdata} />
        </div>
      </div>
    </>
  );
}
