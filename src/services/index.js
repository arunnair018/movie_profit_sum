"use strict";

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
const toDayunit = require("./dayUnit");

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
    let start = toDayunit(data[i].start_date, false);
    let end = toDayunit(data[i].end_date, false);
    if (start > end) {
      let err = `data[${i}]`;
      res.status(422).send({ errors: [{ [err]: "invalid date range" }] });
      return;
    }
    if (start > last_finish_time) {
      result.push(data[i]);
      last_finish_time = end;
    }
  }

  // create response
  let response = { movies: result, maximum_profit: result.length };

  // send response
  res.send(response);
};
