import { Button, Card, Col, Form, Row } from "antd"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import InputText from "../../components/form/input-text"
import openNotification from "../../components/notification/notification"
import { login } from "../../store/app/users/users"
import { AppDispatch } from "../../store/store"
import "./style.css"

function LoginIndex() {
  const [form] = Form.useForm()
  const dispatch = useDispatch<AppDispatch>()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const user = useSelector((state: any) => state.user)

  const handleLogin = async () => {
    setIsLoading(true)

    const passwordField = form.getFieldValue("password")
    const emailField = form.getFieldValue("email")

    const passwordRegex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/)
    const isPasswordValid = passwordRegex.test(passwordField)

    if (!isPasswordValid) {
      openNotification(
        "error",
        "Senha Inválida",
        "topRight",
        "Mínimo de 6 caracteres, pelo menos uma letra, um número e um caractere especial",
      )

      setIsLoading(false)
    }
    const data = {
      email: emailField,
      // senha: passwordField
      senha: "",
    }
    console.log(data)
    dispatch(login(form.getFieldsValue()))
  }

  const handleOnRestet = () => {
    form.resetFields()
  }

  console.log(user)

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
