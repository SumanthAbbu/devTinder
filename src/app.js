const express = require("express");
const app = express();
app.use("/", (req, res) => res.send("Hello from server"));
app.use("/test", (req, res) => res.send("test route"));
app.use("/hello", (req, res) => res.send("Hello hello hellos"));
app.listen(7777, () => console.log("listening on port 7777"));
