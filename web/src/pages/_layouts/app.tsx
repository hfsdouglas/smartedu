import { useContext } from "react";
import { Outlet } from "react-router";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { PanelControllerContext } from "@/contexts/PanelController";

export function AppLayout() {
  const { header } = useContext(PanelControllerContext);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${header}`}
      >
        <Header />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
