const express = require("express");
const app = express();
const port = "3000";
let t = new Date();
let h = t.getHours();
let m = t.getMinutes();
t = h + ":" + m;

//routes
app.get("/", (req, res) => {
  res.send("ok :)");
});
app.get("/test", (req, res) => {
  res.send({ status: 200, message: "ok" });
});

app.get("/time", (req, res) => {
  res.send({
    status: 200,
    message: t
  });
});

app.listen(port, () => {
  console.log(`server is running at: http://localhost:${port}/`);
});
