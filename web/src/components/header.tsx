import { useContext } from "react";
import { BellIcon, ListIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";

import { PanelControllerContext } from "@/contexts/PanelController";

export function Header() {
  const { toggle } = useContext(PanelControllerContext);

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            type="button"
            className="p-2 rounded-md hover:bg-gray-100 cursor-pointer"
            onClick={toggle}
          >
            <ListIcon size={20} />
          </button>

          <nav className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
            <span>Dashboard</span>
            <span>/</span>
            <span className="text-gray-900">Início</span>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {/* Barra de Pesquisa */}
          <div className="relative hidden md:block">
            <MagnifyingGlassIcon
              size={20}
              className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
            />
            <input
              type="text"
              placeholder="Pesquisar aulas..."
              className="pl-10 w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Notificações */}
          <button
            type="button"
            className="relative p-2 rounded-md hover:bg-gray-100"
          >
            <BellIcon size={20} className="text-blue-600" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
          </button>

          {/* Menu do Usuário */}
          <div className="relative">
            <button
              type="button"
              className="relative h-8 w-8 rounded-full overflow-hidden"
            >
              <img
                className="h-full w-full object-cover"
                src="https://github.com/hfsdouglas.png"
                alt="Professor"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
