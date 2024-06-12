import { StateType } from "../../store"

export const selectFamily = (state: StateType) => {
  return state.family.list.data
}
