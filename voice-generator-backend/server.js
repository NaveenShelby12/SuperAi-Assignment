require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { upload, uploadFile } = require('./controllers/fileController');
const { generateVoice } = require('./controllers/voiceController');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.post('/upload', upload.single('file'), uploadFile);
app.post('/generate-voice', generateVoice);

// Health Check
app.get('/', (req, res) => {
  res.status(200).send('Voice Backend is running...');
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
