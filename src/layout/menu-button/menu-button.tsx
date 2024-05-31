// Importa o componente Button do pacote antd
import { Button } from "antd"

// Importa o arquivo de estilos CSS
import "./styles.css"

// Importa os ícones LuMenu e LuX do pacote react-icons/lu
import { LuMenu, LuX } from "react-icons/lu"

// Importa os hooks useDispatch e useSelector do pacote react-redux
import { useDispatch, useSelector } from "react-redux"

// Importa a ação toogleSidebar do arquivo local
import { toogleSidebar } from "../../store/menu/menu.action"

// Importa o seletor selectSidebarOpened do arquivo local
import { selectSidebarOpened } from "../../store/menu/menu.selector"

// Importa o tipo AppDispatch do arquivo local
import { AppDispatch } from "../../store/store"

// Define e exporta o componente MenuButton
const MenuButton = () => {
  // Usa o hook useDispatch para obter a função dispatch
  const dispatch = useDispatch<AppDispatch>()

  // Usa o hook useSelector para obter o valor de sidebarMenuOpened do estado
  const sidebarMenuOpened = useSelector(selectSidebarOpened)

  // Define a função toogleMenu que dispara a ação toogleSidebar quando chamada
  const toogleMenu = () => {
    dispatch(toogleSidebar())
  }

  // Retorna o componente Button com um ícone que muda dependendo do estado de sidebarMenuOpened
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

// Exporta o componente MenuButton como padrão
export default MenuButton
