import { createSlice } from "@reduxjs/toolkit"
import { StatusEnum } from "../enums/StatusEnum"

export type InitStateType = {
  sidebar: {
    status: StatusEnum
    opened: boolean
  }
}

export const initialState: InitStateType = {
  sidebar: {
    status: StatusEnum.IDLE,
    opened: true,
  },
}

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setSidebarIdleStatus: (state) => {
      state.sidebar.status = StatusEnum.IDLE
    },
    setSidebarPendingStatus: (state) => {
      state.sidebar.status = StatusEnum.PENDING
    },
    setSidebarFulfilledStatus: (state) => {
      state.sidebar.status = StatusEnum.FULFILLED
    },
    setSidebarRejectedStatus: (state) => {
      state.sidebar.status = StatusEnum.REJECTED
    },
    setSidebarOpen: (state) => {
      state.sidebar.opened = true
    },
    setSidebarClose: (state) => {
      state.sidebar.opened = false
    },
  },
})

export const {
  setSidebarIdleStatus,
  setSidebarPendingStatus,
  setSidebarFulfilledStatus,
  setSidebarRejectedStatus,
  setSidebarOpen,
  setSidebarClose,
} = menuSlice.actions

export const actions = menuSlice.actions
export const reducer = menuSlice.reducer

export default menuSlice.reducer
