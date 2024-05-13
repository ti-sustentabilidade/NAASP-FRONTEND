import { Button, Card, Form } from "antd"
import { useState } from "react"
import InputText from "../../components/form/input-text"
import { openNotification } from "../../components/notification/notification"
import "./index.css"
import ForgotPasswordIndex from "./forgot-password"

function LoginIndex() {
  const [form] = Form.useForm()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleLogin = async () => {
    setIsLoading(true)

    const passwordField = form.getFieldValue("password")
    const emailField = form.getFieldValue("email")

    const passwordRegex = new RegExp(
      // /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
      // 8 letter password, with at least a symbol, upper and lower case letters and a number

      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,6}$/
      // Minimum six characters, at least one letter, one number and one special character:
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
    try {
      // Substitua a URL abaixo pelo endpoint de login do seu backend
      const response = await fetch("http://seu-backend.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailField, passwordField }),
      })
      const data = await response.json()

      if (data.success) {
        // Redireciona o usuário para a tela correspondente ao seu papel
        switch (data.userRole) {
          case "administrador":
            window.location.href = "/tela-administrador"
            break
          case "assistente":
            window.location.href = "/tela-assistente"
            break
          default:
            // Tratar outros casos ou erro
            break
        }
      } else {
        // Tratar falha no login
        openNotification("error", "Falha no login", "topRight", data.message)
      }
    } catch (error: any) {
      // Tratar erro de rede ou desconhecido
      openNotification(
        "error",
        "Erro ao realizar o Login",
        "topRight",
        error.message
      )
      console.log(error.message)
    }
    setIsLoading(false)
  }

  const handleOnRestet = () => {
    form.resetFields()
  }

  return (
    <>
      <div>
        <img
          src="src/assets/naasp.png"
          alt="naasp-logo"
          style={{ width: "300px", height: "150px" }}
        />
      </div>
      <div className="login-card">
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
              maxLength={6}
              password
              required
            />

            <hr className="separator" />

            <button
              style={{
                backgroundColor: "white",
                color: "black",
                marginBottom: "20px",
              }}
              onClick={() => <ForgotPasswordIndex />}
            >
              Esqueceu sua senha?
            </button>

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
      </div>
    </>
  )
}

export default LoginIndex
