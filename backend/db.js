const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://mongo:mongopassword@cluster0.zdijhdb.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Failed to connect to MongoDB", err);
    });
};

module.exports = connectToMongo;
