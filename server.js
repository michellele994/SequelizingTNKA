const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false }));

app.use(bodyParser.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var db = require("./models");

require("./controllers/ass_controller.js")(app);


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});