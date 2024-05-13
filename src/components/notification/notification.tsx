import { notification } from "antd"
import { ReactNode } from "react"

type NotificationType = "success" | "info" | "warning" | "error"

export const openNotification = (
  type: NotificationType,
  message: string | ReactNode,
  placement: any,
  description?: string,
  duration = 4
) => {
  notification.open({
    type: type,
    message: message,
    description: description,
    placement: placement,
    style: { fontFamily: "DM Sans", fontSize: "20px" },
    duration: duration,
  })
}

export default openNotification
