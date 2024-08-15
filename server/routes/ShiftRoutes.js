const router = require('express').Router()
const Shift = require('../models/ShiftModel')
const shiftSchema = require('../models/ShiftValidation')

router.post('/', async (req, res) => {
  try {
    const result = shiftSchema.safeParse(req.body)
    if (!result.success) {
      return res.status(400).json({ errors: result.error.errors })
    }
    const newShift = new Shift(result.data)
    await newShift.save()
    res.status(201).json(newShift)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Internal server error' })
  }
})

router.get('/', async (req, res) => {
  try {
    const shifts = await Shift.find()
    res.status(200).json(shifts)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Internal server error' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const shiftID = req.params.id
    const shift = await Shift.findById(shiftID)
    if (!shift) {
      return res.status(404).json({ message: 'Shift not found' })
    }
    res.status(200).json(shift)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Internal server error' })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const result = shiftSchema.safeParse(req.body)
    if (!result.success) {
      return res.status(400).json({ errors: result.error.errors })
    }
    const shiftID = req.params.id
    const updatedShift = await Shift.findByIdAndUpdate(shiftID, result.data, {
      new: true,
      runValidators: true,
    })
    if (!updatedShift) {
      return res.status(404).json({ message: 'Shift not found' })
    }
    res.status(200).json(updatedShift)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Internal server error' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const shiftID = req.params.id
    const deletedShift = await Shift.findByIdAndDelete(shiftID)
    if (!deletedShift) {
      return res.status(404).json({ message: 'Shift not found' })
    }
    res.status(200).json({})
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Internal server error' })
  }
})

module.exports = router
