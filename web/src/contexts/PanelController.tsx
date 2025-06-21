import { createContext, useState } from "react";

interface PanelController {
  sidebar: string;
  header: string;
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

  var sidebar = controller ? "sidebar-expanded" : "sidebar-collapsed";
  var header = !controller ? "content-collapsed" : "content-expanded";

  function toggle() {
    setController((prev) => !prev);
  }

  return (
    <PanelControllerContext.Provider
      value={{ sidebar, header, controller, toggle }}
    >
      {children}
    </PanelControllerContext.Provider>
  );
}
