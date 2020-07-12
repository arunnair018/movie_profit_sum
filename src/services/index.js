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

// function to calculate the day of the year
// input  : "15 Feb"
// output : 46
function toDayunit(date) {
  date = date.split(" ");
  let day = parseInt(date[0]);
  let month = months.indexOf(date[1].toLowerCase());
  let dayunit = 0;
  dayunit += monthDays[month];
  dayunit += day;
  return dayunit;
}

// Job scheduler funtion
module.exports.schedule = (req, res) => {
  console.log(toDayunit("29 feb"));
  console.log(toDayunit("31 dec"));
  console.log(toDayunit("31 aug"));
};
