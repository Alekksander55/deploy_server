const express = require("express");
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const app = express();
app.use(cors());

app.get("/api/:name", (req, res) => {
  res.json({ message: `Hello ${req.params.name}, from server! ${process.env.NY_NAME}` });
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server listening on ${process.env.PORT || 3001}`);
});
