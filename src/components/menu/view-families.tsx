import { Menu } from "antd"
import { MenuItemType } from "antd/es/menu/interface"
import { CgViewList } from "react-icons/cg"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"
import menuAction from "../../store/menu/menu.action"
import { selectSidebarOpened } from "../../store/menu/menu.selector"
import { AppDispatch } from "../../store/store"

const ViewFamiliesMenu = () => {
  const dispatch = useDispatch<AppDispatch>()
  const sidebarMenuOpened = useSelector(selectSidebarOpened)
  const location = useLocation()

  const viewFamiliesMenuItems: MenuItemType[] = [
    {
      key: "viewFamilies",
      label: (
        <Link to={"/view-families"} style={{ fontSize: "16px" }}>
          Visualizar Familias Cadastradas
        </Link>
      ),
      icon: <CgViewList size={20} />,
      onClick: () => (!sidebarMenuOpened ? dispatch(menuAction.toogleSidebar()) : null),
    },
  ]

  return <Menu className='app-menu' items={viewFamiliesMenuItems} mode='inline' selectedKeys={[location.pathname]} />
}

export default ViewFamiliesMenu
