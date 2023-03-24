// 1. import all dependencies
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

// 2. configure express
// make sure these lines are above any app.get or app.post code blocks
app.use(cors(), express.json(), express.urlencoded({ extended: true })); // recognize JSON object

// 3. require routes and database configuration
require("./routes/jokes.routes")(app);
require("./configs/mongoose.config");

// 4. listen on the port
app.listen(8000, () => console.log(`Listening on port: 8000`));
