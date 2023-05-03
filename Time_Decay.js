/**
 * @description Time Decay Calculate
 * @param {string} data - Date string
 * @returns {string} weight
 */
function calcPostWeight (dateStr) {
  const now = new Date().getTime()
  const halfLife = 43200000 // 12h
  const age = now - new Date(dateStr).getTime()
  const timeDecayFactor = Math.pow(0.5, age / halfLife)
  return timeDecayFactor
}
