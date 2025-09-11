const express = require("express");
const app = express();
const connectDB = require("./config/dataBase");
const User = require("./models/user");
app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "sumanth",
    lastName: "abbu",
    gender: "male",
    userID: "sumanth@sree.com",
    password: "Sumanth@123",
  });
  try {
    await user.save();
    res.send("user added successfully");
  } catch (err) {
    res.status(400).send("Error saving the user: " + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("database connection successful");
    app.listen(7777, () => console.log("listening on port 7777"));
  })
  .catch((err) =>
    connectDB.error("something went wrong, dataBase cannpt be connected...")
  );
