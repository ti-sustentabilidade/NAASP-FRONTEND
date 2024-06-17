import { Menu } from "antd"
import { MenuItemType } from "antd/es/menu/interface"
import { BiChurch } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"
import menuAction from "../../store/menu/menu.action"
import { selectSidebarOpened } from "../../store/menu/menu.selector"
import { AppDispatch } from "../../store/store"

const AddNaaspMenu = () => {
  const dispatch = useDispatch<AppDispatch>()
  const sidebarMenuOpened = useSelector(selectSidebarOpened)
  const location = useLocation()

  const addNaaspMenuItems: MenuItemType[] = [
    {
      key: "addNaasp",
      label: (
        <Link to={"/add-naasp"} style={{ fontSize: "16px" }}>
          Cadastrar novo NAASP
        </Link>
      ),
      icon: <BiChurch size={20} />,
      onClick: () => (!sidebarMenuOpened ? dispatch(menuAction.toogleSidebar()) : null),
    },
  ]

  return <Menu className='app-menu' items={addNaaspMenuItems} mode='inline' selectedKeys={[location.pathname]} />
}

export default AddNaaspMenu
