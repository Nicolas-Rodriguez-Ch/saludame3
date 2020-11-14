const express = require('express');
const app = express();

app.set("view engine", "pug");
app.set("views", "views");


app.get("/", (req, res) => {
    res.render("index")

});

app.post("/", (req, res) => {
    res.render("name")
});

app.listen(3000, ()=> console.log("Listening on port 3000"))