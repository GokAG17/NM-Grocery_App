const mongoose = require("mongoose");

// Local MongoDB URI
const db = 'mongodb://localhost:27017/grocery-webapp';  // Replace 'grocery-webapp' with your database name

// Connect to MongoDB using the connection string
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {
  console.log(`No connection: ${e}`);
});
