const mongoose = require("mongoose");
const { Schema } = mongoose;

const mueblesSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  material: String,
  tipo: String,
  fechaCreacion: { type: Date, default: Date.now },
  activo: Boolean,
});
module.exports = mongoose.model("Muebles", mueblesSchema);
