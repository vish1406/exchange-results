import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.post("/result", async (req, res) => {
  const { market_id, type } = req.body;
  let data, res1;
  if (type == "bookmakers") {
    res1 = await axios.get('http://142.93.36.1/api/v1/marketResult?type=odds&market_id=' + market_id);
    data = res1.data;
  }
  else if (type == "fancy") {
    res1 = await axios.get('http://142.93.36.1/api/v1/marketResult?type=session&market_id=' + market_id);
    data = res1.data;
  }
  else if (type == "fancy1") {
    res1 = await axios.get('http://142.93.36.1/api/v1/marketResult?type=fancy1&market_id=' + market_id);
    data = res1.data;
  }
  else {
    res1 = await axios.get('http://142.93.36.1/api/v1/marketResult?type=odds&market_id=' + market_id);
    data = res1.data;
  }
  res.json({
    message: "Result get successfully..",
    data: data
  });
});