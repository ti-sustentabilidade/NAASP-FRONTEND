import { Menu } from "antd"
import { MenuItemType } from "antd/es/menu/interface"
import { GrUserAdd } from "react-icons/gr"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import menuAction from "../../store/menu/menu.action"
import { selectSidebarOpened } from "../../store/menu/menu.selector"
import { AppDispatch } from "../../store/store"

const FamilyRegisterMenu = () => {
  const dispatch = useDispatch<AppDispatch>()
  const sidebarMenuOpened = useSelector(selectSidebarOpened)

  const familyRegisterMenuItems: MenuItemType[] = [
    {
      key: "familyRegister",
      label: (
        <Link to={"/home"} style={{ fontSize: "16px" }}>
          Cadastro de Famílias
        </Link>
      ),
      icon: <GrUserAdd size={20} />,
      onClick: () => (!sidebarMenuOpened ? dispatch(menuAction.toogleSidebar()) : null),
    },
  ]

  return <Menu className='app-menu' items={familyRegisterMenuItems} mode='inline' />
}

export default FamilyRegisterMenu
