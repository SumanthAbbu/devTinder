const express = require("express");
const app = express();

//app.use("/route",rh1,[rh2,rh3],rh4)
app.use("/user", [
  (req, res, next) => {
    console.log("handling the router user 1");
    // res.send("Response 1");
    next();
  },
  (req, res, next) => {
    console.log("handling the router user 2");
    // res.send("Response 2");
    next();
  },
  (req, res, next) => {
    console.log("handling the router user 3");
    // res.send("Response 3");
    next();
  },
  (req, res, next) => {
    console.log("handling the router user 4");
    // res.send("Response 4");
    next();
  },
  (req, res, next) => {
    console.log("handling the router user 5");
    res.send("Response 5");
    // next();
  },
]);
app.listen(7777, () => console.log("listening on port 7777"));
