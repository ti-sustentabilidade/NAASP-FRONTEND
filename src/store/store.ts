// Importa a função configureStore do pacote @reduxjs/toolkit
import { configureStore } from "@reduxjs/toolkit"

// Importa a fatia de usuário do arquivo local
import { userSlice } from "./app/users/users-reducer"

// Importa a fatia de menu do arquivo local
import { menuSlice } from "./menu/menu.reducer"

// Define e exporta a loja Redux
export const store = configureStore({
  reducer: { user: userSlice.reducer, menu: menuSlice.reducer }, // Define os redutores para a fatia de usuário e a fatia de menu
})

// Define e exporta o tipo AppDispatch como o tipo da função dispatch da loja
export type AppDispatch = typeof store.dispatch

// Define e exporta o tipo StateType como o tipo do estado retornado pela função getState da loja
export type StateType = ReturnType<typeof store.getState>
