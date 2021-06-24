export const dateToSeconds = (
  years = 0,
  months = 0,
  days = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
  ms = 0
) => {
  let result = ms / 1000
  if (seconds) {
    result += seconds
  }
  if (minutes) {
    result += minutes * 60
  }
  if (hours) {
    result += hours * 60 * 60
  }
  if (days) {
    result += days * 60 * 60 * 24
  }
  if (months) {
    result += months * 60 * 60 * 24 * 30
  }
  if (years) {
    result += years * 60 * 60 * 24 * 365
  }

  return result
}
