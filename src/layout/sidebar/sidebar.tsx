import { Divider, Flex, Layout } from "antd"
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

const Sidebar = () => {
  const sidebarMenuOpened = useSelector(selectSidebarOpened)
  // const isAuthenticatedIdle = useSelector(selectIsSessionIdle)
  const breakpoints = useBreakPoints()

  return (
    <Fragment>
      <Layout.Sider
        collapsible
        collapsed={sidebarMenuOpened}
        trigger={null}
        collapsedWidth={breakpoints.isMobile ? 0 : 50}
        width={breakpoints.isMobile ? "100%" : 280}
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

export default Sidebar
