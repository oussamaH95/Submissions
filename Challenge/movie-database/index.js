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
app.get("/time", (req, res) => {
  res.send({
    status: 200,
    message: t
  });
});
app.get("/hello/:id", (req, res) => {
  let id = req.params.id;
  res.send({
    status: 200,
    message: "hello " + id
  });
});
app.get("/search", (req, res) => {
  if (req.query.s) {
    res.send({
      status: 200,
      message: "ok",
      data: req.query.s
    });
  } else {
    res.send({
      status: 500,
      error: true,
      message: "you have to provide a search"
    });
  }
});
app.listen(port, () => {
  console.log(`server is running at: http://localhost:${port}/`);
});
app.get("movies/crate", (req, res) => {
  res.send({
    status: 200,
    message: "this is create page"
  });
});
app.get("movies/read", (req, res) => {
  res.send({
    status: 200,
    message: "this is read page"
  });
});
app.get("movies/update", (req, res) => {
  res.send({
    status: 200,
    message: "this is update page"
  });
});
app.get("movies/delete", (req, res) => {
  res.send({
    status: 200,
    message: "this is delete page"
  });
});
