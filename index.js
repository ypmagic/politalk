var express = require("express");
var app = express();
var mongoose = require("mongoose");

app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/politalk");

//SCHEMA
var politicianSchema = new mongoose.Schema({
  name: String,
  queries: Array,
  fallback: String
});

var politician = mongoose.model("politician", politicianSchema);
// politician.create({
//   name: "Clinton",
//   queries: queries,
//   fallback: "I think that we've got so much business we have to do. We've talked a lot tonight about what we're against. But I'm for a lot of things. I don't want to just stop bad things from happening, I want to start good things from happening. And I believe, if I'm so fortunate to get the nomination, I will begin to work immediately on putting together an agenda, beginning to talk with members of Congress and others about how we can push forward. I want to have half a billion more solar panels deployed, the first four years. I want to have enough clean energy to power every home the next four years. I want us to keep working on the Affordable Care Act, to get not only to 100 percent coverage, but bring down the costs of prescription drugs and out-of-pocket costs."
// });


app.get("/", function(req, res) {
  politician.find({}, function(err, poli) {
    if (err) {
      console.log(err);
    } else {
      res.render("index", {
        poli: JSON.stringify(poli),
      });
    }
  });
});

app.listen(3000, "127.0.0.1", function() {
  console.log("The server has started");
})
