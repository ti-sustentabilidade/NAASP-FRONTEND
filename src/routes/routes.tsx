import { lazy, Suspense } from "react"
import { createBrowserRouter } from "react-router-dom"
import { PageLoader } from "../components/page-loader"

const LoginPage = lazy(() => import("../pages/login-page/login-index"))
const ForgotPasswordPage = lazy(
  () => import("../pages/login-page/forgot-password/forgot-password-index")
)

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<PageLoader />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <Suspense fallback={<PageLoader />}>
        <ForgotPasswordPage />
      </Suspense>
    ),
  },
])
