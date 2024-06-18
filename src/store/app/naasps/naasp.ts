import { createAsyncThunk } from "@reduxjs/toolkit"
import openNotification from "../../../components/notification/notification"
import { API_Routes } from "../../../constants/api-routes"
import NAASP_API from "../../../services/api-naasp"
import { StatusEnum } from "../../enums/StatusEnum"
import { setNaasp, setStatus } from "./naasp-reducer"

export const createNaasp = createAsyncThunk("naasp/create", async (data: any, { dispatch }) => {
  dispatch(setStatus(StatusEnum.PENDING))

  const url = API_Routes.NAASP.naasp.create

  await NAASP_API.post(url, data)
    .then(async () => {
      dispatch(setStatus(StatusEnum.FULFILLED))
      openNotification("success", "NAASP criada com sucesso!", "topRight")
    })
    .catch((error: any) => {
      openNotification("error", "Erro ao criar a NAASP", "topRight", error.message)
      dispatch(setStatus(StatusEnum.REJECTED))
      console.log(error.message)
    })
})
export const getAllNaasps = createAsyncThunk("naasp/getAll", async (_, { dispatch }) => {
  dispatch(setStatus(StatusEnum.PENDING))

  const url = API_Routes.NAASP.naasp.getAll

  await NAASP_API.get(url)
    .then(async (response: any) => {
      await dispatch(setNaasp(response.data))
      dispatch(setStatus(StatusEnum.FULFILLED))
    })
    .catch((error: any) => {
      openNotification("error", "Erro ao realizar a busca", "topRight", error.response.message)
      dispatch(setStatus(StatusEnum.REJECTED))
      console.log(error.message)
    })
})
