import { Button, Card, Col, Form, Row } from "antd"
import { useDispatch } from "react-redux"
import InputText from "../../../components/form/input-text"
import { resetPassword } from "../../../store/app/users/users"
import { AppDispatch } from "../../../store/store"
import "../style.css"

function ForgotPasswordIndex() {
  const [form] = Form.useForm()
  const dispatch = useDispatch<AppDispatch>()

  const handleResetPassword = () => {
    const emailField = form.getFieldValue("email")

    const data = {
      email: emailField,
    }

    console.log(data)

    dispatch(resetPassword(data))
  }

  const handleOnRestet = () => {
    form.resetFields()
  }

  return (
    <>
      <div className='naasp-logo'>
        <img src='src/assets/naasp.png' alt='naasp-logo' style={{ width: "300px", height: "150px" }} />
      </div>
      <Row align={"middle"}>
        <Col>
          <Card className='card'>
            <p style={{ fontSize: "20px" }} className='title'>
              Preencha seu e-mail para resetar a senha
            </p>
            <Form form={form} onFinish={handleResetPassword}>
              <InputText placeholder='E-mail' name='email' type='email' required />

              <div className='action-buttons' style={{ marginLeft: "40px" }}>
                <Button type='primary' htmlType='submit'>
                  <span className='action-buttons-text'> Resetar Senha</span>
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

export default ForgotPasswordIndex
