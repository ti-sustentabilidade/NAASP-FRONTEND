import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "./app/users/users-reducer"

export const store = configureStore({
  reducer: { user: userSlice.reducer },
})

export type AppDispatch = typeof store.dispatch
