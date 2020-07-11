const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const routes = require("./src/routes");

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(morgan("tiny"));
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// routes
routes(app);

// init server and start listening on port
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
