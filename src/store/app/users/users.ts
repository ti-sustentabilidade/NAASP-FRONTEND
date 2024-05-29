import { createAsyncThunk } from "@reduxjs/toolkit"
import openNotification from "../../../components/notification/notification"
import { API_Routes } from "../../../constants/api-routes"
import NAASP_API from "../../../services/api-naasp"
import { StatusEnum } from "../../enums/StatusEnum"
import { setLoginStatus, setResetPasswordStatus, setUser } from "./users-reducer"

export const login = createAsyncThunk("users/login", async (data: any, { dispatch }) => {
  dispatch(setLoginStatus(StatusEnum.PENDING))

  const url = API_Routes.NAASP.users.login

  await NAASP_API.post(url, data)
    .then(async (response: any) => {
      await dispatch(setUser(response.data))
      dispatch(setLoginStatus(StatusEnum.FULFILLED))
      openNotification("success", "Login", "topRight", "Login realizado com sucesso!")
    })
    .catch((error: any) => {
      openNotification("error", "Erro ao realizar o Login", "topRight", error.message)
      dispatch(setLoginStatus(StatusEnum.REJECTED))
      console.log(error.message)
    })
})
export const resetPassword = createAsyncThunk("users/reset-password", async (data: any, { dispatch }) => {
  dispatch(setResetPasswordStatus(StatusEnum.PENDING))

  const url = API_Routes.NAASP.users.password_reset

  await NAASP_API.post(url, data)
    .then(async (response: any) => {
      await dispatch(setResetPasswordStatus(StatusEnum.FULFILLED))
      openNotification("success", "Reset de Senha", "topRight", "E-mail de redefinição de senha enviado com sucesso!")
      return response.data
    })
    .catch((error: any) => {
      let errorMessage
      if (error.message == "Request failed with status code 404") {
        errorMessage = "Usuário não encontrado"
      }

      openNotification("error", "Erro ao realizar o reset da senha", "topRight", errorMessage)
      dispatch(setResetPasswordStatus(StatusEnum.REJECTED))
    })
})
