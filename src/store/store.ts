import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "./app/users/users-reducer"
import { menuSlice } from "./menu/menu.reducer"
import { familySlice } from "./app/family/family-reducer"

export const store = configureStore({
  reducer: { user: userSlice.reducer, menu: menuSlice.reducer, family: familySlice.reducer },
})

export type AppDispatch = typeof store.dispatch
export type StateType = ReturnType<typeof store.getState>
