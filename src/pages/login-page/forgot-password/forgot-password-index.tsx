import { Button, Card, Col, Form, Row } from "antd"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import InputText from "../../../components/form/input-text"
import { resetPassword } from "../../../store/app/users/users"
import { selectResetPasswordStatus } from "../../../store/app/users/users-selector"
import { StatusEnum } from "../../../store/enums/StatusEnum"
import { AppDispatch } from "../../../store/store"
import "../style.css"

function ForgotPasswordIndex() {
  const [form] = Form.useForm()
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const resetPasswordStatus = useSelector(selectResetPasswordStatus)

  const handleResetPassword = () => {
    const emailField = form.getFieldValue("email")

    const data = {
      email: emailField,
    }

    dispatch(resetPassword(data))
  }

  const handleOnRestet = () => {
    form.resetFields()
  }

  useEffect(() => {
    if (resetPasswordStatus == StatusEnum.FULFILLED) {
      navigate("/")
    }
  }, [resetPasswordStatus])

  return (
    <>
      <title>Esqueci Senha</title>
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
                <Button
                  type='primary'
                  htmlType='submit'
                  loading={resetPasswordStatus == StatusEnum.PENDING ? true : false}
                >
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
