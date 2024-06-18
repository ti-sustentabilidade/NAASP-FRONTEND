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
  }

  const handleOnRestet = () => {
    form.resetFields()
  }

  const handleDateOnChange = (date: any) => {
    form.setFieldValue("data_nascimento", date.toISOString())
  }

  return (
    <div className='main-div'>
      <h1 className='title'>Buscar Familia</h1>
      <Form form={form} onFinish={handleSearchFamily}>
        <Row gutter={[20, 20]} align={"middle"}>
          <Col xs={24} sm={8} md={8}>
            <DatePicker
              placeholder='Data de nascimento'
              name='data_nascimento'
              format={"DD/MM/YYYY"}
              onChange={handleDateOnChange}
              style={{ width: "100%", marginBottom: "25px" }}
              required
            />
          </Col>
          <Col xs={24} sm={8} md={8}>
            <InputText placeholder='Nome do Morador' name='nome' required />
          </Col>
          <Col xs={24} sm={8} md={7}>
            <InputText placeholder='Nome da mãe' name='nome_mae' />
          </Col>

          <div className='action-buttons'>
            <Col xs={24} sm={24} md={12}>
              <Button type='primary' htmlType='submit' className='search-button'>
                <BiSearch className='icon-button' />
                <span className='action-buttons-text'>Buscar</span>
              </Button>
            </Col>
            <br />
            <Col xs={24} sm={24} md={3}>
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
