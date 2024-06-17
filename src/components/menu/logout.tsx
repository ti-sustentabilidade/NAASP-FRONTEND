import { Menu } from "antd"
import { MenuItemType } from "antd/es/menu/interface"
import { BiLogOut } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import menuAction from "../../store/menu/menu.action"
import { selectSidebarOpened } from "../../store/menu/menu.selector"
import { AppDispatch } from "../../store/store"

const LogoutMenu = () => {
  const dispatch = useDispatch<AppDispatch>()
  const sidebarMenuOpened = useSelector(selectSidebarOpened)

  const logoutMenuItems: MenuItemType[] = [
    {
      key: "logout",
      label: (
        <Link to={"/"} style={{ fontSize: "16px" }}>
          Sair
        </Link>
      ),
      icon: <BiLogOut size={20} color='red' />,
      onClick: () => {
        !sidebarMenuOpened ? dispatch(menuAction.toogleSidebar()) : null
        window.location.reload()
      },
    },
  ]

  return <Menu className='app-menu' items={logoutMenuItems} mode='inline' />
}

export default LogoutMenu
