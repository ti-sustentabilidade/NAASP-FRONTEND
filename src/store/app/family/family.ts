import { createAsyncThunk } from "@reduxjs/toolkit"
import openNotification from "../../../components/notification/notification"
import { API_Routes } from "../../../constants/api-routes"
import NAASP_API from "../../../services/api-naasp"
import { StatusEnum } from "../../enums/StatusEnum"
import { setFamily, setStatus } from "./family-reducer"

export const createFamily = createAsyncThunk("family/create", async (data: any, { dispatch }) => {
  dispatch(setStatus(StatusEnum.PENDING))

  const url = API_Routes.NAASP.family.create

  await NAASP_API.post(url, data)
    .then(async () => {
      dispatch(setStatus(StatusEnum.FULFILLED))
      openNotification("success", "Familia criada com sucesso!", "topRight")
    })
    .catch((error: any) => {
      openNotification("error", "Erro ao criar a familia", "topRight", error.message)
      dispatch(setStatus(StatusEnum.REJECTED))
      console.log(error.message)
    })
})
export const getAllFamilies = createAsyncThunk("family/getAll", async (_, { dispatch }) => {
  dispatch(setStatus(StatusEnum.PENDING))

  const url = API_Routes.NAASP.family.getAll

  await NAASP_API.get(url)
    .then(async (response: any) => {
      await dispatch(setFamily(response.data))
      dispatch(setStatus(StatusEnum.FULFILLED))
    })
    .catch((error: any) => {
      openNotification("error", "Erro ao realizar a busca", "topRight", error.message)
      dispatch(setStatus(StatusEnum.REJECTED))
      console.log(error.message)
    })
})

export const searchFamily = createAsyncThunk("family/searchFamily", async (data: any, { dispatch }) => {
  dispatch(setStatus(StatusEnum.PENDING))

  const url =
    API_Routes.NAASP.family.search +
    `?nome=${data.nome}&data_nascimento=${data.data_nascimento}${data.nome_mae ? `&nome_mae=${data.nome_mae}` : ""}`

  await NAASP_API.get(url)
    .then(async (response: any) => {
      await dispatch(setFamily([response.data]))
      console.log(response.data)
      dispatch(setStatus(StatusEnum.FULFILLED))
    })
    .catch((error: any) => {
      openNotification("error", "Erro ao realizar a busca", "topRight", error.response.data)
      dispatch(setStatus(StatusEnum.REJECTED))
      console.log(error)
    })
})
