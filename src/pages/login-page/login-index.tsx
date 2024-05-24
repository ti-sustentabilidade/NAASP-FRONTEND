import { Button, Card, Col, Form, Row } from "antd"
import { useState } from "react"
import { Link } from "react-router-dom"
import InputText from "../../components/form/input-text"
import openNotification from "../../components/notification/notification"
import { login } from "../../services/requests/users-api"
import "./style.css"

function LoginIndex() {
  const [form] = Form.useForm()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isPasswordRequired, setIsPasswordRequired] = useState<boolean>(true)

  const handleLogin = async () => {
    setIsLoading(true)

    const passwordField = form.getFieldValue("password")
    const emailField = form.getFieldValue("email")

    const passwordRegex = new RegExp(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/
    )
    const isPasswordValid = passwordRegex.test(passwordField)

    if (!isPasswordValid) {
      openNotification(
        "error",
        "Senha Inválida",
        "topRight",
        "Máximo de 6 caracteres, pelo menos uma letra, um número e um caractere especial"
      )
      setIsLoading(false)
      return
    }
    const data = {
      email: emailField,
      // senha: passwordField
      senha: "",
    }
    console.log(data)
    await login(data).finally(() => {
      setIsLoading(false)
    })
  }

  const handleOnRestet = () => {
    form.resetFields()
  }

  return (
    <>
      <div className="naasp-logo">
        <img
          src="src/assets/naasp.png"
          alt="naasp-logo"
          style={{ width: "300px", height: "150px" }}
        />
      </div>
      <Row align={"middle"}>
        <Col>
          <Card className="card">
            <p className="title">Login</p>
            <Form form={form} onFinish={handleLogin}>
              <InputText
                placeholder="E-mail"
                name="email"
                type="email"
                required
              />
              <InputText
                placeholder="Senha"
                name="password"
                password
                required={isPasswordRequired}
              />

              <hr className="separator" />

              <Link
                style={{
                  color: "black",
                  fontFamily: "DM Sans",
                }}
                to="/forgot-password"
              >
                Esqueceu sua Senha?
              </Link>

              <div className="action-buttons">
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={isLoading}
                  loading={isLoading}
                >
                  <span className="action-buttons-text">
                    {isLoading ? "Entrando..." : "Entrar"}
                  </span>
                </Button>
                <br />
                <Button htmlType="button" onClick={handleOnRestet}>
                  <span className="action-buttons-text">Limpar</span>
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
