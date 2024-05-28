import { Divider, Flex, Layout } from "antd"
import { Fragment } from "react"

import FamilyRegisterMenu from "../../components/menu/family-register"
import { useBreakPoints } from "../../hooks/use-breakpoints"
import "./styles.css"
import { selectSidebarOpened } from "../../store/menu/menu.selector"
import { useSelector } from "react-redux"

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
            {/* <Divider />
            <InfoMenu /> */}

            <FamilyRegisterMenu />

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

export default Sidebar
