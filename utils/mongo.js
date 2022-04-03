const mongoose = require("mongoose");

mongoose.connection.once("open", () => {
  console.log("MongoDB is ready!");
});

mongoose.connection.on("error", (err) => {
  console.log(`Error: ${err}`);
});

async function mongoConnect() {
  await mongoose.connect(process.env.MONGO_URL);
}

module.exports = mongoConnect;
