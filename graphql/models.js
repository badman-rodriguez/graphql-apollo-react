'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('FlightInfo', { 
  airline: String,
  acftType: String,
  flightNum: {
    type: String,
    required: 'Flight Number Missing'
  },
  flightNumeric: String,
  departureCity: String,
  departureState: String,
  destinationCity: String,
  destinationState: String,
  region: String,
  division: String,
  taxRule: String,
  txRouting: String,
  tailNumber: String,
  connectivtyType: String
});
