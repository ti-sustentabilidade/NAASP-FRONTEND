// Importando as dependências necessárias
import { Input } from "antd" // Componente de entrada do Ant Design
import { Item } from "../item" // Componente de item personalizado
import { InputTextInterface } from "./interface/InputTextInterface" // Interface para o componente de entrada de texto

// Definindo o componente de entrada de texto
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
        name={listName || name} // Nome do item
        label={label} // Rótulo para o item
        disabled={disabled} // Se o item está desabilitado
        rules={rules} // Regras de validação para o item
      >
        {password ? (
          <Input.Password
            size={size ? size : "large"} // Tamanho do campo de entrada
            disabled={disabled} // Se o campo de entrada está desabilitado
            value={value} // Valor do campo de entrada
            type={hidden ? "hidden" : "text"} // Tipo do campo de entrada
            {...props} // Outras propriedades passadas para o campo de entrada
          />
        ) : (
          <Input
            size={size ? size : "large"} // Tamanho do campo de entrada
            disabled={disabled} // Se o campo de entrada está desabilitado
            value={value} // Valor do campo de entrada
            type={hidden ? "hidden" : "text"} // Tipo do campo de entrada
            {...props} // Outras propriedades passadas para o campo de entrada
          />
        )}
      </Item>
    </>
  )
}

// Exportando o componente de entrada de texto como padrão
export default InputText
