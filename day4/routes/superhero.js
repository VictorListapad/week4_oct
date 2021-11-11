const express = require('express');
const router = express.Router();
const SuperHero = require('../models/SuperHero');

// GET
router.get("/", async (req, res) => {
  const superheroes = await SuperHero.find();
  try {
    return res.json(superheroes)
  } catch (error) {
    return res.json({error: error});
  }
});

// GET/id where id = dog
router.get("/hero/:id", async (req, res) => {
  const id = req.params.id;
  const singleHero = await SuperHero.findById(id);
  try {
    return res.json(singleHero);
  } catch (error) {
    return res.json(error)
  }
})

// POST/
router.post("/hero", async (req, res) => {
  const data = req.body;
  const newSuperHero = await SuperHero.create(data)
  try {
    return res.json(newSuperHero);
  } catch (error) {
    return res.json(error)
  }
})

// PUT/id
router.put("/hero/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const heroToUpdate = await SuperHero.findByIdAndUpdate(id, data, {new: true});
  try {
    return res.json(heroToUpdate);
  } catch (error) {
    return res.json(error);
  }
});

// DELETE
router.delete("/hero/:id", async (req, res) => {
  const id = req.params.id;
  const heroToDelete = await SuperHero.findByIdAndDelete(id);
  try {
    return res.json({message: "Succesfully deleted the super hero"});
  } catch (error) {
    return res.json(error);
  }
})

module.exports = router;