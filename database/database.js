const mongoose = require("mongoose");

//  mongodb://127.0.0.1:27017/test

let mongoUri =
  "mongodb+srv://javiervassallo55:cagWginkF4KzIRli@cluster0.e1rtajk.mongodb.net/rossexperimental?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);
mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB conectada");
  })
  .catch((err) => {
    console.log("ERROR: " + err);
  });
