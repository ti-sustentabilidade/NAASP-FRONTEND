import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllNaasps } from "../../../store/app/naasps/naasp"
import { selectNaasp } from "../../../store/app/naasps/naasp-selector"
import { AppDispatch } from "../../../store/store"
import NaaspsInfoCard from "./naasp-card"

export const Index = () => {
  const dispatch = useDispatch<AppDispatch>()
  const naasp = useSelector(selectNaasp)

  useEffect(() => {
    dispatch(getAllNaasps())
  }, [])

  return (
    <>
      <title>Informações de NAASP</title>
      <NaaspsInfoCard data={naasp} />
    </>
  )
}

export default Index
