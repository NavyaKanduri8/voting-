const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// ✅ Enable CORS with custom config
app.use(cors({
  origin: 'http://127.0.0.1:5500', // frontend origin
  methods: ['GET', 'POST'],
  credentials: true
}));

// For parsing JSON
app.use(express.json());

// Example MetaMask route (just placeholder)
app.post('/get-nonce', (req, res) => {
  const { address } = req.body;
  const nonce = `Sign this message to log in: ${Date.now()}`;
  res.json({ nonce });
});

// ... your other routes ...

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
