const mueblesSchema = require("../../models/mueblesSchema");

let mueblesController = {};

/* GET */

mueblesController.getMuebles = async () => {
  return mueblesSchema.find();
};

mueblesController.getMueble = async (nombre) => {
  return mueblesSchema.find({ nombre: nombre });
};

/* POST */

mueblesController.postMuebles = async (body) => {
  const mueble = mueblesSchema(body);
  return mueble.save();
};

/* PUT */

mueblesController.putMueble = async (nombre, body) => {
  return mueblesSchema.findOneAndUpdate({ nombre: nombre }, body);
};

/* DELETE */

mueblesController.deleteMueble = async (nombre) => {
  return mueblesSchema.deleteOne({ nombre: nombre });
};

module.exports = mueblesController;
