" use strict";

const service = require("../services");

// Router
module.exports = (app) => {
  // api endpoint for normal year
  app.route("/api/v1/schedule/year").post(service.schedule);
  // api endpoint for leap year
  app.route("/api/v1/schedule/leapyear").post(service.scheduleLeap);
};
