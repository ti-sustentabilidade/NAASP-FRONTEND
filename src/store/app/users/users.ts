import { createAsyncThunk } from "@reduxjs/toolkit"
import openNotification from "../../../components/notification/notification"
import { API_Routes } from "../../../constants/api-routes"
import NAASP_API from "../../../services/api-naasp"
import { StatusEnum } from "../../enums/StatusEnum"
import { setLoginStatus, setResetPasswordStatus, setStatus, setUser } from "./users-reducer"

export const login = createAsyncThunk("users/login", async (data: any, { dispatch }) => {
  dispatch(setLoginStatus(StatusEnum.PENDING))

  const url = API_Routes.NAASP.users.login

  await NAASP_API.post(url, data)
    .then(async () => {
      dispatch(setLoginStatus(StatusEnum.FULFILLED))
      openNotification("success", "Login", "topRight", "Login realizado com sucesso!")
    })
    .catch((error: any) => {
      console.log(error)
      openNotification("error", "Erro ao realizar o Login", "topRight", error.response.data)
      dispatch(setLoginStatus(StatusEnum.REJECTED))

      console.log(error.message)
    })
})

export const resetPassword = createAsyncThunk("users/reset-password", async (data: any, { dispatch }) => {
  dispatch(setResetPasswordStatus(StatusEnum.PENDING))

  const url = API_Routes.NAASP.users.password_reset

  await NAASP_API.post(url, data)
    .then((response: any) => {
      dispatch(setResetPasswordStatus(StatusEnum.FULFILLED))
      openNotification("success", "Reset de Senha", "topRight", "E-mail de redefinição de senha enviado com sucesso!")
      return response.data
    })
    .catch((error: any) => {
      openNotification("error", "Erro ao realizar o reset da senha", "topRight", error.response.message)
      dispatch(setResetPasswordStatus(StatusEnum.REJECTED))
    })
})

export const createUser = createAsyncThunk("users/create", async (data: any, { dispatch }) => {
  dispatch(setStatus(StatusEnum.PENDING))

  const url = API_Routes.NAASP.users.create

  await NAASP_API.post(url, data)
    .then(async (response: any) => {
      await dispatch(setUser(response.data))
      dispatch(setStatus(StatusEnum.FULFILLED))

      openNotification("success", "Criar usuário", "topRight", "Usuário criado com sucesso!")
    })
    .catch((error: any) => {
      openNotification("error", "Erro ao criar o usuário", "topRight", error.response.message)
      dispatch(setStatus(StatusEnum.REJECTED))

      console.log(error.message)
    })
})
