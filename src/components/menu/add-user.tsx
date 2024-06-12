import { Menu } from "antd"
import { MenuItemType } from "antd/es/menu/interface"
import { BiUserPlus } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import menuAction from "../../store/menu/menu.action"
import { selectSidebarOpened } from "../../store/menu/menu.selector"
import { AppDispatch } from "../../store/store"

const AddNewUserMenu = () => {
  const dispatch = useDispatch<AppDispatch>()
  const sidebarMenuOpened = useSelector(selectSidebarOpened)

  const addNewUserMenuItems: MenuItemType[] = [
    {
      key: "addNewUser",
      label: (
        <Link to={"/add-user"} style={{ fontSize: "16px" }}>
          Cadastrar novo usuário
        </Link>
      ),
      icon: <BiUserPlus size={20} />,
      onClick: () => (!sidebarMenuOpened ? dispatch(menuAction.toogleSidebar()) : null),
    },
  ]

  return <Menu className='app-menu' items={addNewUserMenuItems} mode='inline' />
}

export default AddNewUserMenu
