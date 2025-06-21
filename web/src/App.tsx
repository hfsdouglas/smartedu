import { RouterProvider } from "react-router/dom";

import { PanelControllerProvider } from "@/contexts/PanelController";

import { router } from "./routes";

export default function App() {
  return (
    <PanelControllerProvider>
      <RouterProvider router={router} />
    </PanelControllerProvider>
  );
}
