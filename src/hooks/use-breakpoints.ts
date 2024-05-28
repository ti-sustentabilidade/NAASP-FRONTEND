import { useState, useEffect } from "react"

export const useBreakPoints = () => {
  const hasWindow = typeof window !== "undefined"

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null
    const height = hasWindow ? window.innerHeight : null

    return { width, height }
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions())
      }

      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [hasWindow])

  const xs = windowDimensions.width ? windowDimensions.width <= 480 : false
  const sm = windowDimensions.width ? windowDimensions.width <= 576 : false
  const md = windowDimensions.width ? windowDimensions.width <= 768 : false
  const lg = windowDimensions.width ? windowDimensions.width <= 992 : false
  const xl = windowDimensions.width ? windowDimensions.width <= 1200 : false
  const xxl = windowDimensions.width ? windowDimensions.width <= 1600 : false

  return {
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    isMobile: xs || sm || md,
  }
}
