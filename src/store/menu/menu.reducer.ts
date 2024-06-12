// Importa a função createSlice do pacote @reduxjs/toolkit
import { createSlice } from "@reduxjs/toolkit"

// Importa o enum StatusEnum do arquivo local
import { StatusEnum } from "../enums/StatusEnum"

// Define o tipo InitStateType
export type InitStateType = {
  sidebar: {
    status: StatusEnum
    opened: boolean
  }
}

// Define o estado inicial
export const initialState: InitStateType = {
  sidebar: {
    status: StatusEnum.IDLE, // O status inicial do menu lateral é IDLE
    opened: true, // O estado inicial de abertura do menu lateral é true (aberto)
  },
}

// Define a fatia de menu usando a função createSlice
export const menuSlice = createSlice({
  name: "menu", // O nome da fatia
  initialState, // O estado inicial da fatia
  reducers: { // Os redutores da fatia
    setSidebarIdleStatus: (state) => { // O redutor setSidebarIdleStatus define o status do menu lateral como IDLE
      state.sidebar.status = StatusEnum.IDLE
    },
    setSidebarPendingStatus: (state) => { // O redutor setSidebarPendingStatus define o status do menu lateral como PENDING
      state.sidebar.status = StatusEnum.PENDING
    },
    setSidebarFulfilledStatus: (state) => { // O redutor setSidebarFulfilledStatus define o status do menu lateral como FULFILLED
      state.sidebar.status = StatusEnum.FULFILLED
    },
    setSidebarRejectedStatus: (state) => { // O redutor setSidebarRejectedStatus define o status do menu lateral como REJECTED
      state.sidebar.status = StatusEnum.REJECTED
    },
    setSidebarOpen: (state) => { // O redutor setSidebarOpen define o estado de abertura do menu lateral como true (aberto)
      state.sidebar.opened = true
    },
    setSidebarClose: (state) => { // O redutor setSidebarClose define o estado de abertura do menu lateral como false (fechado)
      state.sidebar.opened = false
    },
  },
})

// Exporta as ações da fatia de menu
export const {
  setSidebarIdleStatus,
  setSidebarPendingStatus,
  setSidebarFulfilledStatus,
  setSidebarRejectedStatus,
  setSidebarOpen,
  setSidebarClose,
} = menuSlice.actions

// Exporta as ações da fatia de menu como um objeto
export const actions = menuSlice.actions

// Exporta o redutor da fatia de menu
export const reducer = menuSlice.reducer

// Exporta o redutor da fatia de menu como padrão
export default menuSlice.reducer
