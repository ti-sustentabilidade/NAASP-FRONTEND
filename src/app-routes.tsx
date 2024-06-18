import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { PageLoader } from "./components/page-loader"
const LoginPage = lazy(() => import("./pages/login-page/login-index"))
const ForgotPasswordPage = lazy(() => import("./pages/login-page/forgot-password/forgot-password-index"))
const AddFamiliesPage = lazy(() => import("./pages/family/family-register-index"))
const ViewFamiliesPage = lazy(() => import("./pages/family/view"))
const ViewNaaspsPage = lazy(() => import("./pages/naasp/info/index"))
const AddNaaspsPage = lazy(() => import("./pages/naasp/naasp-register-index"))
const AddUserPage = lazy(() => import("./pages/user/user-register-index"))

function AppRoutes() {
  return (
    <Routes>
      <Route
        key={"login"} // A chave única para a rota
        path='/' // O caminho para a rota
        element={
          // O elemento a ser renderizado para a rota
          // Renderiza o componente LoginPage
          // Usa o componente Suspense para esperar até que o componente LoginPage seja carregado
          <Suspense fallback={<PageLoader />}>
            <LoginPage />
          </Suspense>
        }
      />
      <Route
        key={"forgot-password"} // A chave única para a rota
        path='/forgot-password' // O caminho para a rota
        element={
          // O elemento a ser renderizado para a rota
          // Usa o componente Suspense para esperar até que o componente ForgotPasswordPage seja carregado
          // Renderiza o componente ForgotPasswordPage
          <Suspense fallback={<PageLoader />}>
            <ForgotPasswordPage />
          </Suspense>
        }
      />
      <Route
        key={"home"} // A chave única para a rota
        path='/home' // O caminho para a rota
        element={
          // O elemento a ser renderizado para a rota
          <Suspense fallback={<PageLoader />}>
            <AddFamiliesPage />
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
      <Route
        key={"add-naasp"}
        path='/add-naasp'
        element={
          <Suspense fallback={<PageLoader />}>
            <AddNaaspsPage />
          </Suspense>
        }
      />
      <Route
        key={"view-naasps"}
        path='/view-naasps'
        element={
          <Suspense fallback={<PageLoader />}>
            <ViewNaaspsPage />
          </Suspense>
        }
      />
      <Route
        key={"add-user"}
        path='/add-user'
        element={
          <Suspense fallback={<PageLoader />}>
            <AddUserPage />
          </Suspense>
        }
      />
    </Routes>
  )
}

// Exporta a função AppRoutes como padrão
export default AppRoutes
