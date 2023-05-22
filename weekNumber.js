/**
 * Get the ISO week number of a date
 * @param {Date} date - The date to get the week number for
 * @returns {number} - The ISO 8601 week number
 */
function getWeekNumber(date) {
  // Copy the date so we don't modify the original
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  // Get first day of year
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  // Calculate full weeks to nearest Thursday
  const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  // Return array of year and week number
  return weekNo;
}

// Export the getWeekNumber function as a module
module.exports = { getWeekNumber };