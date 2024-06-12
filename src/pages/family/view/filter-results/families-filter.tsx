import { Button, Col, Form, Row } from "antd"
import { BiSearch } from "react-icons/bi"
import { MdCleaningServices } from "react-icons/md"

import axios from "axios"
import { useDispatch } from "react-redux"

import InputText from "../../../../components/form/input-text"
import { getAllFamilies } from "../../../../store/app/family/family"
import { AppDispatch } from "../../../../store/store"
import "./styles.css"

export const FamilyFilter = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch<AppDispatch>()

  // const families = useSelector(selectFamily)

  const handleSearchFamily = () => {
    dispatch(getAllFamilies())
  }

  const handleOnChangeCep = async () => {
    const cep = form.getFieldValue("cep")

    if (cep.length == 8) {
      await axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response: any) => {
        form.setFieldValue("endereco", `${response.data.logradouro} - ${response.data.bairro}`)
      })
    }
  }

  const handleOnRestet = () => {
    form.resetFields()
  }

  return (
    <div style={{ marginLeft: "30px" }}>
      <h1 className='title'>Buscar Familia</h1>
      <Form form={form} onFinish={handleSearchFamily}>
        <Row gutter={[20, 20]} align={"middle"}>
          {/* <Col xs={24} sm={14} md={5}>
            <DatePicker
              placeholder='Data de nascimento'
              name='brith_date'
              format={"DD/MM/YYYY"}
              style={{ width: "210px", marginBottom: "25px" }}
              required
            />
          </Col>
          <Col xs={24} sm={7} md={4}>
            <InputText placeholder='Nome do Morador' name='morador' required />
          </Col>
          <Col xs={24} sm={10} md={4}>
            <InputText placeholder='Nome da mãe' name='mae' required />
          </Col> */}
          <Col xs={24} sm={7} md={11}>
            <InputText placeholder='CEP' name='cep' type='number' onChange={handleOnChangeCep} maxLength={8} required />
          </Col>
          <Col xs={24} sm={10} md={11}>
            <InputText placeholder='Endereço' name='endereco' required disabled />
          </Col>

          <div className='action-buttons'>
            <Col xs={24} sm={24} md={12}>
              <Button
                type='primary'
                htmlType='submit'
                style={{ width: "100px", height: "35px", display: "flex", justifyContent: "space-evenly" }}
              >
                <BiSearch className='icon-button' />
                <span className='action-buttons-text'>Buscar</span>
              </Button>
            </Col>
            <Col xs={24} sm={24} md={3}>
              <Button
                htmlType='button'
                onClick={handleOnRestet}
                style={{ width: "100px", height: "35px", display: "flex", justifyContent: "space-evenly" }}
              >
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
