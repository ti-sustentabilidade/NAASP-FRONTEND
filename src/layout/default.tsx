import { Layout } from "antd"
import { useSelector } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "../app-routes"
import { useBreakPoints } from "../hooks/use-breakpoints"
import { selectSidebarOpened } from "../store/menu/menu.selector"
import Header from "./header/header"
import Sidebar from "./sidebar/sidebar"
import "./styles.css"

const Default = () => {
  const sidebarMenuOpened = useSelector(selectSidebarOpened)
  const breakpoints = useBreakPoints()

  const location = window.location.pathname

  return (
    <BrowserRouter>
      {location == "/" || location == "/forgot-password" ? (
        <AppRoutes />
      ) : (
        <Layout style={{ minHeight: "100vh" }}>
          <Layout.Header>
            <Header />
          </Layout.Header>
          <Layout hasSider>
            <Sidebar />
            <Layout.Content>{!sidebarMenuOpened && breakpoints.isMobile ? null : <AppRoutes />} </Layout.Content>
          </Layout>
        </Layout>
      )}
    </BrowserRouter>
  )
}

export default Default
