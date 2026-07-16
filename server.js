const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());


app.post("/chat", async (req, res) => {

  const userMessage = req.body.message;


  // Temporary response (we connect ChatGPT next)
  const reply = 
  `🌱 YoSeeds AI received: "${userMessage}"`;


  res.json({
    reply: reply
  });

});


app.listen(3001, () => {
  console.log("YoSeeds AI server running on port 3001");
});
