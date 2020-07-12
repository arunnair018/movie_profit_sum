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
// input: "15 Feb"
// output: 46
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
  // parse data from body
  let data = req.body.data;
  let result = [];
  let last_finish_time = 0;

  // sort the data based on finish date
  data.sort(function (x, y) {
    let a = toDayunit(x.end_date);
    let b = toDayunit(y.end_date);
    return a == b ? 0 : a > b ? 1 : -1;
  });

  // apply job scheduling maximization algorithm
  for (let i = 0; i < data.length; i++) {
    if (toDayunit(data[i].start_date) > last_finish_time) {
      result.push(data[i]);
      last_finish_time = toDayunit(data[i].end_date);
    }
  }

  // create response
  let response = { movies: result, profit: result.length };

  // send response
  res.send(response);
};
