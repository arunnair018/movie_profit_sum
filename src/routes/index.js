" use strict";

const service = require("../services");

module.exports = (app) => {
  app.route("/").get(service.optimize);
};
