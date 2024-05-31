// Importa o componente Spin do pacote antd
import { Spin } from "antd"

// Importa o tipo PageLoaderType do arquivo local
import { PageLoaderType } from "./types/PageLoaderType"

// Define e exporta o componente PageLoader
export const PageLoader = ({ children, loading }: PageLoaderType) => {
  return (
    <div className="app-page-loader">
      <Spin
        spinning={typeof loading == "undefined" ? true : loading} // Se loading for indefinido, o padrão é true, caso contrário, usa o valor de loading
        size="large" // Define o tamanho do spinner como grande
      >
        {children} // Renderiza os elementos filhos dentro do spinner
      </Spin>
    </div>
  )
}
