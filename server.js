const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 80;

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve images from 'imagens' directory
app.use('/assets', express.static(path.join(__dirname, 'imagens')));

// Main route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
