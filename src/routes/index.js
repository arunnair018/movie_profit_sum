" use strict";

const service = require("../services");

// Router
module.exports = (app) => {
  // api endpoint for normal year
  app.route("/schedule/v1/year").post(service.schedule);
  // api endpoint for leap year
  app.route("/schedule/v1/leapyear").post(service.scheduleLeap);
};
