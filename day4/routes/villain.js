const express = require('express');
const router = express.Router();

const Villain = require('../models/Villain');

// GET
router.get("/", async (req, res) => {
  const villains = await Villain.find().populate("rival")
  try {
    return res.json(villains);
  } catch (error) {
    return res.json(error);
  }
})


// PUT/id
router.put("/villain/:id", async (req, res) => {
  const {id} = req.params;
  const data = req.body;
  const villainToUpdate = await Villain.findByIdAndUpdate(id, data, {new: true});
  try {
    return res.json(villainToUpdate);
  } catch (error) {
    return res.json(error);
  }
})

module.exports = router;