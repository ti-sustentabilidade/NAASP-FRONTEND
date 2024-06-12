import { useDispatch } from "react-redux"

import { Space, Table } from "antd"
import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { BiDollar, BiEdit } from "react-icons/bi"
import { BsPeople } from "react-icons/bs"
import { getAllFamilies } from "../../../../store/app/family/family"
import { AppDispatch } from "../../../../store/store"
import FamilyDetailsModal from "../details/details-modal"
import "./styles.css"

export const FamilyResults = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [open, setOpen] = useState<boolean>(false)
  const [openFamilyMembers, setOpenFamilyMembers] = useState<boolean>(false)
  const [openFamilyBenefits, setOpenFamilyBenefits] = useState<boolean>(false)

  // const families = useSelector(selectFamily)

  const handleOnOk = () => {
    setOpen(false)
    setOpenFamilyMembers(false)
    setOpenFamilyBenefits(false)
  }

  const familyBenefit = [
    {
      endereco_familia: "castelo moura 180",
      nome_beneficio: "bolsa familia",
      data_recebimento: "11/06/2024",
    },
    // {
    //   endereco_familia: "castelo moura 180",
    //   nome_beneficio: "bolsa familia",
    //   data_recebimento: "11/06/2024",
    // },
  ]
  const familyMembers = [
    {
      nome: "Pedro Henrique",
      nome_mae: "Alcenir Oliveira Silva",
      endereco_familia: "castelo moura 180",
      data_nascimento: "23/04/2003",
    },
    {
      nome: "Pedro Henrique",
      nome_mae: "Alcenir Oliveira Silva",
      endereco_familia: "castelo moura 180",
      data_nascimento: "23/04/2003",
    },
  ]

  const columns = [
    {
      title: "Ações",
      dataIndex: "actions",
      key: "actions",
      width: "10%",
      render: () => {
        return (
          <Space size={"middle"}>
            <span>
              {
                <BsPeople
                  title='Ver Membros'
                  size={"20px"}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setOpen(true)
                    setOpenFamilyMembers(true)
                  }}
                />
              }
            </span>
            <span>
              {
                <BiDollar
                  title='Ver Benefícios'
                  size={"20px"}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setOpen(true)
                    setOpenFamilyBenefits(true)
                  }}
                />
              }
            </span>
            <span>
              {
                <BiEdit
                  title='Editar'
                  size={"20px"}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    // setOpen(true)
                  }}
                />
              }
            </span>
          </Space>
        )
      },
    },
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
        return <span>{dayjs(value).format("DD/MM/YYYY")}</span>
      },
    },
    {
      title: "NAASP",
      dataIndex: "id_naasp",
      key: "id_naasp",
    },
    // {
    //   title: "Membros",
    //   dataIndex: "membros",
    //   key: "membros",
    // },
    // {
    //   title: "Benefícios",
    //   dataIndex: "beneficios",
    //   key: "beneficios",
    // },
  ]

  const dataSource = [
    {
      key: "1",
      data_ultima_assistencia: "2024-06-11T00:49:26.800Z",
      renda_percapita: 32,
      endereco: "10 Downing Street",
    },
  ]

  useEffect(() => {
    dispatch(getAllFamilies())
  }, [])

  return (
    <div style={{ marginLeft: "20px", marginRight: "20px", marginTop: "20px" }}>
      <Table columns={columns} dataSource={dataSource} pagination={{ pageSize: 10 }} scroll={{ y: 240 }} />
      <FamilyDetailsModal
        open={open}
        onOk={handleOnOk}
        familyBenefits={familyBenefit}
        familyMembers={familyMembers}
        openFamilyBenefits={openFamilyBenefits}
        openFamilyMembers={openFamilyMembers}
      />
    </div>
  )
}

export default FamilyResults
