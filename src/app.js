const express = require("express");
const app = express();

//this will only handle get call
app.get("/user", (req, res) => {
  res.send({ firstName: "sumanth", lastName: "Abbu" });
});
//this will only handle post calls
app.post("/user", (req, res) => {
  //data saved to DB
  res.send("data saved successfulkly");
});
//this will handle only delete api calls
app.delete("/user", (req, res) => {
  //data delete successfully fromn DB
  res.send("data deleted successfully");
});

//this will handle all http method calls
app.use("/user", (req, res) => res.send("user route"));

app.use("/", (req, res) => res.send("Hello from server"));

app.listen(7777, () => console.log("listening on port 7777"));
