const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campaignSchema = new Schema({
  zipcode: String,
  candidate: String,
  office: String,
  party: String,
  electionDate: String,
  flag: Boolean
});

module.exports = mongoose.model('campaign', campaignSchema);
