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

export const familySlice = createSlice({
  name: "user",
  initialState: initalState,
  reducers: {
    setFamily: (state: initalStateType, { payload }) => {
      state.list.data = payload
    },
    setStatus: (state: initalStateType, { payload }: { payload: StatusEnum }) => {
      state.list.status = payload
    },
  },
})

export const { setFamily, setStatus } = familySlice.actions
export default familySlice.reducer
