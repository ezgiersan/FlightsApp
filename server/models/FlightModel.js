const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({
  id: {type: String},
  lastUpdatedAt: { type: String },
  actualLandingTime: { type: String },
  airlineCode: { type: String },
  flightName: { type: String },
  flightNumber: { type: Number },
  scheduleDate: { type: String },
  scheduleDateTime: { type: String },
  terminal: { type: Number },
  route: {
    destinations: [String], // String dizisi (array)
    eu: String,      
    visa: Boolean           
  },
  estimatedLandingTime: {type: String },
  scheduleTime: {type: String}
  
});

module.exports = mongoose.model('Flight', FlightSchema);
