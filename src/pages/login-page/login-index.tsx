// Importa os componentes Button, Card, Col, Form e Row do pacote antd
import { Button, Card, Col, Form, Row } from "antd"

// Importa os hooks useEffect e useState do pacote react
import { useEffect, useState } from "react"

// Importa os hooks useDispatch e useSelector do pacote react-redux
import { useDispatch, useSelector } from "react-redux"

// Importa os componentes Link e useNavigate do pacote react-router-dom
import { Link, useNavigate } from "react-router-dom"

// Importa o componente InputText do arquivo local
import InputText from "../../components/form/input-text"

// Importa a função openNotification do arquivo local
import openNotification from "../../components/notification/notification"

// Importa a ação login do arquivo local
import { login } from "../../store/app/users/users"

// Importa o seletor selectLoginStatus do arquivo local
import { selectLoginStatus } from "../../store/app/users/users-selector"

// Importa o enum StatusEnum do arquivo local
import { StatusEnum } from "../../store/enums/StatusEnum"

// Importa o tipo AppDispatch do arquivo local
import { AppDispatch } from "../../store/store"

// Importa o arquivo de estilos CSS
import "./style.css"

// Define e exporta o componente LoginIndex
function LoginIndex() {
  // Usa o hook Form.useForm para criar uma instância de form
  const [form] = Form.useForm()

  // Usa o hook useDispatch para obter a função dispatch
  const dispatch = useDispatch<AppDispatch>()

  // Usa o hook useNavigate para obter a função navigate
  const navigate = useNavigate()

  // Define o estado isLoading e a função setIsLoading usando o hook useState
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // Usa o hook useSelector para obter o valor de loginStatus do estado
  const loginStatus = useSelector(selectLoginStatus)

  // Define a função assíncrona handleLogin
  const handleLogin = async () => {
    // Define isLoading como true
    setIsLoading(true)

    // Obtém os valores dos campos password e email do form
    const passwordField = form.getFieldValue("password")
    const emailField = form.getFieldValue("email")

    // Define a expressão regular para validar a senha
    const passwordRegex = new RegExp(/^(?=.*)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/)

    // Verifica se a senha é válida
    const isPasswordValid = passwordRegex.test(passwordField)

    // Se a senha não for válida, abre uma notificação de erro e define isLoading como false
    if (!isPasswordValid) {
      openNotification(
        "error",
        "Senha Inválida",
        "topRight",
        "Mínimo de 6 caracteres, pelo menos uma letra, um número e um caractere especial",
      )

      setIsLoading(false)
      return
    }

    // Define os dados para o login
    const data = {
      email: emailField,
      senha: passwordField,
    }

    // Dispara a ação de login com os dados
    dispatch(login(data))
  }

  // Define a função handleOnRestet que reseta os campos do form
  const handleOnRestet = () => {
    form.resetFields()
  }

  // Usa o hook useEffect para navegar para "/home" quando o loginStatus for FULFILLED
  // e para definir isLoading como false quando o loginStatus for REJECTED
  useEffect(() => {
    if (loginStatus == StatusEnum.FULFILLED) {
      navigate("/home")
    }
    if (loginStatus == StatusEnum.REJECTED) {
      setIsLoading(false)
    }
  }, [loginStatus])

  // Retorna o componente Form com vários campos de entrada e botões
  return (
    <>
      <div className='naasp-logo'>
        <img src='src/assets/naasp.png' alt='naasp-logo' style={{ width: "300px", height: "150px" }} />
      </div>
      <Row align={"middle"}>
        <Col>
          <Card className='card'>
            <p className='title'>Login</p>
            <Form form={form} onFinish={handleLogin}>
              <InputText placeholder='E-mail' name='email' type='email' required />
              <InputText placeholder='Senha' name='password' password required />

              <hr className='separator' />

              <Link
                style={{
                  color: "black",
                  fontFamily: "DM Sans",
                }}
                to='/forgot-password'
              >
                Esqueceu sua Senha?
              </Link>

              <div className='action-buttons'>
                <Button type='primary' htmlType='submit' disabled={isLoading} loading={isLoading}>
                  <span className='action-buttons-text'>{isLoading ? "Entrando..." : "Entrar"}</span>
                </Button>
                <br />
                <Button htmlType='button' onClick={handleOnRestet}>
                  <span className='action-buttons-text'>Limpar</span>
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default LoginIndex
