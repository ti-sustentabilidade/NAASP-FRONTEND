import { StateType } from "../store"

export const selectSidebarOpened = (state: StateType) => state.menu.sidebar.opened
