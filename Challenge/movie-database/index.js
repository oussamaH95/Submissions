const express = require("express");
const app = express();
const port = "3000";
let t = new Date();
let h = t.getHours();
let m = t.getMinutes();
t = h + ":" + m;
const movies = [
  { title: "Jaws", year: 1975, rating: 8, id: 1 },
  { title: "Avatar", year: 2009, rating: 7.8, id: 2 },
  { title: "Brazil", year: 1985, rating: 8, id: 3 },
  { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2, id: 4 }
];
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
app.get("/movies/create", (req, res) => {
  res.send({
    status: 200,
    message: "this is create page"
  });
});
app.get("/movies/read", (req, res) => {
  res.send({
    status: 200,
    data: movies
  });
});
app.get("/movies/read/by-date", (req, res) => {
  res.send({
    status: 200,
    data: movies.sort(function(a, b) {
      return a.year - b.year;
    })
  });
});
app.get("/movies/read/by-rate", (req, res) => {
  res.send({
    status: 200,
    data: movies.sort(function(a, b) {
      return a.rating - b.rating;
    })
  });
});
app.get("/movies/read/by-title", (req, res) => {
  res.send({
    status: 200,
    data: movies.sort(function(a, b) {
      var x = a.title.toLowerCase();
      var y = b.title.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    })
  });
});
app.get("/movies/read/id/:id", (req, res) => {
  let id = req.params.id;
  for (let i = 0; i < movies.length; i++)
    if (id == movies[i].id)
      res.send({
        status: 200,
        data: movies[i]
      });
  res.send({
    status: 404,
    error: true,
    message: "the movie <ID> does not exist"
  });
});
app.get("/movies/add", (req, res) => {
  let movieTitle = req.query.title;
  let movieYear = req.query.year;
  let movieRating = req.query.rating;
  if (movieTitle != null && movieYear <= 9999 && movieYear > 999) {
    movies[movies.length] = {
      title: movieTitle,
      year: movieYear,
      rating: movieRating,
      id: movies.length + 1
    };
    res.send(movies.map(item => item));
  } else
    res.send({
      status: 403,
      error: true,
      message: "you cannot create a movie without providing a title and a year"
    });
});
app.get("/movies/add", (req, res) => {
  let movieTitle = req.query.title;
  let movieYear = req.query.year;
  let movieRating = req.query.rating;
  if (movieTitle != null && movieYear <= 9999 && movieYear > 999) {
    movies[movies.length] = {
      title: movieTitle,
      year: movieYear,
      rating: movieRating,
      id: movies.length + 1
    };
    res.send(movies.map(item => item));
  } else
    res.send({
      status: 403,
      error: true,
      message: "you cannot create a movie without providing a title and a year"
    });
});
app.get("/movies/delete/id/:id", (req, res) => {
  let id = req.params.id;
  if (id > 0 && id < movies.length) {
    movies.splice(id - 1, 1);
    res.send({
      status: 200,
      message: "deleted..."
    });
  } else
    res.send({
      status: 404,
      error: true,
      message: "the movie <ID> does not exist"
    });
});
app.get("/movies/update", (req, res) => {
  res.send({
    status: 200,
    message: "this is delete page"
  });
});
