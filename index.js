const express = require("express");
const app = express();

const cron = require("node-cron");
const { fetchAndUpdate } = require("./modules");

// Schedule tasks to be run on the server every 15 minutes.
cron.schedule("*/15 * * * *", function () {
  console.log("Running fetchAndUpdate every 15 minutes");
  fetchAndUpdate();
});

app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.send("Updating books");
  fetchAndUpdate();
});

app.listen(process.env.PORT || 3000);
