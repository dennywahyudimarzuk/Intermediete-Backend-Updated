const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const usersRoutes = require("./src/Routes/Users");
const authRoutes = require("./src/Routes/Auth");
const uploadRoute = require("./src/Routes/Upload")
const transferRoutes = require("./src/Routes/Transfer")
const topupRoutes = require("./src/Routes/Topup")

require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/profile', usersRoutes)
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/upload', uploadRoute)
app.use('/api/v1/transfer', transferRoutes)
app.use('/api/v1/topup', topupRoutes)

app.listen(process.env.DEFAULT_PORT, () => {
  console.log(`server running on port ${process.env.DEFAULT_PORT}`);
});
