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

export const naaspSlice = createSlice({
  name: "naasp",
  initialState: initalState,
  reducers: {
    setNaasp: (state: initalStateType, { payload }) => {
      state.list.data = payload
    },
    setStatus: (state: initalStateType, { payload }: { payload: StatusEnum }) => {
      state.list.status = payload
    },
  },
})

export const { setNaasp, setStatus } = naaspSlice.actions
export default naaspSlice.reducer
