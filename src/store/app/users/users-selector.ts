// Importa o tipo StateType do arquivo local
import { StateType } from "../../store"

// Define e exporta a função selectUsers
export const selectUsers = (state: StateType) => {
  // Retorna a lista de usuários do estado
  return state.user.list.data
}

// Define e exporta a função selectLoginStatus
export const selectLoginStatus = (state: StateType) => {
  // Retorna o status de login do estado
  return state.user.list.loginStatus
}

// Define e exporta a função selectResetPasswordStatus
export const selectResetPasswordStatus = (state: StateType) => {
  // Retorna o status de redefinição de senha do estado
  return state.user.list.resetPasswordStatus
}
