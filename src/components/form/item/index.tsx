// Importa o componente Form do pacote antd
import { Form } from "antd"

// Importa a interface FormItemInterface do arquivo local
import FormItemInterface from "./interface/FormItemInterface"

// Define e exporta o componente Item
export const Item = ({
  className, // Nome da classe CSS aplicada ao item do formulário
  label,     // Rótulo exibido para o item do formulário
  invert,    // Propriedade não utilizada neste componente
  listName,  // Nome do item do formulário, usado para identificar o campo no formulário
  children,  // Elementos filhos do item do formulário, normalmente os campos de entrada
  rules,     // Regras de validação para o item do formulário
  ...props   // Outras propriedades passadas para o item do formulário
}: FormItemInterface) => {
  return (
    <div>
      <Form.Item
        name={listName} // Define o nome do item do formulário
        className={className} // Aplica a classe CSS ao item do formulário
        label={label} // Define o rótulo do item do formulário
        rules={rules} // Define as regras de validação do item do formulário
        {...props} // Espalha as outras propriedades no item do formulário
      >
        {children} 
      </Form.Item>
    </div>
  )
}
