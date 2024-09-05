const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/movie_db")
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  director: String,
  year: Number,
  rating: Number,
});

const Movie = mongoose.model("Movie", movieSchema);

// * Delete
Movie.deleteOne({ title: "Avengers: Infinity War" })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// Movie.findByIdAndUpdate("66d83883680eae9edd6537cc", { rating: 9 }, { new: true })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// * Update One
// Movie.updateOne({ title: "Parasite" }, { rating: 7.0 })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// * Update Many
// Movie.updateMany({ year: { $lt: 2019 } }, { rating: 8 })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//* find movie by year and genre
// Movie.find({ year: { $gt: 2018 }, genre: "Drama" })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//*   find movie by id
// Movie.findOne({ _id: "66d83883680eae9edd6537ce" })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Movie.findById("66d83883680eae9edd6537ce")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const movie = new Movie({
//   title: "Black Panther",
//   year: 2018,
//   score: 7.9,
//   director: "Ryan Coogler",
// });

// movie.save();

// console.log(movie);

// Movie.insertMany([
//   {
//     title: "Black Panther",
//     genre: "Action",
//     director: "Ryan Coogler",
//     year: 2018,
//     rating: 7.3,
//   },
//   {
//     title: "Avengers: Infinity War",
//     genre: "Action",
//     director: "Anthony Russo, Joe Russo",
//     year: 2018,
//     rating: 8.4,
//   },
//   {
//     title: "Joker",
//     genre: "Crime",
//     director: "Todd Phillips",
//     year: 2019,
//     rating: 8.4,
//   },
//   {
//     title: "Parasite",
//     genre: "Drama",
//     director: "Bong Joon Ho",
//     year: 2019,
//     rating: 8.6,
//   },
//   {
//     title: "Spider-Man: Into the Spider-Verse",
//     genre: "Animation",
//     director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
//     year: 2018,
//     rating: 8.4,
//   },
// ])
//   .then((result) => {
//     console.log("success");
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
