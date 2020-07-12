" use strict";

const service = require("../services");

// Router
module.exports = (app) => {
  app.route("/").post(service.schedule);
};
