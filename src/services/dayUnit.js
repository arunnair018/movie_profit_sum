"use strict";

// arrays to get index of month and day of month
const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];
const monthDays = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
const leapmonthDays = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

// function to calculate the day of the year
// input: "15 Feb"
// output: 46
module.exports = function toDayunit(date, leap) {
  date = date.split(" ");
  let day = parseInt(date[0]);
  let month = months.indexOf(date[1].toLowerCase());
  let dayunit = 0;
  if (leap) {
    dayunit += monthDays[month];
  } else {
    dayunit += leapmonthDays[month];
  }
  dayunit += day;
  return dayunit;
};
