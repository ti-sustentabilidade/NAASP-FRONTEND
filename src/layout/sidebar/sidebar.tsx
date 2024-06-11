// Importa os componentes Divider, Flex e Layout do pacote antd
import { Flex, Layout } from "antd"

// Importa o componente Fragment do pacote react
import { Fragment } from "react"

// Importa o componente FamilyRegisterMenu do arquivo local
import FamilyRegisterMenu from "../../components/menu/family-register"

// Importa o hook useBreakPoints do arquivo local
import { useBreakPoints } from "../../hooks/use-breakpoints"

// Importa o arquivo de estilos CSS
import "./styles.css"

// Importa o seletor selectSidebarOpened do arquivo local
import { selectSidebarOpened } from "../../store/menu/menu.selector"

// Importa o hook useSelector do pacote react-redux
import { useSelector } from "react-redux"

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
            {/* <Divider />
            <InfoMenu /> */}

            <FamilyRegisterMenu /> // Renderiza o componente FamilyRegisterMenu

            {/* <Divider />
            <ViewFamiliesMenu />

            <Divider />
            <AddNaaspMenu />

            <Divider />
            <AddNewUserMenu /> */}
          </Layout>
        </Flex>
      </Layout.Sider>
    </Fragment>
  )
}

// Exporta o componente Sidebar como padrão
export default Sidebar
