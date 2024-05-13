import { FormItemProps } from "antd"

export interface FormItemInterface extends FormItemProps {
  listName?: string | number | string | number[]
  className?: string
  disabled?: boolean
  invert?: boolean
  maxLength?: number
  onKeyUp?: any
}

export default FormItemInterface
