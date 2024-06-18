import { Button, Col, DatePicker, Form, Row, Select } from "antd"
import TextArea from "antd/es/input/TextArea"
import * as pdfMake from "pdfmake/build/pdfmake"

import { DollarCircleOutlined } from "@ant-design/icons"
import moment from "moment"
import { TDocumentDefinitions } from "pdfmake/interfaces"
import { ChangeEvent, useEffect, useState } from "react"
import { BiSave } from "react-icons/bi"
import { BsPersonAdd } from "react-icons/bs"
import { MdCleaningServices } from "react-icons/md"
import { PiPrinter } from "react-icons/pi"
import { TbTrash } from "react-icons/tb"
import { useDispatch, useSelector } from "react-redux"
import InputText from "../../components/form/input-text"
import openNotification from "../../components/notification/notification"
import { createFamily } from "../../store/app/family/family"
import { getAllNaasps } from "../../store/app/naasps/naasp"
import { selectNaaspOptions } from "../../store/app/naasps/naasp-selector"
import { AppDispatch } from "../../store/store"
import getAddresByCep from "../../utils/get-address"
import "./styles.css"

interface BenefitsInputData {
  nome_beneficio: string
  data_recebimento: any
}
interface MembersInputData {
  nome_mae: string
  nome: string
  data_nascimento: string
}

