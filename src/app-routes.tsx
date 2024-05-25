import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PageLoader } from "./components/page-loader"

const LoginPage = lazy(() => import("./pages/login-page/login-index"))
const ForgotPasswordPage = lazy(() => import("./pages/login-page/forgot-password/forgot-password-index"))

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          key={"home"}
          path='/'
          element={
            <Suspense fallback={<PageLoader />}>
              <LoginPage />
            </Suspense>
          }
        />
        <Route
          key={"forgot-password"}
          path='/forgot-password'
          element={
            <Suspense fallback={<PageLoader />}>
              <ForgotPasswordPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
