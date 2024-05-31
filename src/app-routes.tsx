// Importa as funções lazy e Suspense do pacote react
import { lazy, Suspense } from "react"

// Importa os componentes Route e Routes do pacote react-router-dom
import { Route, Routes } from "react-router-dom"

// Importa o componente PageLoader do arquivo local
import { PageLoader } from "./components/page-loader"

// Usa a função lazy para carregar o componente LoginPage de forma preguiçosa
const LoginPage = lazy(() => import("./pages/login-page/login-index"))

// Usa a função lazy para carregar o componente ForgotPasswordPage de forma preguiçosa
const ForgotPasswordPage = lazy(() => import("./pages/login-page/forgot-password/forgot-password-index"))

// Usa a função lazy para carregar o componente HomePage de forma preguiçosa
const HomePage = lazy(() => import("./pages/home/home-page"))

// Define e exporta a função AppRoutes
function AppRoutes() {
  // Retorna o componente Routes com várias rotas
  return (
    <Routes>
      <Route
        key={"login"} // A chave única para a rota
        path='/' // O caminho para a rota
        element={ // O elemento a ser renderizado para a rota
          <Suspense fallback={<PageLoader />}> // Usa o componente Suspense para esperar até que o componente LoginPage seja carregado
            <LoginPage /> // Renderiza o componente LoginPage
          </Suspense>
        }
      />
      <Route
        key={"forgot-password"} // A chave única para a rota
        path='/forgot-password' // O caminho para a rota
        element={ // O elemento a ser renderizado para a rota
          <Suspense fallback={<PageLoader />}> // Usa o componente Suspense para esperar até que o componente ForgotPasswordPage seja carregado
            <ForgotPasswordPage /> // Renderiza o componente ForgotPasswordPage
          </Suspense>
        }
      />
      <Route
        key={"home"} // A chave única para a rota
        path='/home' // O caminho para a rota
        element={ // O elemento a ser renderizado para a rota
          <Suspense fallback={<PageLoader />}> // Usa o componente Suspense para esperar até que o componente HomePage seja carregado
            <HomePage /> // Renderiza o componente HomePage
          </Suspense>
        }
      />
    </Routes>
  )
}

// Exporta a função AppRoutes como padrão
export default AppRoutes
