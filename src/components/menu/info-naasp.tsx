import { Menu } from "antd"
import { MenuItemType } from "antd/es/menu/interface"
import { BiInfoCircle } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import menuAction from "../../store/menu/menu.action"
import { selectSidebarOpened } from "../../store/menu/menu.selector"
import { AppDispatch } from "../../store/store"

const InfoNaaspMenu = () => {
  const dispatch = useDispatch<AppDispatch>()
  const sidebarMenuOpened = useSelector(selectSidebarOpened)

  const infoNaaspMenuItems: MenuItemType[] = [
    {
      key: "infoNaasp",
      label: (
        <Link to={"/info-naasps"} style={{ fontSize: "16px" }}>
          Informações Naasps
        </Link>
      ),
      icon: <BiInfoCircle size={20} />,
      onClick: () => (!sidebarMenuOpened ? dispatch(menuAction.toogleSidebar()) : null),
    },
  ]

  return <Menu className='app-menu' items={infoNaaspMenuItems} mode='inline' />
}

export default InfoNaaspMenu
