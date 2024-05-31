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
      <Row wrap={false} align={"middle"}> // Cria uma linha que não quebra e alinha seus itens verticalmente no meio
        <Col flex={"50px"}> // Cria uma coluna com largura fixa de 50px
          <MenuButton /> // Renderiza o componente MenuButton
        </Col>
        <Col flex={"auto"}> // Cria uma coluna com largura automática
          <Row wrap={false} align={"middle"}> // Cria uma linha que não quebra e alinha seus itens verticalmente no meio
            <Col flex={"none"}> // Cria uma coluna sem flexibilidade
              <a className='logo' href=''> // Cria um link com a classe CSS 'logo'
                <img src='src/assets/logo-naasp.png' alt='NAASP' className='brand' /> // Renderiza uma imagem com a classe CSS 'brand'
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
