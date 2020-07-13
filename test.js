var axios = require("axios");
var data = JSON.stringify({
  data: [
    { movie_name: "Drive", start_date: "1 jan", end_date: "15 jan" },
    { movie_name: "brave", start_date: "15 feb", end_date: "15 jul" },
    { movie_name: "bala", start_date: "15 jan", end_date: "15 feb" },
    { movie_name: "rock", start_date: "15 jul", end_date: "15 aug" },
    { movie_name: "PolicyMaker", start_date: "15 aug", end_date: "10 nov" },
    { movie_name: "race", start_date: "10 nov", end_date: "" },
  ],
});

var config = {
  method: "post",
  url: "https://movieapi018.herokuapp.com/api/v1/schedule/leapyear",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error.errors);
  });
