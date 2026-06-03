const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEYS = (process.env.DEEPSEEK_API_KEY || '').split(',').map(k => k.trim()).filter(Boolean);
let keyIndex = 0;

app.use(express.json());
app.use(require('cors')());

app.get('/health', (req, res) => res.json({ status: 'ok', keys: API_KEYS.length }));

app.post('/v1/chat/completions', async (req, res) => {
  const apiKey = API_KEYS[keyIndex % API_KEYS.length];
  keyIndex++;
  try {
    const response = await axios.post('https://api.deepseek.com/v1/chat/completions', req.body, {
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      timeout: 60000
    });
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({
      error: err.response?.data || { message: err.message }
    });
  }
});

app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
