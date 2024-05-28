import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import "./index.css"
import Default from "./layout/default.tsx"
import { store } from "./store/store.ts"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Default />
    </Provider>
  </React.StrictMode>,
)
