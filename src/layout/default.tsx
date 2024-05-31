// Importa o componente Layout do pacote antd
import { Layout } from "antd"

// Importa o hook useSelector do pacote react-redux
import { useSelector } from "react-redux"

// Importa o componente BrowserRouter do pacote react-router-dom
import { BrowserRouter } from "react-router-dom"

// Importa o componente AppRoutes do arquivo local
import AppRoutes from "../app-routes"

// Importa o hook useBreakPoints do arquivo local
import { useBreakPoints } from "../hooks/use-breakpoints"

// Importa o seletor selectSidebarOpened do arquivo local
import { selectSidebarOpened } from "../store/menu/menu.selector"

// Importa o componente Header do arquivo local
import Header from "./header/header"

// Importa o componente Sidebar do arquivo local
import Sidebar from "./sidebar/sidebar"

// Importa o arquivo de estilos CSS
import "./styles.css"

// Define e exporta o componente Default
const Default = () => {
  // Usa o hook useSelector para obter o valor de sidebarMenuOpened do estado
  const sidebarMenuOpened = useSelector(selectSidebarOpened)

  // Usa o hook useBreakPoints para obter os pontos de interrupção atuais
  const breakpoints = useBreakPoints()

  // Obtém o caminho atual da janela
  const location = window.location.pathname

  // Retorna o componente BrowserRouter com rotas condicionais
  return (
    <BrowserRouter>
      {location == "/" || location == "/forgot-password" ? (
        <AppRoutes /> // Renderiza o componente AppRoutes se o caminho for "/" ou "/forgot-password"
      ) : (
        <Layout style={{ minHeight: "100vh" }}> // Caso contrário, renderiza um Layout com cabeçalho, barra lateral e conteúdo
          <Layout.Header>
            <Header /> // Renderiza o componente Header no cabeçalho do Layout
          </Layout.Header>
          <Layout hasSider>
            <Sidebar /> // Renderiza o componente Sidebar na barra lateral do Layout
            <Layout.Content>{!sidebarMenuOpened && breakpoints.isMobile ? null : <AppRoutes />}</Layout.Content> // Renderiza o componente AppRoutes no conteúdo do Layout se o menu da barra lateral não estiver aberto e o dispositivo não for móvel
          </Layout>
        </Layout>
      )}
    </BrowserRouter>
  )
}

// Exporta o componente Default como padrão
export default Default
