import { Spin } from "antd"
import { PageLoaderType } from "./types/PageLoaderType"

export const PageLoader = ({ children, loading }: PageLoaderType) => {
  return (
    <div className="app-page-loader">
      <Spin
        spinning={typeof loading == "undefined" ? true : loading}
        size="large"
      >
        {children}
      </Spin>
    </div>
  )
}
