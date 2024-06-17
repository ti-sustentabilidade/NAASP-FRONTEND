import { Button, Col, Form, Row } from "antd"
import axios from "axios"

import { BiSave } from "react-icons/bi"
import { MdCleaningServices } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import InputText from "../../components/form/input-text"
import { createNaasp } from "../../store/app/naasps/naasp"
import { selectNaaspStatus } from "../../store/app/naasps/naasp-selector"
import { StatusEnum } from "../../store/enums/StatusEnum"
import { AppDispatch } from "../../store/store"
import "./styles.css"

export const NaaspRegisterIndex = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch<AppDispatch>()
  const loading = useSelector(selectNaaspStatus)

  const handleCreateNaasp = () => {
    const number = form.getFieldValue("number")

    const data = {
      endereco: `${form.getFieldValue("endereco")}${number ? ", " + number : ""}`,
      nome: form.getFieldValue("nome"),
      numero_telefone: form.getFieldValue("numero_telefone"),
      nome_representante: form.getFieldValue("nome_representante"),
    }

    dispatch(createNaasp(data))
    console.log(data)
    handleOnRestet()
  }

  const handleOnChangeCep = async () => {
    const cep = form.getFieldValue("cep")

    if (cep.length == 8) {
      await axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response: any) => {
        console.log(response)
        form.setFieldValue("endereco", `${response.data.logradouro} - ${response.data.bairro}`)
      })
    }
  }

  const handleOnRestet = () => {
    form.resetFields()
  }

  return (
    <div className='main-div'>
      <title>Cadastro de NAASP</title>
      <h1 className='title'>Cadastramento de NAASP'S</h1>
      <Form form={form} onFinish={handleCreateNaasp}>
        <Row gutter={[20, 20]} align={"middle"}>
          <Col xs={24} sm={7} md={5}>
            <InputText placeholder='CEP' name='cep' type='number' onChange={handleOnChangeCep} maxLength={8} />
          </Col>
          <Col xs={24} sm={10} md={10}>
            <InputText placeholder='Endereço' name='endereco' required />
          </Col>
          <Col xs={24} sm={5} md={5}>
            <InputText placeholder='Número' name='number' />
          </Col>
          <Col xs={24} sm={10} md={6}>
            <InputText placeholder='Nome' name='nome' required />
          </Col>
          <Col xs={24} sm={14} md={6}>
            <InputText placeholder='Nome Representante' name='nome_representante' required />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <InputText placeholder='E-mail' name='email' type='email' required />
          </Col>
          <Col xs={24} sm={12} md={3}>
            <InputText placeholder='Telefone' name='numero_telefone' type='number' maxLength={14} required />
          </Col>

          <div className='action-buttons'>
            <Col xs={12} sm={12} md={12}>
              <Button
                type='primary'
                htmlType='submit'
                style={{ width: "120px", height: "40px" }}
                loading={loading == StatusEnum.PENDING ? true : false}
              >
                <BiSave className='icon-button' />
                <span className='action-buttons-text'>Salvar</span>
              </Button>
            </Col>
            <br />
            <Col xs={12} sm={12} md={12}>
              <Button htmlType='button' onClick={handleOnRestet} style={{ width: "120px", height: "40px" }}>
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

export default NaaspRegisterIndex
