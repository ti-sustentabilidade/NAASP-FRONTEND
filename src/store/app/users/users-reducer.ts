// Importa a função createSlice do pacote @reduxjs/toolkit
import { createSlice } from "@reduxjs/toolkit"

// Importa os enums StateEnum e StatusEnum do arquivo local
import { StateEnum } from "../../enums/StateEnum"
import { StatusEnum } from "../../enums/StatusEnum"

// Define o tipo initalStateType
export type initalStateType = {
  list: {
    state: StateEnum
    status: StatusEnum
    loginStatus: StatusEnum
    resetPasswordStatus: StatusEnum
    data: any
  }
}

// Define o estado inicial
export const initalState: initalStateType = {
  list: {
    state: StateEnum.IDLE,
    status: StatusEnum.IDLE,
    loginStatus: StatusEnum.IDLE,
    resetPasswordStatus: StatusEnum.IDLE,
    data: [],
  },
}

// Define a fatia de usuário usando a função createSlice
export const userSlice = createSlice({
  name: "user", // O nome da fatia
  initialState: initalState, // O estado inicial da fatia
  reducers: { // Os redutores da fatia
    setUser: (state: initalStateType, { payload }) => { // O redutor setUser define o campo data do estado
      state.list.data = payload
    },
    setStatus: (state: initalStateType, { payload }: { payload: StatusEnum }) => { // O redutor setStatus define o campo status do estado
      state.list.status = payload
    },
    setLoginStatus: (state: initalStateType, { payload }: { payload: StatusEnum }) => { // O redutor setLoginStatus define o campo loginStatus do estado
      state.list.loginStatus = payload
    },
    setResetPasswordStatus: (state: initalStateType, { payload }: { payload: StatusEnum }) => { // O redutor setResetPasswordStatus define o campo resetPasswordStatus do estado
      state.list.resetPasswordStatus = payload
    },
  },
})

// Exporta as ações da fatia de usuário
export const { setUser, setStatus, setLoginStatus, setResetPasswordStatus } = userSlice.actions

// Exporta o redutor da fatia de usuário como padrão
export default userSlice.reducer
