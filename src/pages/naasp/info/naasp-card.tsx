import { Card, Space, Spin } from "antd"
import { Fragment } from "react"
import { useSelector } from "react-redux"
import { LoadingOutlined } from "@ant-design/icons"
import { selectNaaspStatus } from "../../../store/app/naasps/naasp-selector"
import { StatusEnum } from "../../../store/enums/StatusEnum"
import { NaaspDataType } from "./type/NaaspDataTypes"
import { useBreakPoints } from "../../../hooks/use-breakpoints"

type Props = {
  data: NaaspDataType[]
}

export const NaaspsInfoCard = ({ data }: Props) => {
  const breakpoints = useBreakPoints()
  const status = useSelector(selectNaaspStatus)

  return (
    <Spin
      style={{ display: "flex", justifyContent: "center" }}
      spinning={status == StatusEnum.PENDING ? true : false}
      indicator={<LoadingOutlined spin />}
    >
      <h1 style={{ marginLeft: "30px" }} className='title'>
        Informações de NAASP'S
      </h1>

      <Space wrap={breakpoints.sm || breakpoints.md} align={breakpoints.sm || breakpoints.md ? "center" : "start"}>
        {data.map((naasp: NaaspDataType) => {
          return (
            <Card className='card' title={naasp.nome} style={{ borderRadius: "10px", margin: "30px" }}>
              <Fragment>
                <p>
                  <b>Endereço: </b> {naasp.endereco}
                </p>
                <p>
                  <b>Número Telefone:</b> {naasp.numero_telefone}
                </p>
                <p>
                  <b>Nome Representante:</b> {naasp.nome_representante}
                </p>
              </Fragment>
            </Card>
          )
        })}
      </Space>
    </Spin>
  )
}

export default NaaspsInfoCard
