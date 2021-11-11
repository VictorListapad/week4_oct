const { model, Schema } = require("mongoose");

const villainSchema = Schema({
  name: { type: String },
  color: { type: String },
  rival: { type: Schema.Types.ObjectId, ref: 'SuperHero' },
});

module.exports = model("Villain", villainSchema);
