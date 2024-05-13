import { InputProps } from "antd"
import { Rule } from "antd/es/form"
import { ReactNode } from "react"

export interface InputTextInterface extends InputProps {
  listName?: string | number | string | number[]
  label?: ReactNode
  rules?: Rule[]
  password?: boolean
}
