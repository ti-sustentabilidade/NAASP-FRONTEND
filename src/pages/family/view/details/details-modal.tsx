import { Button, Modal } from "antd"
import { Fragment } from "react"

type Props = {
  open: boolean
  onOk: any
  familyMembers: any[]
  familyBenefits: any[]
  openFamilyMembers: boolean
  openFamilyBenefits: boolean
}

export const FamilyDetailsModal = ({
  open,
  onOk,
  familyMembers,
  familyBenefits,
  openFamilyMembers,
  openFamilyBenefits,
}: Props) => {
  return (
    <Modal
      open={open}
      onOk={onOk}
      onCancel={onOk}
      title='Detalhes da Família'
      footer={[
        <Button key='back' type='primary' onClick={onOk}>
          Ok
        </Button>,
      ]}
    >
      {openFamilyMembers ? (
        <div>
          <h2>Membros da Família</h2>
          {familyMembers.map((familyMember: any, index: any) => (
            <Fragment>
              {index > 0 ? <hr></hr> : <></>}
              <p>Nome: {familyMember.nome}</p>
              <p>Nome Mãe: {familyMember.nome_mae}</p>
              <p>Endereço: {familyMember.endereco_familia}</p>
              <p>Data Nascimento: {familyMember.data_nascimento}</p>
            </Fragment>
          ))}
        </div>
      ) : null}

      {openFamilyBenefits ? (
        <div>
          <h2>Benefícios da Família</h2>
          {familyBenefits.map((familyBenefit: any, index: any) => (
            <Fragment>
              {index > 0 ? <hr></hr> : <></>}
              <p hidden>a</p>
              <p>Data Recebimento: {familyBenefit.data_recebimento}</p>
              <p>Nome Benefício: {familyBenefit.nome_beneficio}</p>
              <p>Nome Família: {familyBenefit.endereco_familia}</p>
            </Fragment>
          ))}
        </div>
      ) : null}
    </Modal>
  )
}

export default FamilyDetailsModal
