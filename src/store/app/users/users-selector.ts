import { StateType } from "../../store"

export const selectUsers = (state: StateType) => {
  return state.user.list.data
}

export const selectLoginStatus = (state: StateType) => {
  return state.user.list.loginStatus
}

export const selectResetPasswordStatus = (state: StateType) => {
  return state.user.list.resetPasswordStatus
}
