import { StateType } from "../../store"

export const selectNaasp = (state: StateType) => {
  return state.naasp.list.data
}
export const selectNaaspOptions = (state: StateType) => {
  return state.naasp.list.data.map((item: any) => {
    return {
      label: item.nome,
      value: item.id,
    }
  })
}
export const selectNaaspStatus = (state: StateType) => {
  return state.naasp.list.status
}
