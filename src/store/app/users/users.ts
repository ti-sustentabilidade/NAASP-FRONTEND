// Importa a função createAsyncThunk do pacote @reduxjs/toolkit
import { createAsyncThunk } from "@reduxjs/toolkit"

// Importa a função openNotification do arquivo local
import openNotification from "../../../components/notification/notification"

// Importa o objeto API_Routes do arquivo local
import { API_Routes } from "../../../constants/api-routes"

// Importa a instância NAASP_API do arquivo local
import NAASP_API from "../../../services/api-naasp"

// Importa o enum StatusEnum do arquivo local
import { StatusEnum } from "../../enums/StatusEnum"

// Importa as ações setLoginStatus, setResetPasswordStatus e setUser do arquivo local
import { setLoginStatus, setResetPasswordStatus, setUser } from "./users-reducer"

// Define e exporta a função assíncrona login
export const login = createAsyncThunk("users/login", async (data: any, { dispatch }) => {
  // Dispara a ação setLoginStatus com o status PENDING
  dispatch(setLoginStatus(StatusEnum.PENDING))

  // Define a URL para o endpoint de login
  const url = API_Routes.NAASP.users.login

  // Faz uma solicitação POST para a URL com os dados fornecidos
  await NAASP_API.post(url, data)
    .then(async (response: any) => {
      // Se a solicitação for bem-sucedida, dispara a ação setUser com os dados da resposta
      await dispatch(setUser(response.data))

      // Dispara a ação setLoginStatus com o status FULFILLED
      dispatch(setLoginStatus(StatusEnum.FULFILLED))

      // Abre uma notificação de sucesso
      openNotification("success", "Login", "topRight", "Login realizado com sucesso!")
    })
    .catch((error: any) => {
      // Se a solicitação falhar, abre uma notificação de erro com a mensagem de erro
      openNotification("error", "Erro ao realizar o Login", "topRight", error.message)

      // Dispara a ação setLoginStatus com o status REJECTED
      dispatch(setLoginStatus(StatusEnum.REJECTED))

      // Registra a mensagem de erro no console
      console.log(error.message)
    })
})

// Define e exporta a função assíncrona resetPassword
export const resetPassword = createAsyncThunk("users/reset-password", async (data: any, { dispatch }) => {
  // Dispara a ação setResetPasswordStatus com o status PENDING
  dispatch(setResetPasswordStatus(StatusEnum.PENDING))

  // Define a URL para o endpoint de redefinição de senha
  const url = API_Routes.NAASP.users.password_reset

  // Faz uma solicitação POST para a URL com os dados fornecidos
  await NAASP_API.post(url, data)
    .then((response: any) => {
      // Se a solicitação for bem-sucedida, dispara a ação setResetPasswordStatus com o status FULFILLED
      dispatch(setResetPasswordStatus(StatusEnum.FULFILLED))

      // Abre uma notificação de sucesso
      openNotification("success", "Reset de Senha", "topRight", "E-mail de redefinição de senha enviado com sucesso!")

      // Retorna os dados da resposta
      return response.data
    })
    .catch((error: any) => {
      // Define a mensagem de erro padrão
      let errorMessage

      // Se a mensagem de erro for "Request failed with status code 404", define a mensagem de erro como "Usuário não encontrado"
      if (error.message == "Request failed with status code 404") {
        errorMessage = "Usuário não encontrado"
      }

      // Abre uma notificação de erro com a mensagem de erro
      openNotification("error", "Erro ao realizar o reset da senha", "topRight", errorMessage)

      // Dispara a ação setResetPasswordStatus com o status REJECTED
      dispatch(setResetPasswordStatus(StatusEnum.REJECTED))
    })
})
