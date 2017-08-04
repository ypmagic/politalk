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
//   fallback: "I’m Hillary Clinton. I have been proud and privileged to serve as First Lady, as a Senator from New York, and as Secretary of State. I’m the granddaughter of a factory worker and the grandmother of a wonderful one-year-old child. And every day I think about what we need to do to make sure that opportunity is available, not just for her, but for all of our children. I’ve traveled across our country over the last months listening, and learning, and I’ve put forward specific plans about how we’re going to create more good-paying jobs by investing in infrastructure and clean energy, by making it possible once again to invest in science and research and taking the opportunity posed by climate change to grow our economy."
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
