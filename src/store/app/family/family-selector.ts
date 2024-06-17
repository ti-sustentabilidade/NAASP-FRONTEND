import { StateType } from "../../store"

export const selectFamily = (state: StateType) => {
  return state.family.list.data
}
export const selectFamilyStatus = (state: StateType) => {
  return state.family.list.status
}
