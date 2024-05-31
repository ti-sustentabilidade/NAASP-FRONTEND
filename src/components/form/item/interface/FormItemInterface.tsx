// Importando as dependências necessárias
import { FormItemProps } from "antd" // Propriedades do componente de item de formulário do Ant Design

// Definindo a interface para o componente de item de formulário
export interface FormItemInterface extends FormItemProps {
  listName?: string | number | string | number[] // Nome da lista para a qual o item está vinculado
  className?: string // Classe CSS para o item
  disabled?: boolean // Indica se o item está desabilitado
  invert?: boolean // Indica se a ordem dos elementos dentro do item deve ser invertida
  maxLength?: number // Comprimento máximo permitido para o valor do item
  onKeyUp?: any // Função a ser chamada quando a tecla é liberada
}

// Exportando a interface do item de formulário como padrão
export default FormItemInterface
