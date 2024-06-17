import { useDispatch, useSelector } from "react-redux"

import { LoadingOutlined } from "@ant-design/icons"
import { Table } from "antd"
import dayjs from "dayjs"
import { Fragment, useEffect } from "react"
import { getAllFamilies } from "../../../../store/app/family/family"
import { selectFamily, selectFamilyStatus } from "../../../../store/app/family/family-selector"
import { StatusEnum } from "../../../../store/enums/StatusEnum"
import { AppDispatch } from "../../../../store/store"
import "./styles.css"

export const FamilyResults = () => {
  const dispatch = useDispatch<AppDispatch>()

  const families = useSelector(selectFamily)
  const loading = useSelector(selectFamilyStatus)

  const columns = [
    // {
    //   title: "Ações",
    //   dataIndex: "actions",
    //   key: "actions",
    //   width: "10%",
    //   render: () => {
    //     return (
    //       <Space size={"middle"}>
    //         <span>
    //           {
    //             <BiEdit
    //               title='Editar'
    //               size={"20px"}
    //               style={{ cursor: "pointer" }}
    //               onClick={() => {
    //                 // setOpen(true)
    //               }}
    //             />
    //           }
    //         </span>
    //       </Space>
    //     )
    //   },
    // },
    {
      title: "Endereço",
      dataIndex: "endereco",
      key: "endereco",
    },
    {
      title: "Renda Per Capita",
      dataIndex: "renda_percapita",
      key: "renda_percapita",
      render: (value: any) => {
        return <span>R$ {value}</span>
      },
    },
    {
      title: "Data Última Assistência",
      dataIndex: "data_ultima_assistencia",
      key: "data_ultima_assistencia",
      render: (value: any) => {
        return <span>{value ? dayjs(value).format("DD/MM/YYYY") : "-"}</span>
      },
    },
    {
      title: "NAASP",
      dataIndex: "naasps",
      key: "naasps",
      render: (value: any) => {
        return <span>{value.nome}</span>
      },
    },
    {
      title: "Observação",
      dataIndex: "observacao",
      key: "observacao",
    },
  ]

  const tableLoading = {
    spinning: loading == StatusEnum.PENDING ? true : false,
    indicator: <LoadingOutlined spin />,
  }

  useEffect(() => {
    dispatch(getAllFamilies())
  }, [])

  return (
    <div style={{ marginLeft: "20px", marginRight: "20px", marginTop: "20px" }}>
      <Table
        rowKey={(record: any) => record.endereco}
        loading={tableLoading}
        columns={columns}
        dataSource={families}
        expandable={{
          expandedRowRender: (record) => (
            <Fragment>
              <span style={{ margin: "50px" }}>
                <span style={{ fontWeight: "bold" }}> Membros da Família: </span>
                {record.membros_familia.map((membro: any, index: any) => (index ? ", " : "") + membro.nome)}
              </span>
              <br />
              <span style={{ margin: "50px" }}>
                <span style={{ fontWeight: "bold" }}> Beneficios da Família: </span>
                {record.beneficios == 0
                  ? " Nenhum Benefício na Família"
                  : record.beneficios.map(
                      (beneficio: any, index: any) => (index ? ", " : "") + beneficio.nome_beneficio,
                    )}
              </span>
            </Fragment>
          ),
        }}
        pagination={{ pageSize: 10 }}
        scroll={{ y: 600 }}
      />
    </div>
  )
}

export default FamilyResults
