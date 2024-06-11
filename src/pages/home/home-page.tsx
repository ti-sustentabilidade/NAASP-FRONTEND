import { Button, Col, DatePicker, Form, Row } from "antd"
import TextArea from "antd/es/input/TextArea"
import axios from "axios"
import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"
import { TDocumentDefinitions } from "pdfmake/interfaces"
import { BiSave } from "react-icons/bi"
import { MdCleaningServices } from "react-icons/md"
import { PiPrinter } from "react-icons/pi"
//import { useDispatch } from "react-redux"
import InputText from "../../components/form/input-text"
//import { AppDispatch } from "../../store/store"
import "./styles.css"
pdfMake.vfs = pdfFonts.pdfMake.vfs

export const Home = () => {
  const [form] = Form.useForm()
  //const dispatch = useDispatch<AppDispatch>()

  const pdfmakeContent: TDocumentDefinitions = {
    content: [
      { text: "MODELO DE FORMULÁRIO DE CADASTRO", style: "header" },
      { text: "DADOS DA FAMÍLIA", style: "subheader" },
      {
        table: {
          headerRows: 1,
          widths: [930],
          body: [[""], [""]],
        },
        layout: "headerLineOnly",
      },
      { text: `Endereço: ` },
      { text: `CEP: ` },
      { text: "NAASP Responsável:" },
      { text: "Última Assistência Recebida:" },
      { text: "Renda Total da Família:" },
      { text: "BENEFÍCIOS RECEBIDOS PELA FAMÍLIA", style: "subheader" },
      {
        table: {
          headerRows: 1,
          widths: [930],
          body: [[""], [""]],
        },
        layout: "headerLineOnly",
      },
      { text: "Insira o nome do benefício e a data do último recebimento (opcional)" },
      { text: "", pageBreak: "before" },
      { text: "MEMBROS DA FAMÍLIA", style: "subheader" },
      {
        table: {
          headerRows: 1,
          widths: [930],
          body: [[""], [""]],
        },
        layout: "headerLineOnly",
      },
      {
        text: "Insira o NOME, DATA DE NASCIMENTO E NOME DA MÃE DO MORADOR. É obrigatório pelo menos um morador para o cadastro.",
      },
      { text: "", pageBreak: "before" },
      {
        table: {
          headerRows: 1,
          widths: [930],
          body: [[""], [""]],
        },
        layout: "headerLineOnly",
      },
      { text: "OBSERVAÇÕES", style: "subheader" },
    ],
    styles: {
      header: { fontSize: 18, bold: true },
      subheader: { fontSize: 14, bold: true, margin: [0, 10, 0, 5] },
    },
  }

  const handleGeneratePdf = () => {
    const pdfGenerator = pdfMake.createPdf(pdfmakeContent)
    pdfGenerator.open()
  }

  const handleOnChangeCep = async () => {
    const cep = form.getFieldValue("cep")

    if (cep.length == 8) {
      await axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response: any) => {
        console.log(response)
        form.setFieldValue("address", `${response.data.logradouro} - ${response.data.bairro}`)
      })
    }
  }

  const handleOnRestet = () => {
    form.resetFields()
  }

  return (
    <div style={{ marginLeft: "30px" }}>
      <h1 className='title'>Cadastramento de Famílias</h1>
      <Form form={form} onFinish={() => {}}>
        <Row gutter={[20, 20]} align={"middle"}>
          <Col xs={24} sm={7} md={10}>
            <InputText placeholder='CEP' name='cep' type='number' onChange={handleOnChangeCep} maxLength={8} required />
          </Col>
          <Col xs={24} sm={10} md={10}>
            <InputText placeholder='Endereço' name='address' required disabled />
          </Col>
          <Col xs={24} sm={5} md={3}>
            <InputText placeholder='Número' name='number' required />
          </Col>
          <Col xs={24} sm={14} md={10}>
            <InputText placeholder='NAASP Responsável' name='responsible_naasp' required />
          </Col>
          <Col xs={24} sm={14} md={5}>
            <InputText placeholder='Renda total da Família' name='family_income' type='number' required />
          </Col>
          <Col xs={24} sm={14} md={9}>
            <DatePicker
              placeholder='Data da última assistência'
              name='assitence_last_date'
              format={"DD/MM/YYYY"}
              style={{ width: "210px", marginBottom: "25px" }}
              required
            />
          </Col>
          <Col xs={24} sm={14} md={24}>
            <TextArea placeholder='Observações' name='observations' style={{ height: "200px", width: "700px" }} />
          </Col>

          <div className='action-buttons'>
            <Col xs={24} sm={24} md={12}>
              <Button
                type='primary'
                className='buttons'
                style={{ width: "200px", height: "35px", display: "flex", justifyContent: "space-evenly" }}
                onClick={() => {
                  handleGeneratePdf()
                }}
              >
                <PiPrinter className='icon-button' />
                <span className='action-buttons-text'>Imprimir Formulário</span>
              </Button>
            </Col>
            <Col xs={24} sm={24} md={7}>
              <Button
                type='primary'
                htmlType='submit'
                style={{ width: "100px", height: "35px", display: "flex", justifyContent: "space-evenly" }}
              >
                <BiSave className='icon-button' />
                <span className='action-buttons-text'>Salvar</span>
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

export default Home
