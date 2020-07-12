# Kommunicate Assignment

## Setup/Installations

- Install [nodejs 12.18.2 LTS](https://nodejs.org/en/)

## Running the setup

- Install dependencies using `npm install`.
- Start server using `npm run dev`.

## API Endpoints

### Schedule Movies

Returns final list of movies to select along with the maximum profit.

##### URL

- for a non-leap year
  `/schedule/v1/year`

- for a leap year
  `/schedule/v1/leapyear`

##### Method

POST

##### Data Params

    data = {
    "data" : [{
    "movie_name" : String,
    "start_date" : String,
    "end_date" : String
    }]
    }

##### Success Response

- Code: 200  
  Content: `{ "movies": [ { "movie_name": String, "start_date": String, "end_date": String } ], "maximum_profit": Integer }`

##### Error Response

##### Sample Call

```javascript
var axios = require("axios");
var data = JSON.stringify({
  data: [
    { movie_name: "Drive", start_date: "1 jan", end_date: "15 jan" },
    { movie_name: "brave", start_date: "15 feb", end_date: "15 jul" },
    { movie_name: "bala", start_date: "15 jan", end_date: "15 feb" },
    { movie_name: "rock", start_date: "15 jul", end_date: "15 aug" },
    { movie_name: "PolicyMaker", start_date: "15 aug", end_date: "10 nov" },
    { movie_name: "race", start_date: "10 nov", end_date: "31 dec" },
  ],
});
var config = {
  method: "post",
  url: "http://localhost:5000/schedule/v1/leapyear",
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
    console.log(error);
  });
```
