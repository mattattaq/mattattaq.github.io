const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Import cors

const app = express();
const PORT = 3001;

app.use(cors()); // Use cors middleware
app.use(bodyParser.json());

const filePath = path.join(__dirname, '../../../../../timeline.json');
console.log('File path:', filePath);

app.get('/timeline', (req, res) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error('Error reading timeline data:', err);
      return res.status(500).json({ error: 'Failed to read timeline data' });
    }
    const timeline = JSON.parse(data);
    res.json(timeline);
  });
});

app.post('/timeline', (req, res) => {
  const newEntry = req.body;

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error('Error reading timeline data:', err);
      return res.status(500).json({ error: 'Failed to read timeline data' });
    }
    let timeline = [];
    try {
      timeline = JSON.parse(data);
    } catch (error) {
      console.error('Error parsing timeline data:', error);
      return res.status(500).json({ error: 'Failed to parse timeline data' });
    }

    timeline.push(newEntry);

    fs.writeFile(filePath, JSON.stringify(timeline, null, 2), (err) => {
      if (err) {
        console.error('Error writing timeline data:', err);
        return res.status(500).json({ error: 'Failed to write timeline data' });
      }
      res.status(201).json(newEntry);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
