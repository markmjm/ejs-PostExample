var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs")

var friends = ["Tony", "Jim", "Jimmy"]

app.get("/", function (req, res) {
    res.render("home", {title: "Home"})
})

app.get("/friends", function (req, res) {

    res.render("friends", {friends: friends, title: "friends"})
})


app.post("/addfriend", function (req, res) {
    friends.push(req.body.newfriend);
    res.redirect("/friends");
})

//must be last
app.get("*", function (req, res) {
    res.send("Sorry, page not found.");
})

//if you want to use a different port
//in DOS command : set PORT=8000 for example.
var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});