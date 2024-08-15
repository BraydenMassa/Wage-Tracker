const { z } = require('zod')

const shiftSchema = z.object({
  shiftType: z.enum(['Server', 'Bartender'], {
    required_error: 'Shift type is required',
    invalid_type_error: 'Shift type must be one of: Server, Bartender',
  }),
  hoursWorked: z
    .number()
    .min(0, { message: 'Hours worked must be a positive number' }),
  totalCardTips: z
    .number()
    .min(0, { message: 'Total card tips must be a positive number' }),
  totalCashTips: z
    .number()
    .min(0, { message: 'Total cash tips must be a positive number' }),
})

module.exports = shiftSchema
