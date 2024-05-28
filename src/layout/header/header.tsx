import { Col, Row } from "antd"
import { Fragment } from "react/jsx-runtime"
import "./styles.css"
import MenuButton from "../menu-button/menu-button"

const Header = () => {
  return (
    <Fragment>
      <Row wrap={false} align={"middle"}>
        <Col flex={"50px"}>
          <MenuButton />
        </Col>
        <Col flex={"auto"}>
          <Row wrap={false} align={"middle"}>
            <Col flex={"none"}>
              <a className='logo' href=''>
                <img src='src/assets/logo-naasp.png' alt='NAASP' className='brand' />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Header
