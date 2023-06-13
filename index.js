const express = require("express");
const cors = require("cors");
const app = express();
const mueblesRoute = require("./routes/muebles");
require("./database/database.js");

app.set("PORT", 5000);

app.use(cors());
app.use(express.json());
app.use(mueblesRoute);
app.listen(app.get("PORT"), () => {
  console.log(`Servidor ejecutándose en puerto
    ${app.get("PORT")}`);
});
