// Importa o componente Menu do pacote antd
import { Menu } from "antd"

// Importa o tipo MenuItemType do pacote antd
import { MenuItemType } from "antd/es/menu/interface"
import { GrGroup } from "react-icons/gr"
import { useDispatch, useSelector } from "react-redux"

// Importa o componente Link do pacote react-router-dom
import { Link, useLocation } from "react-router-dom"

// Importa a ação menuAction do arquivo local
import menuAction from "../../store/menu/menu.action"

// Importa o seletor selectSidebarOpened do arquivo local
import { selectSidebarOpened } from "../../store/menu/menu.selector"

// Importa o tipo AppDispatch do arquivo local
import { AppDispatch } from "../../store/store"

// Define e exporta o componente FamilyRegisterMenu
const FamilyRegisterMenu = () => {
  // Usa o hook useDispatch para obter a função dispatch
  const dispatch = useDispatch<AppDispatch>()
  const location = useLocation()

  // Usa o hook useSelector para obter o valor de sidebarMenuOpened do estado
  const sidebarMenuOpened = useSelector(selectSidebarOpened)

  // Define os itens do menu de registro de família
  const familyRegisterMenuItems: MenuItemType[] = [
    {
      key: "familyRegister", // Chave única para o item do menu
      // Rótulo exibido para o item do menu
      label: (
        <Link to={"/home"} style={{ fontSize: "16px" }}>
          Cadastro de Famílias
        </Link>
      ),
      icon: <GrGroup size={20} />,
      onClick: () => (!sidebarMenuOpened ? dispatch(menuAction.toogleSidebar()) : null),
    },
  ]

  // Retorna o componente Menu com os itens do menu de registro de família
  return <Menu className='app-menu' items={familyRegisterMenuItems} mode='inline' selectedKeys={[location.pathname]} />
}

// Exporta o componente FamilyRegisterMenu como padrão
export default FamilyRegisterMenu
