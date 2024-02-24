const mongoose = require("mongoose");
let DB_URL = process.env.DB_URL;// here we are using the MongoDB Url we defined in our ENV file

module.exports = async function connection() {
  try {
    await mongoose.connect(
      DB_URL
    );
  } catch (error) {
    console.log(error);
  }
};