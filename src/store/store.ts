import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "./app/users/users-reducer"
import { menuSlice } from "./menu/menu.reducer"

export const store = configureStore({
  reducer: { user: userSlice.reducer, menu: menuSlice.reducer },
})

export type AppDispatch = typeof store.dispatch
export type StateType = ReturnType<typeof store.getState>
