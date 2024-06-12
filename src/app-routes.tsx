import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { PageLoader } from "./components/page-loader"

const LoginPage = lazy(() => import("./pages/login-page/login-index"))
const ForgotPasswordPage = lazy(() => import("./pages/login-page/forgot-password/forgot-password-index"))
const HomePage = lazy(() => import("./pages/family/family-register-index"))
const ViewFamiliesPage = lazy(() => import("./pages/family/view"))

function AppRoutes() {
  return (
    <Routes>
      <Route
        key={"login"}
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
      <Route
        key={"home"}
        path='/home'
        element={
          <Suspense fallback={<PageLoader />}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        key={"view-families"}
        path='/view-families'
        element={
          <Suspense fallback={<PageLoader />}>
            <ViewFamiliesPage />
          </Suspense>
        }
      />
    </Routes>
  )
}

export default AppRoutes
