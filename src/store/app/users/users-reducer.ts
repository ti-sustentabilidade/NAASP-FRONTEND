import { createSlice } from "@reduxjs/toolkit"
import { StateEnum } from "../../enums/StateEnum"
import { StatusEnum } from "../../enums/StatusEnum"

export type initalStateType = {
  list: {
    state: StateEnum
    status: StatusEnum
    data: any
  }
}

export const initalState: initalStateType = {
  list: {
    state: StateEnum.IDLE,
    status: StatusEnum.IDLE,
    data: [],
  },
}

export const userSlice = createSlice({
  name: "user",
  initialState: initalState,
  reducers: {
    setUser: (state: initalStateType, { payload }) => {
      // console.log(action.payload)
      state.list.data = payload
    },
    setLoginStatus: (state: initalStateType, { payload }: { payload: StatusEnum }) => {
      state.list.status = payload
    },
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
