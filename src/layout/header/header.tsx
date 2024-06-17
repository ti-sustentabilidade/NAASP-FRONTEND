// Importa os componentes Col e Row do pacote antd
import { Col, Row } from "antd"

// Importa o componente Fragment do pacote react/jsx-runtime
import { Fragment } from "react/jsx-runtime"

// Importa o arquivo de estilos CSS
import "./styles.css"

// Importa o componente MenuButton do arquivo local
import MenuButton from "../menu-button/menu-button"

// Define e exporta o componente Header
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
                <img src='assets/logo-naasp.png' alt='NAASP' className='brand' />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  )
}

// Exporta o componente Header como padrão
export default Header
