// Importa os componentes Divider, Flex e Layout do pacote antd
import { Divider, Flex, Layout } from "antd"

// Importa o componente Fragment do pacote react
import { Fragment } from "react"

import { useSelector } from "react-redux"
import AddNaaspMenu from "../../components/menu/add-naasp"
import AddNewUserMenu from "../../components/menu/add-user"
import FamilyRegisterMenu from "../../components/menu/family-register"
import InfoNaaspMenu from "../../components/menu/info-naasp"
import ViewFamiliesMenu from "../../components/menu/view-families"
import { useBreakPoints } from "../../hooks/use-breakpoints"
import { selectSidebarOpened } from "../../store/menu/menu.selector"
import "./styles.css"
import LogoutMenu from "../../components/menu/logout"

// Define e exporta o componente Sidebar
const Sidebar = () => {
  // Usa o hook useSelector para obter o valor de sidebarMenuOpened do estado
  const sidebarMenuOpened = useSelector(selectSidebarOpened)

  // Usa o hook useBreakPoints para obter os pontos de interrupção atuais
  const breakpoints = useBreakPoints()

  // Retorna o componente Layout.Sider com um menu de registro de família
  return (
    <Fragment>
      <Layout.Sider
        collapsible // O Layout.Sider é colapsível
        collapsed={sidebarMenuOpened} // O estado colapsado é controlado pela propriedade sidebarMenuOpened
        trigger={null} // Não há gatilho para colapsar ou expandir o Layout.Sider
        collapsedWidth={breakpoints.isMobile ? 0 : 50} // A largura colapsada é 0 em dispositivos móveis e 50 em outros dispositivos
        width={breakpoints.isMobile ? "100%" : 280} // A largura é 100% em dispositivos móveis e 280 em outros dispositivos
      >
        <Flex vertical={true} style={{ height: "100%" }}>
          <Layout className='menu-top'>
            <InfoNaaspMenu />
            <FamilyRegisterMenu />
            <ViewFamiliesMenu />
            <AddNaaspMenu />
            <AddNewUserMenu />
            <Divider />
            <LogoutMenu />
          </Layout>
        </Flex>
      </Layout.Sider>
    </Fragment>
  )
}

// Exporta o componente Sidebar como padrão
export default Sidebar
