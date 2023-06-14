
// const dotenv = require("dotenv");
// const { Configuration, OpenAIApi } = require("openai");
// const app = express();
// const cors = require("cors");
// const fetch = require("node-fetch");

// // Middleware
// app.use(cors());
// app.use(express.json());
// dotenv.config();

// const openai = new OpenAIApi(process.env.OPENAI_API_KEY);


// app.post("/completions", async (req, res) => {
//   const option = {
//     method: "POST",
//     headers: {
//       "Authorization": "Bearer " + process.env.OPENAI_API_KEY,
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: "Say this is a test!" }],
//       temperature: 0.7
//     })
//   };

//   try {
//   const response = await fetch('https://api.openai.com/v1/chat/completions', option);
//   const data = await response.json();
//   console.log(data, "dataaaa")
//   res.send(data);
// } catch (error) {
//   // Handle errors here
//   console.error("OpenAI API request failed:", error);
//   return res.status(500).json({
//     error: "Internal server error"
//   });
// }
// });

// const port = process.env.PORT || 5000; // 'P' in PORT should be uppercase
// app.listen(port, () => {
//   console.log(`Server has started on port ${port}`);
// });
import {Configuration, OpenAIApi} from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const configuration = new Configuration({
  organization: "org-NsynCDeRyuMXG7iIQWvvUkLg",
  apiKey: "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"
});
const openai = new OpenAIApi(configuration);
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post("/completion", async(req, res) => {
  const {message} = req.body
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: `${message}` }]
  })
  res.json({
    completion: completion.data.choices[0].message
  })
})
 

app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
  });