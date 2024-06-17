import { StateType } from "../../store"

export const selectNaasp = (state: StateType) => {
  return state.naasp.list.data
}
export const selectNaaspStatus = (state: StateType) => {
  return state.naasp.list.status
}
