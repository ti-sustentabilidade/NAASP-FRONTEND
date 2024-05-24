import openNotification from "../../components/notification/notification"
import { API_Routes } from "../../constants/api-routes"
import NAASP_API from "../api-naasp"

const loginUrl = API_Routes.NAASP.users.login
const resetPasswordUrl = API_Routes.NAASP.users.password_reset

export const login = async (data: any) => {
  await NAASP_API.post(loginUrl, JSON.stringify(data))
    .then((response: any) => {
      return response.body()
    })
    .catch((error: any) => {
      openNotification(
        "error",
        "Erro ao realizar o Login",
        "topRight",
        error.message
      )
      console.log(error.message)
    })
}
export const resetPassword = async (data: any) => {
  await NAASP_API.post(resetPasswordUrl, JSON.stringify(data))
    .then((response: any) => {
      return response.body()
    })
    .catch((error: any) => {
      openNotification(
        "error",
        "Erro ao realizar o reset da senha",
        "topRight",
        error.message
      )
      console.log(error.message)
    })
}
