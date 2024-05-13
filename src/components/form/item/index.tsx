import { Form } from "antd"
import FormItemInterface from "./interface/FormItemInterface"

export const Item = ({
  className,
  label,
  invert,
  listName,
  children,
  rules,
  ...props
}: FormItemInterface) => {
  return (
    <div>
      <Form.Item
        name={listName}
        className={className}
        label={label}
        rules={rules}
        {...props}
      >
        {children}
      </Form.Item>
    </div>
  )
}
