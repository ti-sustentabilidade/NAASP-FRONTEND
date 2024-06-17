import { Button, Col, DatePicker, Form, Row } from "antd"
import { BiSearch } from "react-icons/bi"
import { MdCleaningServices } from "react-icons/md"

import { useDispatch } from "react-redux"

import InputText from "../../../../components/form/input-text"
import { searchFamily } from "../../../../store/app/family/family"
import { AppDispatch } from "../../../../store/store"
import "./styles.css"

export const FamilyFilter = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch<AppDispatch>()

  // const families = useSelector(selectFamily)

  const handleSearchFamily = () => {
    const data = form.getFieldsValue()
    const data_nascimento = form.getFieldValue("data_nascimento")
    console.log(data)

    dispatch(searchFamily({ ...data, data_nascimento }))
    // dispatch(getAllFamilies())
  }

  const handleOnRestet = () => {
    form.resetFields()
  }

  const handleDateOnChange = (date: any, dateString: any) => {
    form.setFieldValue("data_nascimento", date.toISOString())
  }

  return (
    <div style={{ marginLeft: "30px" }}>
      <h1 className='title'>Buscar Familia</h1>
      <Form form={form} onFinish={handleSearchFamily}>
        <Row gutter={[20, 20]} align={"middle"}>
          <Col xs={24} sm={3} md={3}>
            <DatePicker
              placeholder='Data de nascimento'
              name='data_nascimento'
              format={"DD/MM/YYYY"}
              onChange={handleDateOnChange}
              style={{ marginBottom: "25px" }}
              required
            />
          </Col>
          <Col xs={24} sm={6} md={6}>
            <InputText placeholder='Nome do Morador' name='nome' required />
          </Col>
          <Col xs={24} sm={6} md={6}>
            <InputText placeholder='Nome da mãe' name='nome_mae' />
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
