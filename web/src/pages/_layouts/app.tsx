import { useState } from "react";
import { Outlet } from "react-router";

export function AppLayout() {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(true);

  function handleSidebarToggle() {
    setToggleSidebar(!toggleSidebar);
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 shadow-lg transition-all duration-300 z-50 ${
          toggleSidebar ? "sidebar-expanded" : "sidebar-collapsed"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo e Toggle */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 h-[75px]">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SE</span>
              </div>
              <span className="font-semibold text-gray-900">SmartEdu</span>
            </div>
          </div>

          {/* Perfil do Professor */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://github.com/hfsdouglas.png"
                  alt="Prof. João Silva"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Prof. João Silva
                </p>
                <p className="text-xs text-gray-500 truncate">Matemática</p>
              </div>
            </div>
          </div>

          {/* Menu de Navegação */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              <li>
                <a
                  href="dashboard.html"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 bg-blue-50 text-blue-600 border-r-2 border-blue-600"
                >
                  <span className="font-medium">Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="minhas-aulas.html"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                >
                  <span className="font-medium">Minhas Aulas</span>
                </a>
              </li>
              <li>
                <a
                  href="adicionar-aula.html"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                >
                  <span className="font-medium">Adicionar Aula</span>
                </a>
              </li>
              <li>
                <a
                  href="perfil.html"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                >
                  <span className="font-medium">Perfil</span>
                </a>
              </li>
              <li>
                <a
                  href="configuracoes.html"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                >
                  <span className="font-medium">Configurações</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-gray-200">
            <button
              type="button"
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200"
            >
              <span className="ml-3">Sair</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          toggleSidebar ? "content-expanded" : "content-collapsed"
        }`}
      >
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                type="button"
                className="p-2 rounded-md hover:bg-gray-100"
                onClick={handleSidebarToggle}
              ></button>

              <nav className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
                <span>Dashboard</span>
                <span>/</span>
                <span className="text-gray-900">Início</span>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              {/* Barra de Pesquisa */}
              <div className="relative hidden md:block">
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

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
