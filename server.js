const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/relay", async (req, res) => {
  const { url, method, headers, body } = req.body;
  try {
    const response = await axios({ url, method, headers, data: body });
    res.status(response.status).json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

app.listen(3000, () => console.log("🚀 CORS-прокси запущен"));
