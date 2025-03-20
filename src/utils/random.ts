/**
 * Get random color for console output
 * @author shiloh
 * @date 2025/3/20 15:24
 */
export const randomColor = () => {
  const r = Math.round(Math.random() * 256)
  const g = Math.round(Math.random() * 256)
  const b = Math.round(Math.random() * 256)
  return `rgba(${r},${g},${b})`
}
