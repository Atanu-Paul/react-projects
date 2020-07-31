const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://admin:1234@demo.npvrf.mongodb.net/demo?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      }
    );
    console.log(
      `MongoDB is up @ MongoAtlas :${conn.connection.host}`
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
