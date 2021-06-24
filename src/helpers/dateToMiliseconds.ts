export const dateToMilliseconds = (
  years = 0,
  months = 0,
  days = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
  ms = 0
) => {
  let result = ms
  if (seconds) {
    result += seconds * 1000
  }
  if (minutes) {
    result += minutes * 1000 * 60
  }
  if (hours) {
    result += hours * 1000 * 60 * 60
  }
  if (days) {
    result += days * 1000 * 60 * 60 * 24
  }
  if (months) {
    result += months * 1000 * 60 * 60 * 24 * 30
  }
  if (years) {
    result += years * 1000 * 60 * 60 * 24 * 365
  }

  return result
}
