" use strict";

const service = require("../services");
const {
  userValidationRules,
  validate,
} = require("../middlewares/jsonValidator");

// Router
module.exports = (app) => {
  // api endpoint for normal year
  app
    .route("/api/v1/schedule/year")
    .post(userValidationRules(), validate, service.schedule);
  // api endpoint for leap year
  app
    .route("/api/v1/schedule/leapyear")
    .post(userValidationRules(), validate, service.scheduleLeap);
};
