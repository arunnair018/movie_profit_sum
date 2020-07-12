" use strict";

//const service = require("../services");
const test = require("../services");

module.exports = (app) => {
  app.route("/").get(test.schedule);
};
