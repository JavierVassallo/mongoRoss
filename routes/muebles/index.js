const express = require("express");
const mueblesController = require("../../controllers/mueblesControllers");

const router = express.Router();

router.get("/muebles", async (req, res) => {
  try {
    let respuesta = await mueblesController.getMuebles();
    res.json(respuesta);
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

router.get("/mueble", async (req, res) => {
  const { query } = req;
  try {
    let respuesta = await mueblesController.getMueble(query.nombre);
    res.json(respuesta);
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

router.post("/mueble", async (req, res) => {
  try {
    let respuesta = await mueblesController.postMuebles(req.body);
    res.json(respuesta);
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

router.put("/mueble", async (req, res) => {
  let { nombre, body } = req.body;
  try {
    let respuesta = await mueblesController.putMueble(nombre, body);

    res.json(respuesta);
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

router.delete("/mueble", async (req, res) => {
  let { nombre } = req.body;
  try {
    let respuesta = await mueblesController.deleteMueble(nombre);

    res.json(respuesta);
  } catch (e) {
    res.json({ success: false, error: e.message });
  }
});

module.exports = router;
