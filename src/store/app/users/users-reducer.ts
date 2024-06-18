// Importa a função createSlice do pacote @reduxjs/toolkit
import { createSlice } from "@reduxjs/toolkit"
import { StateEnum } from "../../enums/StateEnum"
import { StatusEnum } from "../../enums/StatusEnum"

export type initalStateType = {
  list: {
    state: StateEnum
    status: StatusEnum
    loginStatus: StatusEnum
    resetPasswordStatus: StatusEnum
    data: any
  }
}

export const initalState: initalStateType = {
  list: {
    state: StateEnum.IDLE,
    status: StatusEnum.IDLE,
    loginStatus: StatusEnum.IDLE,
    resetPasswordStatus: StatusEnum.IDLE,
    data: [],
  },
}

export const userSlice = createSlice({
  name: "user",
  initialState: initalState,
  reducers: {
    setUser: (state: initalStateType, { payload }) => {
      state.list.data = payload
    },
    setStatus: (state: initalStateType, { payload }: { payload: StatusEnum }) => {
      state.list.status = payload
    },
    setLoginStatus: (state: initalStateType, { payload }: { payload: StatusEnum }) => {
      state.list.loginStatus = payload
    },
    setResetPasswordStatus: (state: initalStateType, { payload }: { payload: StatusEnum }) => {
      state.list.resetPasswordStatus = payload
    },
  },
})

// Exporta as ações da fatia de usuário
export const { setUser, setStatus, setLoginStatus, setResetPasswordStatus } = userSlice.actions

// Exporta o redutor da fatia de usuário como padrão
export default userSlice.reducer
