"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var sch = Schema({
  ip: String,
  city: String,
  region: String,
  country_name: String,
  location: {
    lat: String,
    lon: String
  },
  user_agent: {
    browser: String,
    version: String,
    os: String,
    platform: String,
    source: String
  },
  createdAt: {
    type: Date,
    "default": Date.now
  }
});
module.exports = mongoose.model('log_user', sch);