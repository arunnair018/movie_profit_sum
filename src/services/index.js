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
function toDayunit(date, leap) {
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
}

/* 
algorithm:
convert dates into the day of year
sort the movies based on earliest finish date
include movie with earliest finish time in result set
ignore all the movies overlapping with last added movie
loop previous two step until no remaining movies
return result set which is maximum-size subset of non-overlapping movies.
*/

// #######################################
// Job scheduler funtion for non-leap year
// #######################################

module.exports.schedule = (req, res) => {
  // parse data from body
  let data = req.body.data;
  let result = [];
  let last_finish_time = 0;

  // sort the data based on finish date
  data.sort(function (x, y) {
    let a = toDayunit(x.end_date, false);
    let b = toDayunit(y.end_date, false);
    return a == b ? 0 : a > b ? 1 : -1;
  });

  // apply job scheduling maximization algorithm
  for (let i = 0; i < data.length; i++) {
    if (toDayunit(data[i].start_date, false) > last_finish_time) {
      result.push(data[i]);
      last_finish_time = toDayunit(data[i].end_date, false);
    }
  }

  // create response
  let response = { movies: result, maximum_profit: result.length };

  // send response
  res.send(response);
};

// #######################################
// Job scheduler funtion for leap year
// #######################################
module.exports.scheduleLeap = (req, res) => {
  // parse data from body
  let data = req.body.data;
  let result = [];
  let last_finish_time = 0;

  // sort the data based on finish date
  data.sort(function (x, y) {
    let a = toDayunit(x.end_date, true);
    let b = toDayunit(y.end_date, true);
    return a == b ? 0 : a > b ? 1 : -1;
  });

  // apply job scheduling maximization algorithm
  for (let i = 0; i < data.length; i++) {
    if (toDayunit(data[i].start_date, true) > last_finish_time) {
      result.push(data[i]);
      last_finish_time = toDayunit(data[i].end_date, true);
    }
  }

  // create response
  let response = { movies: result, maximum_profit: result.length };

  // send response
  res.send(response);
};
