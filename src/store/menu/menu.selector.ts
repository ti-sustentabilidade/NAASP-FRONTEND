// Importa o tipo StateType do arquivo local
import { StateType } from "../store"

// Define e exporta a função selectSidebarOpened
export const selectSidebarOpened = (state: StateType) => state.menu.sidebar.opened
