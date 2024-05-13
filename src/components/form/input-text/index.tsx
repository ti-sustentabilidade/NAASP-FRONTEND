import { Input } from "antd"
import { Item } from "../item"
import { InputTextInterface } from "./interface/InputTextInterface"

export const InputText = ({
  name,
  listName,
  label,
  value,
  disabled,
  rules,
  hidden,
  size,
  password,
  ...props
}: InputTextInterface) => {
  return (
    <>
      <Item
        name={listName || name}
        label={label}
        disabled={disabled}
        rules={rules}
      >
        {password ? (
          <Input.Password
            size={size ? size : "large"}
            disabled={disabled}
            value={value}
            type={hidden ? "hidden" : "text"}
            {...props}
          />
        ) : (
          <Input
            size={size ? size : "large"}
            disabled={disabled}
            value={value}
            type={hidden ? "hidden" : "text"}
            {...props}
          />
        )}
      </Item>
    </>
  )
}

export default InputText
