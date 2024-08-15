const mongoose = require('mongoose')
const { z } = require('zod')

const shiftSchema = new mongoose.Schema({
  shiftType: {
    type: String,
    required: true,
  },
  hoursWorked: {
    type: Number,
    required: true,
  },
  totalCardTips: {
    type: Number,
    required: true,
  },
  totalCashTips: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
})
module.exports = mongoose.model('Shifts', shiftSchema)
