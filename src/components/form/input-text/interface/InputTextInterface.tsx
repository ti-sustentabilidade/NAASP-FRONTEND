// Importando as dependências necessárias
import { InputProps } from "antd" // Propriedades do componente de entrada do Ant Design
import { Rule } from "antd/es/form" // Regras para validação de formulário do Ant Design
import { ReactNode } from "react" // Tipo para elementos ou componentes React

// Definindo a interface para o componente de entrada de texto
export interface InputTextInterface extends InputProps {
  listName?: string | number | string | number[] // Nome da lista para a qual o input está vinculado
  label?: ReactNode // Rótulo para o campo de entrada
  rules?: Rule[] // Regras de validação para o campo de entrada
  password?: boolean // Indica se o campo de entrada é para senha
}
