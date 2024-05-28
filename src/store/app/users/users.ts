import { createAsyncThunk } from "@reduxjs/toolkit"
import { useNavigate } from "react-router-dom"
import openNotification from "../../../components/notification/notification"
import { API_Routes } from "../../../constants/api-routes"
import NAASP_API from "../../../services/api-naasp"
import { setUser } from "./users-reducer"

export const login = createAsyncThunk("users/login", async (data: any, { dispatch }) => {
  const url = API_Routes.NAASP.users.login

  await NAASP_API.post(url, data)
    .then(async (response: any) => {
      dispatch(setUser(response))
      console.log(response)
      openNotification("success", "Login", "topRight", "Login realizado com sucesso!")
    })
    .catch((error: any) => {
      openNotification("error", "Erro ao realizar o Login", "topRight", error.message)
      console.log(error.message)
    })
})
export const resetPassword = createAsyncThunk("users/reset-password", async (data: any, { dispatch }) => {
  const url = API_Routes.NAASP.users.password_reset

  await NAASP_API.post(url, data)
    .then((response: any) => {
      return response.data
    })
    .catch((error: any) => {
      openNotification("error", "Erro ao realizar o reset da senha", "topRight", error.message)
      console.log(error.message)
    })
})
