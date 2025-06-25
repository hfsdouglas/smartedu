import {
  GearIcon,
  HouseLineIcon,
  MonitorPlayIcon,
  PlusCircleIcon,
  UserIcon,
} from "@phosphor-icons/react";
import { useContext } from "react";
import { PanelControllerContext } from "@/contexts/PanelController";
import { Link, useLocation } from "react-router";

const links = [
  { to: "/", label: "Dashboard" },
  { to: "/aulas", label: "Aulas" },
  { to: "/nova-aula", label: "Nova Aula" },
  { to: "/perfil", label: "Perfil" },
];

export function Sidebar() {
  const { sidebar, controller, button, icon } = useContext(
    PanelControllerContext
  );

  const location = useLocation();

  return (
    <div
      className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 shadow-lg transition-all duration-300 z-50 ${sidebar}`}
    >
      <div className="flex flex-col h-full">
        {/* Logo e Toggle */}
        <div className={icon}>
          <div className="flex items-center space-x-2">
            <div className="size-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SE</span>
            </div>
            {controller && (
              <span className="font-semibold text-gray-900">SmartEdu</span>
            )}
          </div>
        </div>

        {controller && (
          /* Perfil do Professor */
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
        )}

        {/* Menu de Navegação */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {links.map(({ to, label }) => {
              const isActive = location.pathname === to;

              return (
                <li key={label}>
                  <Link to={to} className={button} data-active={isActive}>
                    {to === "/" && (
                      <>
                        <HouseLineIcon size={20} />
                        {controller && (
                          <span className="font-medium">Dashboard</span>
                        )}
                      </>
                    )}

                    {to === "/aulas" && (
                      <>
                        <MonitorPlayIcon size={20} />
                        {controller && (
                          <span className="font-medium">Minhas Aulas</span>
                        )}
                      </>
                    )}

                    {to === "/nova-aula" && (
                      <>
                        <PlusCircleIcon size={20} />
                        {controller && (
                          <span className="font-medium">Adicionar Aula</span>
                        )}
                      </>
                    )}

                    {to === "/perfil" && (
                      <>
                        <UserIcon size={20} />
                        {controller && (
                          <span className="font-medium">Perfil</span>
                        )}
                      </>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Configurações */}
        <div className="p-4 border-t border-gray-200">
          <button type="button" className={`${button} w-full`}>
            <GearIcon size={20} />
            {controller && <span className="font-medium">Configurações</span>}
          </button>
        </div>
      </div>
    </div>
  );
}
