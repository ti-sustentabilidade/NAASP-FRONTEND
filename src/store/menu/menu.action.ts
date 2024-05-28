import { actions as menuReducerActions } from "./menu.reducer"

import { AppDispatch, StateType } from "../store"
import { selectSidebarOpened } from "./menu.selector"

export const toogleSidebar = (forceOpen?: boolean) => {
  return async (dispatch: AppDispatch, getState: () => StateType) => {
    await dispatch(menuReducerActions.setSidebarPendingStatus())

    if (forceOpen || !selectSidebarOpened(getState())) {
      await dispatch(menuReducerActions.setSidebarOpen())
    } else {
      await dispatch(menuReducerActions.setSidebarClose())
    }

    await dispatch(menuReducerActions.setSidebarIdleStatus())
  }
}

export default {
  toogleSidebar,
}
