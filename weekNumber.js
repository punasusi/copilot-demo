// weekNumber.js

/**
 * Get the ISO week number of a date
 * @param {Date} date - The date to get the week number for
 * @returns {number} - The ISO 8601 week number
 */
function getWeekNumber(date) {
    // Create a new date object for the target date
    let target = new Date(date.valueOf());
  
    // ISO weeks start on Monday, so correct the day number
    let dayNr = (date.getDay() + 6) % 7;
  
    // ISO 8601 states that week 1 is the week with the first Thursday of that year.
    // Set the target date to the Thursday in the target week
    target.setDate(target.getDate() - dayNr + 3);
  
    // Store the millisecond value of the target date
    let firstThursday = target.valueOf();
  
    // Set the target to the first Thursday of the year
    // This is done by subtracting the remainder of the week number when divided by 7 from the current date
    target.setMonth(0, 1);
    if (target.getDay() !== 4) {
        target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
    }
  
    // Return the ISO week number
    return 1 + Math.ceil((firstThursday - target) / 604800000); // 604800000 = number of milliseconds in a week
  }
  
  // Export the getWeekNumber function as a module
  module.exports = { getWeekNumber };
  