export const FamilyRegisterIndex = () => {
  const [form] = Form.useForm()
  const [benefitInputs, setBenefitInputs] = useState<BenefitsInputData[]>([])
  const [memberInputs, setMemberInputs] = useState<MembersInputData[]>([])
  const [naaspId, setNaaspId] = useState<number>()

  const dispatch = useDispatch<AppDispatch>()

  const options = useSelector(selectNaaspOptions)

  const pdfFonts = {
    Roboto: {
      normal: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-Regular.ttf",
      bold: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-Medium.ttf",
      italics: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-Italic.ttf",
      bolditalics: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-MediumItalic.ttf",
    },
  }

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
    const pdfGenerator = pdfMake.createPdf(pdfmakeContent, {}, pdfFonts)
    pdfGenerator.open()
  }

  const handleCreateFamily = () => {
    if (benefitInputs.length) {
      benefitInputs.map((benefit: any) => {
        if (benefit.nome_beneficio == "" || undefined || benefit.data_recebimento == "" || undefined) {
          openNotification(
            "error",
            "Erro ao criar a família",
            "topRight",
            "Os benefícios da família não foram preenchidos",
          )
          return
        }
      })
    }
    if (memberInputs.length) {
      memberInputs.map((member: any) => {
        if (member.nome == "" || undefined || member.data_nascimento == "" || undefined) {
          openNotification(
            "error",
            "Erro ao criar a família",
            "topRight",
            "Os membros da família não foram preenchidos",
          )
          return
        }
      })
    }
    if (!memberInputs.length) {
      openNotification("error", "Erro ao criar a família", "topRight", "Uma família deve possuir ao menos um membro")
      return
    }

    const data = {
      endereco: form.getFieldValue("endereco"),
      observacao: form.getFieldValue("observacao"),
      renda_percapita: Number(form.getFieldValue("renda_percapita")),
      data_ultima_assistencia: form.getFieldValue("data_ultima_assistencia"),
      id_naasp: naaspId,
      beneficios: benefitInputs,
      membros_familia: memberInputs,
    }

    dispatch(createFamily(data))
    console.log(data)
    // handleOnRestet()
  }

  const addBenefitInputs = () => {
    setBenefitInputs([...benefitInputs, { nome_beneficio: "", data_recebimento: "" }])
  }
  const removeBenefitInputs = (index: number) => {
    const newInputs = [...benefitInputs]
    newInputs.splice(index, 1)
    setBenefitInputs(newInputs)
  }

  const addMembersInputs = () => {
    setMemberInputs([...memberInputs, { data_nascimento: "", nome: "", nome_mae: "" }])
  }
  const removeMemberInputs = (index: number) => {
    const newInputs = [...memberInputs]
    newInputs.splice(index, 1)
    setMemberInputs(newInputs)
  }

  const handleBenefitInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>,
    field: keyof BenefitsInputData,
  ) => {
    const newInputs = [...benefitInputs]
    newInputs[index][field] = event.target.value
    setBenefitInputs(newInputs)
  }

  const handleMemberInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>,
    field: keyof MembersInputData,
  ) => {
    const newInputs = [...memberInputs]
    newInputs[index][field] = event.target.value
    setMemberInputs(newInputs)
  }

  const handleBenefitDateChange = (index: number, date: any) => {
    const newInputs = [...benefitInputs]
    newInputs[index].data_recebimento = date ? date.toISOString() : null
    setBenefitInputs(newInputs)
  }
  const handleMemberDateChange = (index: number, date: any) => {
    const newInputs = [...memberInputs]
    newInputs[index].data_nascimento = date ? date.toISOString() : null
    setMemberInputs(newInputs)
  }

  const handleDate = (date: any) => {
    form.setFieldValue("data_ultima_assistencia", date.toISOString())
  }

  const handleObservation = (event: any) => {
    form.setFieldValue("observacao", event.target.value)
  }

  const handleNaasp = (value: any) => {
    setNaaspId(value)
  }

  const handleOnRestet = () => {
    form.resetFields()
  }

  useEffect(() => {
    dispatch(getAllNaasps())
  }, [])

  return (
    <div className='main-div'>
      <title>Cadastro de Família</title>
      <h1 className='title'>Cadastramento de Famílias</h1>
      <Form form={form} onFinish={handleCreateFamily}>
        <Row gutter={[20, 20]} align={"middle"}>
          <Col xs={24} sm={7} md={10}>
            <InputText
              placeholder='CEP'
              name='cep'
              type='number'
              onChange={() => {
                getAddresByCep(form)
              }}
              maxLength={8}
            />
          </Col>
          <Col xs={24} sm={10} md={10}>
            <InputText placeholder='Endereço' name='endereco' required />
          </Col>
          <Col xs={24} sm={5} md={3}>
            <InputText placeholder='Número' name='number' />
          </Col>
          <Col xs={24} sm={14} md={10}>
            <Select
              showSearch
              placeholder='NAASP Responsável'
              style={{ width: "100%", marginBottom: "20px" }}
              options={options}
              onChange={handleNaasp}
            />
          </Col>
          <Col xs={24} sm={14} md={9}>
            <InputText
              placeholder='Renda total da Família'
              addonBefore={"R$"}
              name='renda_percapita'
              type='number'
              required
            />
          </Col>
          <Col xs={24} sm={14} md={5}>
            <DatePicker
              placeholder='Data da última assistência'
              name='data_ultima_assistencia'
              format={"DD/MM/YYYY"}
              style={{ width: "100%", marginBottom: "25px" }}
              onChange={handleDate}
              required
            />
          </Col>
          <Col xs={24} sm={14} md={24}>
            <TextArea
              placeholder='Observações'
              name='observacao'
              style={{ height: "200px", width: "700px" }}
              onChange={handleObservation}
            />
          </Col>
          <Col xs={24} sm={12} md={24}>
            <Button
              type='primary'
              className='add-benefit-button'
              onClick={() => {
                addBenefitInputs()
              }}
            >
              <DollarCircleOutlined className='money-icon-button' />
              <span className='benefit-button-text'>Adicionar beneficios</span>
            </Button>
          </Col>

          {benefitInputs.map((input, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <Col xs={24} sm={24} md={24}>
                <DatePicker
                  placeholder='Data último recebimento *'
                  format={"DD/MM/YYYY"}
                  value={input.data_recebimento ? moment(input.data_recebimento) : null}
                  onChange={(e: any) => handleBenefitDateChange(index, e)}
                  style={{ width: "100%" }}
                />
              </Col>
              <br />
              <Col xs={24} sm={24} md={24}>
                <InputText
                  placeholder='Nome benefício *'
                  style={{ marginRight: "10px" }}
                  value={input.nome_beneficio}
                  onChange={(e) => handleBenefitInputChange(index, e, "nome_beneficio")}
                />
              </Col>
              <Button
                type='primary'
                className='remove-benefit-button'
                onClick={() => {
                  removeBenefitInputs(index)
                }}
              >
                <TbTrash className='trash-icon-button' />
              </Button>
            </div>
          ))}

          <br />
          <Col xs={24} sm={12} md={24}>
            <Button
              type='primary'
              className='add-member-button'
              onClick={() => {
                addMembersInputs()
              }}
            >
              <BsPersonAdd className='person-icon-button' />
              <span className='member-button-text'>Adicionar membros</span>
            </Button>
          </Col>

          {memberInputs.map((input, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <Col xs={24} sm={24} md={24}>
                <DatePicker
                  placeholder='Data de nascimento *'
                  format={"DD/MM/YYYY"}
                  value={input.data_nascimento ? moment(input.data_nascimento) : null}
                  onChange={(e: any) => handleMemberDateChange(index, e)}
                  style={{ width: "100%" }}
                />
              </Col>
              <br />
              <Col xs={24} sm={24} md={24}>
                <InputText
                  value={input.nome}
                  onChange={(e) => handleMemberInputChange(index, e, "nome")}
                  placeholder='Nome do Morador *'
                  style={{ marginRight: "10px" }}
                />
              </Col>
              <Col xs={24} sm={24} md={24}>
                <InputText
                  value={input.nome_mae}
                  onChange={(e) => handleMemberInputChange(index, e, "nome_mae")}
                  placeholder='Nome da Mãe'
                  style={{ marginRight: "10px" }}
                />
              </Col>
              <Button
                type='primary'
                className='remove-member-button'
                onClick={() => {
                  removeMemberInputs(index)
                }}
              >
                <TbTrash className='trash-icon-button' />
              </Button>
            </div>
          ))}

          <div className='action-buttons'>
            <Col xs={24} sm={12} md={12}>
              <Button
                type='primary'
                className='print-button'
                onClick={() => {
                  handleGeneratePdf()
                }}
              >
                <PiPrinter className='icon-button' />
                <span className='action-buttons-text'>Imprimir Formulário</span>
              </Button>
            </Col>
            <br />
            <Col xs={24} sm={8} md={7}>
              <Button type='primary' htmlType='submit' className='save-button'>
                <BiSave className='icon-button' />
                <span className='action-buttons-text'>Salvar</span>
              </Button>
            </Col>
            <br />
            <Col xs={24} sm={8} md={3}>
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

export default FamilyRegisterIndex
