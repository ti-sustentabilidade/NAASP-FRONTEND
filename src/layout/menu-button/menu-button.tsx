import { Button } from "antd"
import "./styles.css"

import { LuMenu, LuX } from "react-icons/lu"
import { useDispatch, useSelector } from "react-redux"
import { toogleSidebar } from "../../store/menu/menu.action"
import { selectSidebarOpened } from "../../store/menu/menu.selector"
import { AppDispatch } from "../../store/store"

const MenuButton = () => {
  const dispatch = useDispatch<AppDispatch>()
  const sidebarMenuOpened = useSelector(selectSidebarOpened)

  const toogleMenu = () => {
    dispatch(toogleSidebar())
  }

  return (
    <Button onClick={toogleMenu} className={`app-menu-button ${!sidebarMenuOpened ?? "is-active"}`}>
      {sidebarMenuOpened ? (
        <LuMenu className='app-menu-button-icon' size={28} />
      ) : (
        <LuX className='app-menu-button-icon' size={28} />
      )}
    </Button>
  )
}

export default MenuButton
