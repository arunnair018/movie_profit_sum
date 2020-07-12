const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const routes = require("./src/routes");

const app = express();
const port = process.env.PORT || 5000;

// Middlewares

// logs HTTP request
app.use(morgan("tiny"));
// enable cors request
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// parse application/json
app.use(bodyParser.json());

// routes
routes(app);

// init server and start listening on port
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
