
import {Configuration, OpenAIApi} from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const configuration = new Configuration({
  organization: process.env.ORG_KEY,
  apiKey: process.env.OPENAI_API_KEY
});
console.log(`Configuration: ${configuration.organization}, ${configuration.apiKey}`)
const openai = new OpenAIApi(configuration);
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post("/completion", async (req, res) => {
  const { message } = req.body;
  console.log(`Sending request to OpenAI. Message: ${message}`);
  
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `${message}` }]
    });

    console.log("Received response from OpenAI:", completion.data);

    res.json({
      completion: completion.data.choices[0].message
    });
    console.log("Received message from OpenAI:", completion.data.choices[0].message);

  } catch (error) {
    console.error("Error while communicating with OpenAI:", error);
    res.status(500).json({ error: "An error occurred while processing the request" });
  }
});

 

app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
  });