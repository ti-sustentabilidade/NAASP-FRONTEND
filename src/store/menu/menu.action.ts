// Importa as ações do redutor de menu do arquivo local
import { actions as menuReducerActions } from "./menu.reducer"

// Importa os tipos AppDispatch e StateType do arquivo local
import { AppDispatch, StateType } from "../store"

// Importa o seletor selectSidebarOpened do arquivo local
import { selectSidebarOpened } from "./menu.selector"

// Define e exporta a função assíncrona toogleSidebar
export const toogleSidebar = (forceOpen?: boolean) => {
  // A função retorna uma função thunk que aceita dispatch e getState como argumentos
  return async (dispatch: AppDispatch, getState: () => StateType) => {
    // Dispara a ação setSidebarPendingStatus para definir o status do menu lateral como pendente
    await dispatch(menuReducerActions.setSidebarPendingStatus())

    // Se forceOpen for verdadeiro ou o menu lateral estiver fechado, dispara a ação setSidebarOpen para abrir o menu lateral
    if (forceOpen || !selectSidebarOpened(getState())) {
      await dispatch(menuReducerActions.setSidebarOpen())
    } else {
      // Caso contrário, dispara a ação setSidebarClose para fechar o menu lateral
      await dispatch(menuReducerActions.setSidebarClose())
    }

    // Dispara a ação setSidebarIdleStatus para definir o status do menu lateral como ocioso
    await dispatch(menuReducerActions.setSidebarIdleStatus())
  }
}

// Exporta um objeto com a função toogleSidebar como padrão
export default {
  toogleSidebar,
}
