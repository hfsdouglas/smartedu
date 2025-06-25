import { createContext, useState } from "react";

interface PanelController {
  sidebar: string;
  header: string;
  button: string;
  icon: string;
  controller: boolean;
  toggle: () => void;
}

interface PanelControllerProviderProps {
  children: React.ReactNode;
}

export const PanelControllerContext = createContext({} as PanelController);

export function PanelControllerProvider({
  children,
}: PanelControllerProviderProps) {
  const [controller, setController] = useState<boolean>(true);

  const sidebar = controller ? "sidebar-expanded" : "sidebar-collapsed";
  const header = !controller ? "content-collapsed" : "content-expanded";

  // Se estiver colapsado, o botão é apenas um ícone, caso contrário, é um botão com texto
  const selected = !controller
    ? "data-[active=true]:text-blue-600 data-[active=true]:hover:bg-blue-100 data-[active=true]:bg-blue-50"
    : "data-[active=true]:text-blue-600 data-[active=true]:bg-blue-50 data-[active=true]:hover:bg-blue-100";

  const button = !controller
    ? `flex items-center justify-center hover:bg-gray-50 size-8 rounded-lg transition-colors durantion-200 cursor-pointer ${selected}`
    : `flex items-center hover:bg-gray-50 space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 cursor-pointer ${selected}`;

  // Icon
  const icon = !controller
    ? "flex items-center justify-center border-b border-gray-200 h-[75px]"
    : "flex items-center justify-between px-6 py-4 border-b border-gray-200 h-[75px]";

  function toggle() {
    setController((prev) => !prev);
  }

  return (
    <PanelControllerContext.Provider
      value={{ sidebar, header, controller, button, icon, toggle }}
    >
      {children}
    </PanelControllerContext.Provider>
  );
}
