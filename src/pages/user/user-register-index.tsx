import { Button, Col, Form, Row, Select } from "antd"

import { BiSave } from "react-icons/bi"
import { MdCleaningServices } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import InputText from "../../components/form/input-text"
import { createUser } from "../../store/app/users/users"
import { selectUsersStatus } from "../../store/app/users/users-selector"
import { StatusEnum } from "../../store/enums/StatusEnum"
import { AppDispatch } from "../../store/store"
import "./styles.css"
import { useState } from "react"

export const UserRegisterIndex = () => {
  const [form] = Form.useForm()
  const [role, setRole] = useState<string>()

  const dispatch = useDispatch<AppDispatch>()
  const loading = useSelector(selectUsersStatus)

  const handleCreateUsers = () => {
    const data = {
      nome: form.getFieldValue("nome"),
      email: form.getFieldValue("email"),
      senha: form.getFieldValue("senha"),
      papel: role,
    }

    dispatch(createUser(data))
    console.log(data)
    handleOnRestet()
  }

  const options = [
    {
      label: "Admin",
      value: "admin",
    },
    {
      label: "Usuário",
      value: "user",
    },
  ]

  const handleRole = (value: any) => {
    setRole(value)
  }

  const handleOnRestet = () => {
    form.resetFields()
  }

  return (
    <div className='main-div'>
      <title>Cadastro de Usuários</title>
      <h1 className='title'>Cadastramento de Usuário</h1>
      <Form form={form} onFinish={handleCreateUsers}>
        <Row gutter={[20, 20]} align={"middle"}>
          <Col xs={24} sm={10} md={12}>
            <InputText placeholder='Nome' name='nome' required />
          </Col>
          <Col xs={24} sm={12} md={11}>
            <InputText placeholder='E-mail' name='email' type='email' required />
          </Col>
          <Col xs={24} sm={12} md={12}>
            <InputText placeholder='Senha temporária' name='senha' type='password' password required />
          </Col>
          <Col xs={24} sm={12} md={12}>
            <Select
              showSearch
              placeholder='Papel'
              style={{ width: "93%", marginBottom: "20px" }}
              options={options}
              onChange={handleRole}
            />
          </Col>

          <div className='action-buttons'>
            <Col xs={12} sm={12} md={12}>
              <Button
                type='primary'
                htmlType='submit'
                className='save-button'
                loading={loading == StatusEnum.PENDING ? true : false}
              >
                <BiSave className='icon-button' />
                <span className='action-buttons-text'>Salvar</span>
              </Button>
            </Col>
            <br />
            <Col xs={12} sm={12} md={12}>
              <Button htmlType='button' onClick={handleOnRestet} className='clear-button'>
                <MdCleaningServices className='icon-button' />
                <span className='action-buttons-text'>Limpar</span>
              </Button>
            </Col>
            <br />
          </div>
        </Row>
      </Form>
    </div>
  )
}

export default UserRegisterIndex
