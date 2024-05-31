// Importa o componente de notificação do pacote antd
import { notification } from "antd"

// Importa o tipo ReactNode do pacote react
import { ReactNode } from "react"

// Define um tipo personalizado NotificationType que pode ser "success", "info", "warning" ou "error"
type NotificationType = "success" | "info" | "warning" | "error"

// Define e exporta a função openNotification
export const openNotification = (
  type: NotificationType, // O tipo da notificação
  message: string | ReactNode, // A mensagem da notificação
  placement: any, // A posição da notificação na tela
  description?: string, // A descrição opcional da notificação
  duration = 4 // A duração da notificação em segundos, padrão é 4 segundos
) => {
  // Abre a notificação
  notification.open({
    type: type, // Define o tipo da notificação
    message: message, // Define a mensagem da notificação
    description: description, // Define a descrição da notificação
    placement: placement, // Define a posição da notificação
    style: { fontFamily: "DM Sans", fontSize: "20px" }, // Define o estilo da notificação
    duration: duration, // Define a duração da notificação
  })
}

// Exporta a função openNotification como padrão
export default openNotification
