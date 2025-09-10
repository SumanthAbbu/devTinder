const express = require("express");
const app = express();
const { adminAuth, userAuth } = require("./Middlewares/auth");

app.use("/admin", adminAuth);

app.get("/user", userAuth, (req, res) => {
  res.send("user data sent");
});
app.post("/user/login", (req, res) => {
  res.send("logged in");
});
app.get("/admin/getAllData", (req, res) => {
  res.send("all data sent");
});
app.get("/admin/deleteAllData", (req, res) => {
  res.send("all data deleted");
});
app.listen(7777, () => console.log("listening on port 7777"));
